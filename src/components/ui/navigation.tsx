import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Heart, Users, Calendar, CreditCard, User, Menu, X } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={cn('bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50', className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">MediCare HMS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </NavLink>
            <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </NavLink>
            <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </NavLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <NavLink to="/login">
              <Button variant="ghost">Login</Button>
            </NavLink>
            <NavLink to="/signup">
              <Button variant="default">Get Started</Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink to="/#features" className="block py-2 text-muted-foreground hover:text-primary transition-colors">
              Features
            </NavLink>
            <NavLink to="/about" className="block py-2 text-muted-foreground hover:text-primary transition-colors">
              About
            </NavLink>
            <NavLink to="/contact" className="block py-2 text-muted-foreground hover:text-primary transition-colors">
              Contact
            </NavLink>
            <div className="pt-2 space-y-2">
              <NavLink to="/login" className="w-full">
                <Button variant="ghost" className="w-full justify-start">Login</Button>
              </NavLink>
              <NavLink to="/signup" className="w-full">
                <Button variant="default" className="w-full">Get Started</Button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}