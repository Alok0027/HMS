import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Users, FileText, Calendar } from "lucide-react";

const Training = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Training</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your team with our comprehensive training programs and resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Video Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Video className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-lg font-semibold">Video Tutorials</p>
                  <p className="text-sm text-muted-foreground">On-demand video tutorials for all user roles.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Webinars</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-lg font-semibold">Live Webinars</p>
                  <p className="text-sm text-muted-foreground">Join our live webinars for in-depth training.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Training Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-lg font-semibold">Documents</p>
                  <p className="text-sm text-muted-foreground">Download our training manuals and guides.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>On-site Training</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-lg font-semibold">On-site Training</p>
                  <p className="text-sm text-muted-foreground">Schedule on-site training for your team.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Training;