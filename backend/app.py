import os
from flask import Flask, request, jsonify, redirect, url_for
from datetime import datetime, date
from authlib.integrations.flask_client import OAuth
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///app.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)

oauth = OAuth(app)

google = oauth.register(
    name='google',
    client_id=os.environ.get('GOOGLE_CLIENT_ID'),
    client_secret=os.environ.get('GOOGLE_CLIENT_SECRET'),
    access_token_url='https://accounts.google.com/o/oauth2/token',
    access_token_params=None,
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    authorize_params=None,
    api_base_url='https://www.googleapis.com/oauth2/v1/',
    client_kwargs={'scope': 'openid email profile'},
    jwks_uri="https://www.googleapis.com/oauth2/v3/certs",
)


class Doctor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    specialty = db.Column(db.String(120), nullable=False)
    appointments = db.relationship('Appointment', backref='doctor', lazy=True)

class Patient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20))
    last_visit = db.Column(db.Date)
    appointments = db.relationship('Appointment', backref='patient', lazy=True)

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(20), nullable=False, default='Scheduled')
    patient_id = db.Column(db.Integer, db.ForeignKey('patient.id'), nullable=False)
    doctor_id = db.Column(db.Integer, db.ForeignKey('doctor.id'), nullable=False)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return f'<User {self.username}>'

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'message': 'Missing required fields'}), 400

    if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
        return jsonify({'message': 'User already exists'}), 400

    new_user = User(username=username, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and user.check_password(password):
        return jsonify({'message': 'Login successful'}), 200

    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/auth/google')
def google_login():
    redirect_uri = url_for('google_authorize', _external=True)
    return google.authorize_redirect(redirect_uri)

@app.route('/auth/google/callback')
def google_authorize():
    token = google.authorize_access_token()
    user_info = google.get('userinfo').json()
    email = user_info['email']
    username = user_info.get('name', email.split('@')[0])

    user = User.query.filter_by(email=email).first()
    if not user:
        user = User(username=username, email=email)
        db.session.add(user)
        db.session.commit()

    # Here you would typically create a session or JWT for the user
    return jsonify({'message': f'Logged in as {user.username}'})

@app.route('/api/dashboard-summary')
def dashboard_summary():
    total_revenue = 45231.89  # Placeholder
    total_appointments = Appointment.query.count()
    total_patients = Patient.query.count()
    # Placeholder for active now

    recent_appointments = Appointment.query.order_by(Appointment.date.desc()).limit(5).all()
    recent_appointments_data = [
        {
            'patient': appointment.patient.name,
            'date': appointment.date.strftime('%Y-%m-%d'),
            'time': appointment.date.strftime('%I:%M %p'),
            'status': appointment.status
        }
        for appointment in recent_appointments
    ]

    return jsonify({
        'totalRevenue': f'₹{total_revenue:,.2f}',
        'totalAppointments': total_appointments,
        'totalPatients': total_patients,
        'activeNow': 573, # Placeholder
        'recentAppointments': recent_appointments_data
    })

@app.route('/api/patients')
def get_patients():
    patients = Patient.query.all()
    patients_data = [
        {
            'name': patient.name,
            'email': patient.email,
            'phone': patient.phone,
            'last_visit': patient.last_visit.strftime('%Y-%m-%d') if patient.last_visit else None
        }
        for patient in patients
    ]
    return jsonify(patients_data)

@app.route('/api/appointments')
def get_appointments():
    appointments = Appointment.query.all()
    appointments_data = [
        {
            'patient': appointment.patient.name,
            'time': appointment.date.strftime('%I:%M %p')
        }
        for appointment in appointments
    ]
    return jsonify(appointments_data)

@app.route('/')
def index():
    return "Backend is running!"

if __name__ == '__main__':
    app.run(debug=True, port=5001)
