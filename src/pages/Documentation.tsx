import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, LifeBuoy, Users, Shield } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive guide to using and understanding our healthcare management system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Book className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-lg font-semibold">Getting Started</p>
                  <p className="text-sm text-muted-foreground">A step-by-step guide to setting up your account.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-lg font-semibold">User Guides</p>
                  <p className="text-sm text-muted-foreground">Detailed guides for patients, doctors, and admins.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <LifeBuoy className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-lg font-semibold">API Reference</p>
                  <p className="text-sm text-muted-foreground">Integrate with our system using our powerful API.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-lg font-semibold">Security</p>
                  <p className="text-sm text-muted-foreground">Learn about our security practices and compliance.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Documentation;