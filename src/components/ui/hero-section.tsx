import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  UserCheck, 
  ClipboardList, 
  Shield, 
  Calendar,
  CreditCard,
  Activity,
  Clock
} from 'lucide-react';

interface HeroSectionProps {
  className?: string;
  id?: string;
}

export function HeroSection({ className, id }: HeroSectionProps) {
  const roles = [
    { icon: Users, title: 'Patients', desc: 'Book appointments, view records' },
    { icon: UserCheck, title: 'Doctors', desc: 'Manage schedules, patient records' },
    { icon: ClipboardList, title: 'Receptionists', desc: 'Handle appointments, billing' },
    { icon: Shield, title: 'Admins', desc: 'System oversight, reporting' }
  ];

  const features = [
    { icon: Calendar, text: 'Smart Appointment Booking' },
    { icon: Activity, text: 'Digital Medical Records' },
    { icon: CreditCard, text: 'Automated Billing' },
    { icon: Clock, text: '24/7 Patient Access' }
  ];

  return (
    <section id={id} className={cn('py-20 bg-gradient-hero', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Modern Healthcare Management
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Streamline Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Healthcare </span>
            Operations
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Complete hospital management system with role-based access for patients, doctors, 
            and staff. Manage appointments, records, billing, and more in one secure platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <NavLink to="/signup">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
              </Button>
            </NavLink>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <feature.icon className="h-4 w-4 text-primary" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Role-based access cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <role.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{role.title}</h3>
                <p className="text-sm text-muted-foreground">{role.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}