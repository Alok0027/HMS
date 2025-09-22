import { Navigation } from "@/components/ui/navigation";

const HIPAACompliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">HIPAA Compliance</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to protecting your health information.
          </p>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2>Our Commitment to HIPAA</h2>
          <p>
            MediCare HMS is committed to protecting the privacy and security of our users' protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
          </p>

          <h2>How We Protect Your Information</h2>
          <p>
            We have implemented administrative, physical, and technical safeguards to protect the confidentiality, integrity, and availability of PHI. These safeguards include:
          </p>
          <ul>
            <li><strong>Technical Safeguards:</strong> We use encryption, access controls, and other security measures to protect PHI from unauthorized access.</li>
            <li><strong>Physical Safeguards:</strong> We have implemented policies and procedures to protect our facilities and equipment from unauthorized access.</li>
            <li><strong>Administrative Safeguards:</strong> We have implemented policies and procedures to ensure that our workforce is trained on HIPAA and our security policies.</li>
          </ul>

          <h2>Your Rights</h2>
          <p>
            Under HIPAA, you have certain rights with respect to your PHI. These rights include the right to:
          </p>
          <ul>
            <li>Request access to your PHI.</li>
            <li>Request an amendment of your PHI.</li>
            <li>Request an accounting of disclosures of your PHI.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our HIPAA compliance program, please contact us at:
          </p>
          <p>
            MediCare HMS<br />
            123 Health St, Wellness City, 12345<br />
            support@medicarehms.com
          </p>
        </div>
      </main>
    </div>
  );
};

export default HIPAACompliance;