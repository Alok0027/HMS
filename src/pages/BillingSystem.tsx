import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, FileText, PieChart, Receipt } from "lucide-react";

const BillingSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Billing System</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive billing and invoicing solution to streamline your financial operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Invoicing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">Invoicing</p>
                  <p className="text-sm text-muted-foreground">Create and manage patient invoices.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CreditCard className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">Payments</p>
                  <p className="text-sm text-muted-foreground">Process online and offline payments.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <PieChart className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">Reporting</p>
                  <p className="text-sm text-muted-foreground">Generate detailed financial reports.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Insurance Claims</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Receipt className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="text-2xl font-bold">Claims</p>
                  <p className="text-sm text-muted-foreground">Manage and track insurance claims.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BillingSystem;