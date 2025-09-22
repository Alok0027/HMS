import { Navigation } from "@/components/ui/navigation";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Security</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to keeping your data safe and secure.
          </p>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2>Data Encryption</h2>
          <p>
            All data transmitted to and from our servers is encrypted using industry-standard TLS encryption. Your data is also encrypted at rest to provide an additional layer of security.
          </p>

          <h2>Secure Infrastructure</h2>
          <p>
            Our infrastructure is hosted in a secure, SOC 2-compliant data center. We employ a variety of security measures to protect our infrastructure, including firewalls, intrusion detection systems, and regular security audits.
          </p>

          <h2>Access Control</h2>
          <p>
            We enforce strict access controls to ensure that only authorized personnel have access to your data. All access to our systems is logged and monitored.
          </p>

          <h2>Vulnerability Management</h2>
          <p>
            We regularly scan our systems for vulnerabilities and apply patches in a timely manner. We also work with third-party security researchers to identify and resolve security issues.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our security practices, please contact us at:
          </p>
          <p>
            MediCare HMS<br />
            123 Health St, Wellness City, 12345<br />
            security@medicarehms.com
          </p>
        </div>
      </main>
    </div>
  );
};

export default Security;