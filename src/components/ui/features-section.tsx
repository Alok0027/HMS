import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar,
  FileText,
  CreditCard,
  Users,
  Clock,
  Shield,
  Search,
  Bell,
  BarChart3,
  Stethoscope,
  Pill,
  HeartHandshake
} from 'lucide-react';

interface FeaturesSectionProps {
  className?: string;
  id?: string;
}

export function FeaturesSection({ className, id }: FeaturesSectionProps) {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Appointment Booking',
      description: 'Patients can search doctors by specialty, check availability, and book appointments instantly.',
      category: 'Scheduling',
      color: 'bg-primary'
    },
    {
      icon: FileText,
      title: 'Digital Medical Records',
      description: 'Secure, accessible patient records with complete medical history and real-time updates.',
      category: 'Records',
      color: 'bg-secondary'
    },
    {
      icon: CreditCard,
      title: 'Automated Billing',
      description: 'Generate invoices automatically after consultations with integrated payment processing.',
      category: 'Finance',
      color: 'bg-accent'
    },
    {
      icon: Users,
      title: 'Multi-Role Dashboard',
      description: 'Customized interfaces for patients, doctors, receptionists, and administrators.',
      category: 'Management',
      color: 'bg-medical-green'
    },
    {
      icon: Search,
      title: 'Doctor Discovery',
      description: 'Advanced search and filtering to find the right healthcare professional quickly.',
      category: 'Search',
      color: 'bg-primary'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'HIPAA-compliant security with role-based access control and data encryption.',
      category: 'Security',
      color: 'bg-secondary'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Automated reminders for appointments, medication, and follow-ups.',
      category: 'Communication',
      color: 'bg-accent'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Comprehensive reporting and analytics for hospital management insights.',
      category: 'Analytics',
      color: 'bg-medical-green'
    },
    {
      icon: Stethoscope,
      title: 'Telemedicine Ready',
      description: 'Built-in support for virtual consultations and remote patient monitoring.',
      category: 'Digital Health',
      color: 'bg-primary'
    }
  ];

  const categories = [...new Set(features.map(f => f.category))];

  return (
    <section id={id} className={cn('py-20 bg-background', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Comprehensive Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Everything You Need for Modern Healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From patient registration to billing, our platform handles every aspect of 
            hospital management with precision and care.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className={cn('p-2 rounded-lg', feature.color)}>
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero p-8 rounded-2xl">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <HeartHandshake className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Ready to Transform Your Healthcare?</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of healthcare providers who trust our platform for their daily operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors">
                Start Your Free Trial
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}