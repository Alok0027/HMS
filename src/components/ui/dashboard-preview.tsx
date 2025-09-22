import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar,
  Clock,
  User,
  Activity,
  DollarSign,
  Users,
  FileText,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Heart,
  Pill
} from 'lucide-react';

interface DashboardPreviewProps {
  className?: string;
}

export function DashboardPreview({ className }: DashboardPreviewProps) {
  const patientStats = [
    { icon: Calendar, label: 'Next Appointment', value: 'Dec 15, 2PM', color: 'text-primary' },
    { icon: FileText, label: 'Medical Records', value: '24 Records', color: 'text-secondary' },
    { icon: Pill, label: 'Prescriptions', value: '3 Active', color: 'text-accent' },
    { icon: Heart, label: 'Health Score', value: '85/100', color: 'text-medical-green' }
  ];

  const doctorStats = [
    { icon: Users, label: "Today's Patients", value: '12', color: 'text-primary' },
    { icon: Clock, label: 'Available Slots', value: '8', color: 'text-secondary' },
    { icon: Activity, label: 'Consultations', value: '156 This Month', color: 'text-accent' },
    { icon: TrendingUp, label: 'Patient Rating', value: '4.9/5', color: 'text-medical-green' }
  ];

  const adminStats = [
    { icon: Users, label: 'Total Patients', value: '2,847', color: 'text-primary' },
    { icon: User, label: 'Active Doctors', value: '45', color: 'text-secondary' },
    { icon: DollarSign, label: 'Monthly Revenue', value: '$125,400', color: 'text-accent' },
    { icon: Calendar, label: 'Appointments Today', value: '89', color: 'text-medical-green' }
  ];

  const recentAppointments = [
    { patient: 'Rohan Sharma', doctor: 'Dr. Gupta', time: '10:00 AM', status: 'confirmed' },
    { patient: 'Priya Patel', doctor: 'Dr. Singh', time: '11:30 AM', status: 'pending' },
    { patient: 'Amit Kumar', doctor: 'Dr. Reddy', time: '2:00 PM', status: 'completed' }
  ];

  return (
    <section className={cn('py-20 bg-muted/30', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Dashboard Preview
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Role-Based Dashboards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each role gets a customized dashboard with relevant information and tools 
            for efficient healthcare management.
          </p>
        </div>

        <Tabs defaultValue="patient" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="patient">Patient View</TabsTrigger>
            <TabsTrigger value="doctor">Doctor View</TabsTrigger>
            <TabsTrigger value="receptionist">Receptionist</TabsTrigger>
            <TabsTrigger value="admin">Admin View</TabsTrigger>
          </TabsList>

          {/* Patient Dashboard */}
          <TabsContent value="patient">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Welcome back, Rohan!</CardTitle>
                    <CardDescription>Here's your health overview</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {patientStats.map((stat, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                          <stat.icon className={cn('h-5 w-5', stat.color)} />
                          <div>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                            <p className="font-semibold">{stat.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-16 flex-col">
                      <Calendar className="h-5 w-5 mb-2" />
                      Book Appointment
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <FileText className="h-5 w-5 mb-2" />
                      View Records
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">Dr. Anjali Rao</p>
                      <Badge>Confirmed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Dec 15, 2024 at 2:00 PM</p>
                    <p className="text-sm text-muted-foreground">Cardiology Consultation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Doctor Dashboard */}
          <TabsContent value="doctor">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Dr. Anjali Rao - Cardiology</CardTitle>
                    <CardDescription>Your practice overview for today</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {doctorStats.map((stat, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                          <stat.icon className={cn('h-5 w-5', stat.color)} />
                          <div>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                            <p className="font-semibold">{stat.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Patient Queue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentAppointments.slice(0, 2).map((appointment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium">{appointment.patient}</p>
                            <p className="text-sm text-muted-foreground">{appointment.time}</p>
                          </div>
                          <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                            {appointment.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Schedule Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Update Availability</Button>
                  <Button variant="outline" className="w-full">View Full Schedule</Button>
                  <Button variant="outline" className="w-full">Patient Records</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Receptionist Dashboard */}
          <TabsContent value="receptionist">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Front Desk Operations</CardTitle>
                    <CardDescription>Manage appointments and patient check-ins</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold">23</p>
                        <p className="text-sm text-muted-foreground">Check-ins Today</p>
                      </div>
                      <div className="text-center p-4 bg-secondary/5 rounded-lg">
                        <Calendar className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <p className="font-semibold">89</p>
                        <p className="text-sm text-muted-foreground">Total Appointments</p>
                      </div>
                      <div className="text-center p-4 bg-accent/5 rounded-lg">
                        <AlertCircle className="h-8 w-8 text-accent mx-auto mb-2" />
                        <p className="font-semibold">3</p>
                        <p className="text-sm text-muted-foreground">Pending Approvals</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Today's Appointments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentAppointments.map((appointment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium">{appointment.patient}</p>
                            <p className="text-sm text-muted-foreground">{appointment.doctor} • {appointment.time}</p>
                          </div>
                          <Badge variant={appointment.status === 'completed' ? 'default' : 'secondary'}>
                            {appointment.status}
                          </Badge>
                          <Button size="sm" variant="outline" className="ml-2">
                            Manage
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Register Patient
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Appointment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Process Payment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Admin Dashboard */}
          <TabsContent value="admin">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Hospital Overview</CardTitle>
                    <CardDescription>Key metrics and system performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {adminStats.map((stat, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                          <stat.icon className={cn('h-5 w-5', stat.color)} />
                          <div>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                            <p className="font-semibold">{stat.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>System Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Database Health</span>
                        <Badge variant="default">Excellent</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">System Load</span>
                        <Badge variant="secondary">Normal</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Backup Status</span>
                        <Badge variant="default">Up to Date</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Management Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    User Management
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Activity className="h-4 w-4 mr-2" />
                    System Reports
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Audit Logs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}