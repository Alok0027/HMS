import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart2, Settings, Shield } from "lucide-react";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Admin Panel</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            System-wide management and analytics for your healthcare organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">1,250 Users</p>
                  <p className="text-sm text-muted-foreground">Manage patients, doctors, and staff.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BarChart2 className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">Analytics</p>
                  <p className="text-sm text-muted-foreground">View system usage and performance.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Settings className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">Settings</p>
                  <p className="text-sm text-muted-foreground">Configure system-wide settings.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">Security</p>
                  <p className="text-sm text-muted-foreground">Monitor and manage system security.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;