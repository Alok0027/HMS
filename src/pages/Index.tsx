import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { AuthSection } from '@/components/ui/auth-section';
import { FeaturesSection } from '@/components/ui/features-section';
import { DashboardPreview } from '@/components/ui/dashboard-preview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection id="about" />
      <AuthSection />
      <FeaturesSection id="features" />
      <DashboardPreview />
      
      {/* Footer */}
      <footer id="contact" className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-foreground">MediCare HMS</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Modern healthcare management system for hospitals, clinics, and healthcare providers.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/patient-portal" className="hover:text-primary transition-colors">Patient Portal</a></li>
                <li><a href="/doctor-dashboard" className="hover:text-primary transition-colors">Doctor Dashboard</a></li>
                <li><a href="/admin-panel" className="hover:text-primary transition-colors">Admin Panel</a></li>
                <li><a href="/billing-system" className="hover:text-primary transition-colors">Billing System</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/documentation" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="/help-center" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="/contact-us" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="/training" className="hover:text-primary transition-colors">Training</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="/hipaa-compliance" className="hover:text-primary transition-colors">HIPAA Compliance</a></li>
                <li><a href="/security" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 MediCare HMS. All rights reserved. Built for modern healthcare.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;