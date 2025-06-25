import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, CheckCircle, AlertTriangle, Mail, MapPin, CreditCard } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";

export default function IntegrationHelp() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "square-integration",
        "email-receipts",
        "data-flow",
        "troubleshooting",
        "common-issues"
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
    { id: "square-integration", title: "Square Integration" },
    { id: "email-receipts", title: "Email Receipts" },
    { id: "data-flow", title: "How It Works" },
    { id: "troubleshooting", title: "Troubleshooting" },
    { id: "common-issues", title: "Common Issues" }
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
                  Integration Guide
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
                  Integration Help
                </h1>
                <p className="text-xl text-gray-600">
                  Learn how ShulPad integrates with Square and other services to provide seamless donation processing.
                </p>
              </div>

              {/* Content Sections */}
              <div className="prose prose-gray max-w-none">
                <section id="square-integration" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Square Integration
                  </h2>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <CreditCard className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-medium text-blue-900 mb-2">Secure OAuth Connection</h3>
                        <p className="text-blue-800">
                          ShulPad uses Square's OAuth system to securely connect to your account without storing your credentials.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">How It Works</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-6 border border-gray-200 rounded-lg">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
                          <h4 className="font-medium text-gray-900 mb-2">OAuth Request</h4>
                          <p className="text-gray-600 text-sm">ShulPad requests permission to connect to your Square account</p>
                        </div>
                        <div className="text-center p-6 border border-gray-200 rounded-lg">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
                          <h4 className="font-medium text-gray-900 mb-2">You Authorize</h4>
                          <p className="text-gray-600 text-sm">You grant permission through Square's secure login</p>
                        </div>
                        <div className="text-center p-6 border border-gray-200 rounded-lg">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
                          <h4 className="font-medium text-gray-900 mb-2">Automatic Setup</h4>
                          <p className="text-gray-600 text-sm">If your Square account is configured, integration is instant</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Prerequisites</h3>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Active Square account with business location set up</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Bank account connected to Square for payouts</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Square account in good standing</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">What ShulPad Can Access</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                          <h4 className="font-medium text-green-900 mb-2">✅ Authorized Access:</h4>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• Process payments</li>
                            <li>• Read business location info</li>
                            <li>• Access transaction details for receipts</li>
                          </ul>
                        </div>
                        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                          <h4 className="font-medium text-red-900 mb-2">❌ Cannot Access:</h4>
                          <ul className="text-sm text-red-800 space-y-1">
                            <li>• Your Square login credentials</li>
                            <li>• Bank account information</li>
                            <li>• Other Square applications</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="email-receipts" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Email Receipt System
                  </h2>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-medium text-purple-900 mb-2">Powered by SendGrid</h3>
                        <p className="text-purple-800">
                          ShulPad uses SendGrid's enterprise email service to deliver donation receipts reliably and securely.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">How Email Receipts Work</h3>
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="text-center p-4 border border-gray-200 rounded-lg">
                          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
                          <h4 className="font-medium text-gray-900 mb-2">Donation Made</h4>
                          <p className="text-gray-600 text-sm">Payment processed through Square</p>
                        </div>
                        <div className="text-center p-4 border border-gray-200 rounded-lg">
                          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
                          <h4 className="font-medium text-gray-900 mb-2">Email Prompt</h4>
                          <p className="text-gray-600 text-sm">Donor asked if they want a receipt</p>
                        </div>
                        <div className="text-center p-4 border border-gray-200 rounded-lg">
                          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
                          <h4 className="font-medium text-gray-900 mb-2">Email Entered</h4>
                          <p className="text-gray-600 text-sm">Donor provides email address</p>
                        </div>
                        <div className="text-center p-4 border border-gray-200 rounded-lg">
                          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">4</div>
                          <h4 className="font-medium text-gray-900 mb-2">Receipt Sent</h4>
                          <p className="text-gray-600 text-sm">ShulPad sends receipt via SendGrid</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Receipt Features</h3>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>IRS-compliant tax deduction information</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Organization branding and tax ID number</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Transaction details and timestamp</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Professional formatting for donor records</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Email Setup Requirements</h3>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800 font-medium">✅ No Additional Setup Required</p>
                        <p className="text-green-700 text-sm mt-2">
                          Email receipts work automatically once you complete the ShulPad setup. No email configuration needed on your end.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="data-flow" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    How Everything Works Together
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Complete Donation Flow</h3>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">1</div>
                            <div>
                              <h4 className="font-medium text-gray-900">Donor Interaction</h4>
                              <p className="text-gray-600 text-sm">Donor selects amount and taps card on Square reader</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">2</div>
                            <div>
                              <h4 className="font-medium text-gray-900">Payment Processing</h4>
                              <p className="text-gray-600 text-sm">Square securely processes the payment and approves transaction</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">3</div>
                            <div>
                              <h4 className="font-medium text-gray-900">Receipt Option</h4>
                              <p className="text-gray-600 text-sm">ShulPad asks donor if they want an email receipt</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">4</div>
                            <div>
                              <h4 className="font-medium text-gray-900">Email Collection</h4>
                              <p className="text-gray-600 text-sm">If yes, donor enters email address on screen</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">5</div>
                            <div>
                              <h4 className="font-medium text-gray-900">Receipt Delivery</h4>
                              <p className="text-gray-600 text-sm">ShulPad sends formatted receipt via SendGrid</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">6</div>
                            <div>
                              <h4 className="font-medium text-gray-900">Square Dashboard</h4>
                              <p className="text-gray-600 text-sm">Transaction appears in your Square dashboard for tracking and payouts</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Data Responsibilities</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                          <h4 className="font-medium text-blue-900 mb-2">Square Handles:</h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Payment processing</li>
                            <li>• Card data security</li>
                            <li>• Transaction records</li>
                            <li>• Bank transfers</li>
                            <li>• PCI compliance</li>
                          </ul>
                        </div>
                        <div className="border border-purple-200 bg-purple-50 rounded-lg p-4">
                          <h4 className="font-medium text-purple-900 mb-2">ShulPad Handles:</h4>
                          <ul className="text-sm text-purple-800 space-y-1">
                            <li>• User interface</li>
                            <li>• Email receipt generation</li>
                            <li>• Donation amount selection</li>
                            <li>• Kiosk customization</li>
                            <li>• Email delivery via SendGrid</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="troubleshooting" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Integration Troubleshooting
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="border border-red-200 bg-red-50 rounded-lg p-6">
                      <div className="flex items-start">
                        <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-medium text-red-900 mb-2">Most Common Issue: Location Access</h3>
                          <p className="text-red-800 mb-3">
                            95% of integration problems are caused by location access being disabled.
                          </p>
                          <div className="bg-red-100 rounded-lg p-3">
                            <p className="text-red-900 font-medium text-sm">
                              ⚠️ ShulPad requires location access to work with Square's payment system.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Step-by-Step Solutions</h3>
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-6">
                          <h4 className="text-lg font-medium text-gray-900 mb-3">Problem: App Won&apos;t Connect to Square</h4>
                          <div className="space-y-2">
                            <p className="text-gray-700 font-medium">Solution:</p>
                            <ol className="space-y-2 text-gray-600 ml-4">
                              <li className="flex items-start">
                                <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                                <span>Go to iPad Settings {`>`} Privacy & Security {`>`} Location Services</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                                <span>Ensure Location Services is turned ON</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                                <span>Find ShulPad in the app list and set to &quot;While Using App&quot;</span>
                              </li>
                              <li className="flex items-start">
                                <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                                <span>Close and reopen ShulPad</span>
                              </li>
                            </ol>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6">
                          <h4 className="text-lg font-medium text-gray-900 mb-3">Problem: Square Authorization Failed</h4>
                          <div className="space-y-2">
                            <p className="text-gray-700 font-medium">Solution:</p>
                            <ul className="space-y-2 text-gray-600 ml-4">
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Verify your Square account has a business location set up</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Ensure your Square account is in good standing</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Try disconnecting and reconnecting your Square account</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Check that you&apos;re using the same email for both accounts</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6">
                          <h4 className="text-lg font-medium text-gray-900 mb-3">Problem: Email Receipts Not Sending</h4>
                          <div className="space-y-2">
                            <p className="text-gray-700 font-medium">Solution:</p>
                            <ul className="space-y-2 text-gray-600 ml-4">
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Verify your organization&apos;s tax ID is entered correctly</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Check donor&apos;s email address for typos</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Ask donor to check spam/junk folder</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Ensure stable internet connection during transaction</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="common-issues" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Common Issues & Quick Fixes
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Location Access Denied</h4>
                            <p className="text-gray-600 text-sm">App shows &quot;Location Required&quot; error</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href="#troubleshooting">Fix Now</a>
                        </Button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <CreditCard className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Square Reader Not Connecting</h4>
                            <p className="text-gray-600 text-sm">Payment processing unavailable</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href="/user-guide#troubleshooting">User Guide</a>
                        </Button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <Mail className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Receipts Going to Spam</h4>
                            <p className="text-gray-600 text-sm">Donors not receiving email receipts</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href="#email-receipts">Learn More</a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-blue-900 mb-3">
                      Still Need Help?
                    </h3>
                    <p className="text-blue-800 mb-4">
                      Our support team is experienced with integration issues and can help you get up and running quickly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <a href="/contact">Contact Support</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://wa.me/16179032387" target="_blank" rel="noopener noreferrer">
                          WhatsApp Us
                        </a>
                      </Button>
                    </div>
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