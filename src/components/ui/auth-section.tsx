import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, UserCheck, ClipboardList, Shield, Mail, Lock, User, Phone } from 'lucide-react';

interface AuthSectionProps {
  className?: string;
}

export function AuthSection({ className }: AuthSectionProps) {
  const [activeRole, setActiveRole] = React.useState('patient');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    const response = await fetch('http://localhost:5004/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password }), // Assuming username is email for login
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) {
      window.location.href = '/app';
    }
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value;
    const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value;
    const email = (form.elements.namedItem('registerEmail') as HTMLInputElement).value;
    const password = (form.elements.namedItem('registerPassword') as HTMLInputElement).value;

    const response = await fetch('http://localhost:5004/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: `${firstName} ${lastName}`, email, password }),
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) {
      window.location.href = '/app';
    }
  };

  const roles = [
    { id: 'patient', icon: Users, title: 'Patient', color: 'bg-primary' },
    { id: 'doctor', icon: UserCheck, title: 'Doctor', color: 'bg-secondary' },
    { id: 'receptionist', icon: ClipboardList, title: 'Receptionist', color: 'bg-accent' },
    { id: 'admin', icon: Shield, title: 'Admin', color: 'bg-medical-green' }
  ];

  return (
    <section className={cn('py-16 bg-muted/30', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Access Your Healthcare Dashboard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Secure login for all healthcare professionals and patients. Choose your role to get started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Role Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Your Role</CardTitle>
                  <CardDescription>
                    Choose your role to access the appropriate dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {roles.map((role) => (
                    <div
                      key={role.id}
                      className={cn(
                        'flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all',
                        activeRole === role.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      )}
                      onClick={() => setActiveRole(role.id)}
                    >
                      <div className={cn('p-2 rounded-lg', role.color)}>
                        <role.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{role.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {role.id === 'patient' && 'Book appointments, view records'}
                          {role.id === 'doctor' && 'Manage patients, schedules'}
                          {role.id === 'receptionist' && 'Handle appointments, billing'}
                          {role.id === 'admin' && 'System management'}
                        </p>
                      </div>
                      {activeRole === role.id && (
                        <Badge variant="default" className="ml-auto">Selected</Badge>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Auth Forms */}
              <Card>
                <TabsContent value="login" className="m-0">
                  <form onSubmit={handleLogin}>
                    <CardHeader>
                      <CardTitle>Welcome Back</CardTitle>
                      <CardDescription>
                        Sign in to your {roles.find(r => r.id === activeRole)?.title.toLowerCase()} dashboard
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
                        </div>
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Sign In as {roles.find(r => r.id === activeRole)?.title}
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">
                        <a href="#" className="text-primary hover:underline">Forgot password?</a>
                      </p>
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-card px-2 text-muted-foreground">
                            Or continue with
                          </span>
                        </div>
                      </div>
                      <a href="http://localhost:5004/auth/google" className="w-full">
                        <Button variant="outline" className="w-full">
                          Login with Google
                        </Button>
                      </a>
                    </CardContent>
                  </form>
                </TabsContent>

                <TabsContent value="register" className="m-0">
                  <form onSubmit={handleRegister}>
                    <CardHeader>
                      <CardTitle>Create Account</CardTitle>
                      <CardDescription>
                        Register as a new {roles.find(r => r.id === activeRole)?.title.toLowerCase()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="registerEmail">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="registerEmail" type="email" placeholder="john@example.com" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="pl-10" />
                        </div>
                      </div>
                      {activeRole === 'doctor' && (
                        <div className="space-y-2">
                          <Label htmlFor="specialty">Specialty</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your specialty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cardiology">Cardiology</SelectItem>
                              <SelectItem value="dermatology">Dermatology</SelectItem>
                              <SelectItem value="neurology">Neurology</SelectItem>
                              <SelectItem value="pediatrics">Pediatrics</SelectItem>
                              <SelectItem value="psychiatry">Psychiatry</SelectItem>
                              <SelectItem value="surgery">Surgery</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="registerPassword">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="registerPassword" type="password" placeholder="Create a password" className="pl-10" />
                        </div>
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Create {roles.find(r => r.id === activeRole)?.title} Account
                      </Button>
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-card px-2 text-muted-foreground">
                            Or continue with
                          </span>
                        </div>
                      </div>
                      <a href="http://localhost:5004/auth/google" className="w-full">
                        <Button variant="outline" className="w-full">
                          Login with Google
                        </Button>
                      </a>
                    </CardContent>
                  </form>
                </TabsContent>
              </Card>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}