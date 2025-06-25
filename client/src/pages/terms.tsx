import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "acceptance",
        "description",
        "user-accounts",
        "payment-terms",
        "prohibited-uses",
        "intellectual-property",
        "privacy",
        "disclaimers",
        "limitation-liability",
        "indemnification",
        "termination",
        "governing-law",
        "changes",
        "contact"
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tableOfContents = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "description", title: "Service Description" },
    { id: "user-accounts", title: "User Accounts" },
    { id: "payment-terms", title: "Payment Terms" },
    { id: "prohibited-uses", title: "Prohibited Uses" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "privacy", title: "Privacy Policy" },
    { id: "disclaimers", title: "Disclaimers" },
    { id: "limitation-liability", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "termination", title: "Termination" },
    { id: "governing-law", title: "Governing Law" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Information" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            {/* Table of Contents - Sidebar */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === item.id
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl">
              {/* Header */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="mb-6">
                  <Button 
                    variant="outline" 
                    className="mb-6"
                    onClick={() => window.history.back()}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Terms of Service
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Effective Date:</span> June 25, 2025
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div>
                    <span className="font-medium">Last Updated:</span> June 25, 2025
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="prose prose-gray max-w-none">
                <section id="acceptance" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By accessing and using ShulPad's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms of Service ("Terms") govern your use of ShulPad's donation kiosk platform and related services (the "Service") operated by ShulPad ("us", "we", or "our").
                  </p>
                </section>

                <section id="description" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. Service Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    ShulPad provides a donation kiosk platform that transforms iPads into professional fundraising stations. Our service includes:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
                    <li>Mobile application for donation processing</li>
                    <li>Integration with Square payment processing</li>
                    <li>Customizable donation interfaces</li>
                    <li>Analytics and reporting dashboard</li>
                    <li>Email receipt generation</li>
                    <li>Customer support services</li>
                  </ul>
                </section>

                <section id="user-accounts" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. User Accounts and Registration
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To access certain features of our Service, you must register for an account. You agree to:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your password and account</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized access or use</li>
                  </ul>
                </section>

                <section id="payment-terms" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Payment Terms
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Subscription Fees</h3>
                      <p>Our Service is provided on a subscription basis. Subscription fees are charged monthly and are non-refundable except as expressly provided in these Terms.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Processing</h3>
                      <p>Donation transactions are processed through Square, Inc. Square's terms and conditions apply to all payment processing. We do not store payment card information.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Transaction Fees</h3>
                      <p>Square charges processing fees for each transaction. These fees are separate from our subscription fees and are disclosed during the payment process.</p>
                    </div>
                  </div>
                </section>

                <section id="prohibited-uses" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Prohibited Uses
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You may not use our Service:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>For any unlawful purpose or to solicit others to engage in unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To collect or track personal information of others</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  </ul>
                </section>

                <section id="intellectual-property" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Intellectual Property Rights
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of ShulPad and its licensors. The Service is protected by copyright, trademark, and other laws.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You retain ownership of any content you provide through the Service, but grant us a license to use such content to provide the Service to you.
                  </p>
                </section>

                <section id="privacy" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Privacy Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your personal information.
                  </p>
                </section>

                <section id="disclaimers" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Disclaimers
                  </h2>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.</strong> SHULPAD DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We do not warrant that the Service will be uninterrupted, timely, secure, or error-free, or that defects will be corrected.
                    </p>
                  </div>
                </section>

                <section id="limitation-liability" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    9. Limitation of Liability
                  </h2>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHULPAD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.</strong> Our total liability shall not exceed the amount paid by you for the Service in the twelve months preceding the claim.
                    </p>
                  </div>
                </section>

                <section id="indemnification" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    10. Indemnification
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    You agree to defend, indemnify, and hold harmless ShulPad and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) resulting from your use of the Service or violation of these Terms.
                  </p>
                </section>

                <section id="termination" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    11. Termination
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including breach of the Terms.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You may terminate your account at any time by contacting us. Upon termination, your right to use the Service will cease immediately.
                  </p>
                </section>

                <section id="governing-law" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    12. Governing Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms shall be governed and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts of Delaware.
                  </p>
                </section>

                <section id="changes" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    13. Changes to Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. Continued use of the Service after changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                <section id="contact" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    14. Contact Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Email:</strong> info@shulpad.com</p>
                      <p><strong>Phone:</strong> +1 (617) 903-2387</p>
                    </div>
                  </div>
                </section>

                {/* Footer Note */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                  <p className="text-sm text-gray-600 text-center">
                    These terms of service were last updated on June 25, 2025 and are effective as of June 25, 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}