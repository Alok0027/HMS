import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, FileText, MessageSquare } from "lucide-react";

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Doctor Dashboard</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A powerful and intuitive dashboard to manage your patients, appointments, and clinical workflows efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">12 Appointments</p>
                  <p className="text-sm text-muted-foreground">View and manage your daily schedule.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Patient Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">5 Patients Waiting</p>
                  <p className="text-sm text-muted-foreground">Manage patient check-ins and wait times.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Unread Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">3 New Messages</p>
                  <p className="text-sm text-muted-foreground">Respond to patient inquiries securely.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Lab Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">8 Results to Review</p>
                  <p className="text-sm text-muted-foreground">Review and sign off on lab reports.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;