import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Users, Heart, Shield, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About MediCare HMS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing healthcare management through technology, compassion, and innovation.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/placeholder.svg" alt="Hospital staff collaborating" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-muted-foreground mb-6">
              Our mission is to empower healthcare providers with a comprehensive, intuitive, and secure management system. We aim to streamline hospital operations, enhance patient care, and improve clinical outcomes. We envision a future where technology seamlessly integrates with healthcare, making it accessible, efficient, and patient-centric.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Streamline Operations</h3>
                  <p className="text-sm text-muted-foreground">Automate administrative tasks and optimize workflows.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Enhance Patient Care</h3>
                  <p className="text-sm text-muted-foreground">Provide better patient experiences and outcomes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Ensure Security</h3>
                  <p className="text-sm text-muted-foreground">Protect sensitive patient data with top-tier security.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            A dedicated group of developers, healthcare experts, and innovators.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member Card */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <img src="/placeholder.svg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="font-bold text-lg">Dr. Emily Carter</h3>
              <p className="text-sm text-primary">Chief Medical Officer</p>
              <p className="text-xs text-muted-foreground mt-2">Leading our clinical strategy with 20+ years of experience.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;