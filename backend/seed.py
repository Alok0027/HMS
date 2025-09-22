from app import app, db, Doctor, Patient, Appointment
from datetime import datetime, timedelta
from faker import Faker

fake = Faker('en_IN')

def seed_data():
    with app.app_context():
        # Clear existing data
        db.session.query(Appointment).delete()
        db.session.query(Patient).delete()
        db.session.query(Doctor).delete()
        db.session.commit()

        # Create doctors
        doctors = [
            Doctor(name='Dr. Priya Sharma', specialty='Cardiology'),
            Doctor(name='Dr. Rajesh Kumar', specialty='Neurology'),
            Doctor(name='Dr. Sunita Patel', specialty='Pediatrics'),
        ]
        db.session.add_all(doctors)
        db.session.commit()

        # Create patients
        patients = []
        for _ in range(20):
            patient = Patient(
                name=fake.name(),
                email=fake.email(),
                phone=fake.phone_number(),
                last_visit=fake.date_between(start_date='-1y', end_date='today')
            )
            patients.append(patient)
        db.session.add_all(patients)
        db.session.commit()

        # Create appointments
        appointments = []
        for patient in patients:
            for i in range(fake.random_int(min=1, max=3)):
                appointment = Appointment(
                    date=datetime.now() + timedelta(days=fake.random_int(min=1, max=30)),
                    status=fake.random_element(elements=('Scheduled', 'Completed', 'Cancelled')),
                    patient_id=patient.id,
                    doctor_id=fake.random_element(elements=doctors).id
                )
                appointments.append(appointment)
        db.session.add_all(appointments)
        db.session.commit()

        print('Database seeded successfully!')

if __name__ == '__main__':
    seed_data()
