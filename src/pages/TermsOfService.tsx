import { Navigation } from "@/components/ui/navigation";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Last updated: September 22, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2>1. Agreement to Terms</h2>
          <p>
            By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Use of Services</h2>
          <p>
            You may use our services only for lawful purposes and in accordance with these Terms of Service. You agree not to use the services:
          </p>
          <ul>
            <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
          </ul>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by MediCare HMS, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2>4. Governing Law</h2>
          <p>
            All matters relating to the Service and these Terms of Service, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the State of California without giving effect to any choice or conflict of law provision or rule.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have questions or comments about these Terms of Service, please contact us at:
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

export default TermsOfService;