import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, FileText, MessageSquare, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';

const PatientPortal = () => {
  return (
    <div className="bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Patient Portal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your health, at your fingertips. Access your medical records, appointments, and more.
          </p>
        </div>
      </section>

      {/* Portal Login Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex justify-center">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle className="text-2xl">Secure Patient Login</CardTitle>
              <CardDescription>Access your personal health information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="patientId">Patient ID or Email</Label>
                <Input id="patientId" placeholder="Enter your ID or email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <Button asChild className="w-full" size="lg">
                <Link to="/login">Login to Portal</Link>
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                First time logging in? <Link to="/signup" className="underline">Register here</Link>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Portal Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manage your healthcare journey with our easy-to-use tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Appointments</h3>
              <p className="text-sm text-muted-foreground">Book, reschedule, or cancel appointments with ease.</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Medical Records</h3>
              <p className="text-sm text-muted-foreground">View lab results, visit summaries, and medical history.</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <Pill className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Prescriptions</h3>
              <p className="text-sm text-muted-foreground">Request prescription refills and view medication history.</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Secure Messaging</h3>
              <p className="text-sm text-muted-foreground">Communicate securely with your healthcare provider.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientPortal;