import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to your questions and get the support you need.
          </p>
          <div className="relative mt-8 max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search for help..." className="pl-10" />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I book an appointment?</AccordionTrigger>
                <AccordionContent>
                  You can book an appointment through the patient portal. Navigate to the appointments section, choose your desired doctor and time slot, and confirm your booking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I access my medical records?</AccordionTrigger>
                <AccordionContent>
                  Your medical records are available in the patient portal. You can view, download, and share them securely from the records section.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                <AccordionContent>
                  You can reset your password by clicking the "Forgot Password" link on the login page. Follow the instructions sent to your email to create a new password.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default HelpCenter;