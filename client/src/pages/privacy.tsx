import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import {
  ArrowLeft,
  Mail,
  Phone,
  FileText,
  Shield,
  Users,
  Database,
  Eye,
  ChevronRight,
} from "lucide-react";

export default function Privacy() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = [
        "introduction",
        "information-we-collect",
        "how-we-use-information",
        "information-sharing",
        "data-security",
        "data-retention",
        "your-rights",
        "childrens-privacy",
        "international-transfers",
        "california-rights",
        "changes",
        "contact",
        "compliance"
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
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use-information", title: "How We Use Your Information" },
    { id: "information-sharing", title: "Information Sharing and Disclosure" },
    { id: "data-security", title: "Data Security" },
    { id: "data-retention", title: "Data Retention" },
    { id: "your-rights", title: "Your Rights and Choices" },
    { id: "childrens-privacy", title: "Children's Privacy" },
    { id: "international-transfers", title: "International Data Transfers" },
    { id: "california-rights", title: "California Privacy Rights" },
    { id: "changes", title: "Changes to This Privacy Policy" },
    { id: "contact", title: "Contact Information" },
    { id: "compliance", title: "Compliance" },
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
                  Privacy Policy
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Effective Date:</span> June 18, 2025
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div>
                    <span className="font-medium">Last Updated:</span> June 18, 2025
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="prose prose-gray max-w-none">
                <section id="introduction" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    ShulPad ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service").
                  </p>
                </section>

                <section id="information-we-collect" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Information We Collect
                  </h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Email Addresses:</strong> We collect email addresses when you request donation receipts
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Contact Information:</strong> Organization contact details for receipt customization
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">Payment Information</h3>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Donation Amounts:</strong> Transaction values for receipt generation and record-keeping
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Transaction Data:</strong> Payment identifiers, order numbers, and transaction dates
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Note:</strong> Payment card information is processed directly by Square and is not stored on our servers
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">Device and Technical Information</h3>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Device Identifiers:</strong> Unique device IDs for authentication and device management
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Location Data:</strong> Your device's location when using card reader functionality (required for Square payment processing)
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>App Usage Data:</strong> Information about how you interact with our app for troubleshooting and improvement
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">Organization Data</h3>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Business Information:</strong> Organization names, tax identification numbers, and business settings
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Receipt Preferences:</strong> Custom messages and branding preferences for donation receipts
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="how-we-use-information" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-700 mb-6">We use the collected information for the following purposes:</p>
                  <ul className="space-y-3 text-gray-700 ml-4">
                    {[
                      { title: "Payment Processing", desc: "Facilitate secure donation transactions through Square" },
                      { title: "Receipt Generation", desc: "Send tax-deductible donation receipts via email" },
                      { title: "Service Delivery", desc: "Provide core app functionality including card reader connectivity" },
                      { title: "Customer Support", desc: "Respond to inquiries and provide technical assistance" },
                      { title: "Service Improvement", desc: "Analyze usage patterns to enhance app performance and features" },
                      { title: "Legal Compliance", desc: "Maintain records as required by applicable laws and regulations" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong>{item.title}:</strong> {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="information-sharing" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Information Sharing and Disclosure
                  </h2>
                  <p className="text-gray-700 mb-6">We may share your information in the following circumstances:</p>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Third-Party Service Providers</h3>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div><strong>Square:</strong> Payment processing, merchant services, and card reader functionality</div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div><strong>Email Services:</strong> Email delivery services for donation receipts</div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div><strong>Database Services:</strong> Secure database hosting and management</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Legal Requirements</h3>
                      <p className="text-gray-700">We may disclose your information if required by law, court order, or government regulation.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Business Transfers</h3>
                      <p className="text-gray-700">In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>
                    </div>
                  </div>
                </section>

                <section id="data-security" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Data Security
                  </h2>
                  <p className="text-gray-700 mb-6">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    {[
                      "Encrypted data transmission and storage",
                      "Secure authentication protocols",
                      "Regular security assessments and updates",
                      "Limited access to personal information on a need-to-know basis"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="data-retention" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Data Retention
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
                  </p>
                  <ul className="space-y-3 text-gray-700 ml-4">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div><strong>Transaction Records:</strong> Retained for tax and legal compliance purposes</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div><strong>Email Addresses:</strong> Retained while you use our services or as required by law</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div><strong>Technical Data:</strong> Retained for operational purposes and service improvement</div>
                    </li>
                  </ul>
                </section>

                <section id="your-rights" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Your Rights and Choices
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="space-y-3 text-gray-700 ml-4">
                    {[
                      { title: "Access", desc: "Request a copy of the personal information we hold about you" },
                      { title: "Correction", desc: "Request correction of inaccurate or incomplete information" },
                      { title: "Deletion", desc: "Request deletion of your personal information (subject to legal requirements)" },
                      { title: "Portability", desc: "Request transfer of your data to another service provider" },
                      { title: "Opt-Out", desc: "Unsubscribe from marketing communications" }
                    ].map((right, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                          <strong>{right.title}:</strong> {right.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </section>

                <section id="childrens-privacy" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Children's Privacy
                  </h2>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700">
                      Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                    </p>
                  </div>
                </section>

                <section id="international-transfers" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    International Data Transfers
                  </h2>
                  <p className="text-gray-700">
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                  </p>
                </section>

                <section id="california-rights" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    California Privacy Rights
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4 ml-4">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Right to know what personal information is collected</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Right to delete personal information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Right to opt-out of the sale of personal information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Right to non-discrimination for exercising your privacy rights</span>
                    </li>
                  </ul>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700 font-medium">
                      We do not sell your personal information to third parties.
                    </p>
                  </div>
                </section>

                <section id="changes" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </section>

                <section id="contact" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <p className="text-gray-700 mb-6">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a href="mailto:info@shulpad.com" className="text-blue-600 hover:text-blue-700">
                          info@shulpad.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a href="tel:+16179032387" className="text-blue-600 hover:text-blue-700">
                          +1 (617) 903-2387
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="compliance" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Compliance
                  </h2>
                  <p className="text-gray-700 mb-4">
                    This Privacy Policy is designed to comply with applicable privacy laws, including:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    {[
                      "General Data Protection Regulation (GDPR)",
                      "California Consumer Privacy Act (CCPA)",
                      "Children's Online Privacy Protection Act (COPPA)",
                      "Other applicable state and federal privacy laws"
                    ].map((law, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{law}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Footer Note */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                  <p className="text-sm text-gray-600 text-center">
                    This privacy policy was last updated on June 18, 2025 and is effective as of June 18, 2025.
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