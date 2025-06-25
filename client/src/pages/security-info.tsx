import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Shield, Lock, Database, Mail, CheckCircle, Eye, Server } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";

export default function SecurityInfo() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "payment-security",
        "data-protection",
        "privacy-practices",
        "compliance",
        "physical-security"
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
    { id: "overview", title: "Security Overview" },
    { id: "payment-security", title: "Payment Security" },
    { id: "data-protection", title: "Data Protection" },
    { id: "privacy-practices", title: "Privacy Practices" },
    { id: "compliance", title: "Compliance Standards" },
    { id: "physical-security", title: "Physical Security" }
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
                  Security Guide
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
                  Security Information
                </h1>
                <p className="text-xl text-gray-600">
                  Learn how ShulPad protects your data, donors' information, and ensures secure donation processing.
                </p>
              </div>

              {/* Content Sections */}
              <div className="prose prose-gray max-w-none">
                <section id="overview" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Security Overview
                  </h2>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <Shield className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-medium text-green-900 mb-2">Enterprise-Grade Security</h3>
                        <p className="text-green-800">
                          ShulPad leverages Square's PCI DSS Level 1 compliant infrastructure and industry-leading security practices to protect all donation transactions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Kiosk Security Features</h3>
                      <p className="text-gray-700 mb-4">
                        Protect your hardware investment with built-in security features:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-gray-200 rounded-lg p-6">
                          <h4 className="font-medium text-gray-900 mb-3">Hardware Protection</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                              <Lock className="w-4 h-4 text-blue-500 mr-2" />
                              Locking screw mechanism (included with Square readers)
                            </li>
                            <li className="flex items-center">
                              <Lock className="w-4 h-4 text-blue-500 mr-2" />
                              Tamper-resistant mounting options
                            </li>
                            <li className="flex items-center">
                              <Lock className="w-4 h-4 text-blue-500 mr-2" />
                              Secure cable management
                            </li>
                            <li className="flex items-center">
                              <Lock className="w-4 h-4 text-blue-500 mr-2" />
                              Professional appearance deters theft
                            </li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-6">
                          <h4 className="font-medium text-gray-900 mb-3">Software Protection</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                              <Shield className="w-4 h-4 text-green-500 mr-2" />
                              iPad Guided Access prevents app switching
                            </li>
                            <li className="flex items-center">
                              <Shield className="w-4 h-4 text-green-500 mr-2" />
                              Passcode protection for administrative access
                            </li>
                            <li className="flex items-center">
                              <Shield className="w-4 h-4 text-green-500 mr-2" />
                              No access to iPad settings or other apps
                            </li>
                            <li className="flex items-center">
                              <Shield className="w-4 h-4 text-green-500 mr-2" />
                              Remote wipe capability if device is stolen
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Best Practices for Physical Security</h3>
                      <div className="space-y-4">
                        <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                          <h4 className="font-medium text-yellow-900 mb-2">⚠️ Installation Tips</h4>
                          <ul className="space-y-1 text-sm text-yellow-800">
                            <li>• Install in well-lit, high-traffic areas</li>
                            <li>• Use the provided locking screw for all installations</li>
                            <li>• Consider additional security cameras for monitoring</li>
                            <li>• Train staff on proper Guided Access setup</li>
                          </ul>
                        </div>
                        
                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                          <h4 className="font-medium text-green-900 mb-2">✅ Security Checklist</h4>
                          <ul className="space-y-1 text-sm text-green-800">
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              Guided Access enabled with secure passcode
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              Locking screw properly installed
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              iPad mounted securely to stand/kiosk
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                              Clear sight lines for staff monitoring
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Insurance &amp; Protection</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-medium text-blue-900 mb-3">Coverage Recommendations</h4>
                        <p className="text-blue-800 mb-3">
                          Consider these protection options for your kiosk hardware:
                        </p>
                        <ul className="space-y-2 text-sm text-blue-800 ml-4">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>AppleCare+ for iPad protection against accidental damage</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Business insurance coverage for electronic equipment</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Square hardware protection plans available</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Security Contact */}
                <section className="mb-12">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Security Questions or Concerns?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Our security team is available to address any questions about ShulPad's security practices or compliance requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="bg-gray-900 hover:bg-gray-800">
                        <a href="mailto:security@shulpad.com">Contact Security Team</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="/contact">General Contact</a>
                      </Button>
                    </div>
                  </div>
                </section>

                {/* Transparency Note */}
                <section className="mb-12">
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Security Transparency
                    </h3>
                    <p className="text-gray-700 mb-4">
                      We believe in transparency about our security practices. This page will be updated as we enhance our security measures and compliance certifications.
                    </p>
                    <p className="text-sm text-gray-600">
                      Last updated: June 25, 2025 | For the most current security information, please contact our security team.
                    </p>
                  </div>
                </section>
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
