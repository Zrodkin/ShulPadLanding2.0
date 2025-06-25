import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Play, Download, CheckCircle, Settings, Smartphone, CreditCard } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";

export default function UserGuide() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "getting-started",
        "setup-process", 
        "customization",
        "guided-access",
        "daily-operations",
        "troubleshooting"
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
    { id: "getting-started", title: "Getting Started" },
    { id: "setup-process", title: "Setup Process" },
    { id: "customization", title: "Customization Options" },
    { id: "guided-access", title: "iPad Guided Access" },
    { id: "daily-operations", title: "Daily Operations" },
    { id: "troubleshooting", title: "Troubleshooting" }
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
                  User Guide
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
                  ShulPad User Guide
                </h1>
                <p className="text-xl text-gray-600">
                  Everything you need to know to set up and run your donation kiosk successfully.
                </p>
              </div>

              {/* Content Sections */}
              <div className="prose prose-gray max-w-none">
                <section id="getting-started" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Getting Started
                  </h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-medium text-blue-900 mb-3">Before You Begin</h3>
                    <p className="text-blue-800">
                      You'll need a Square account with a business location and a compatible iPad. 
                      The entire setup process takes about 15 minutes.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">1. Square Account</h3>
                      <p className="text-gray-600 text-sm">Create Square account and add business location</p>
                    </div>
                    
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Download className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">2. Download App</h3>
                      <p className="text-gray-600 text-sm">Install ShulPad from TestFlight and allow location access</p>
                    </div>
                    
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Play className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">3. Quick Setup</h3>
                      <p className="text-gray-600 text-sm">Follow guided setup or use admin dashboard</p>
                    </div>
                  </div>
                </section>

                <section id="setup-process" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Setup Process
                  </h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Step 1: Square Account Setup</h3>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Create a Square account at square.com</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Add a business location in your Square dashboard</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Connect your bank account for automatic transfers</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Step 2: App Installation</h3>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                        <p className="text-yellow-800 font-medium">⚠️ Important: You must allow location access for the app to work!</p>
                      </div>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Download ShulPad from TestFlight</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>When prompted, allow location access</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Open the app and begin setup</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Step 3: Guided Setup (3 Quick Steps)</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                            <h4 className="font-medium text-gray-900 mb-2">Choose Image</h4>
                            <p className="text-gray-600 text-sm">Select your organization's logo or image</p>
                          </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                            <h4 className="font-medium text-gray-900 mb-2">Organization Name</h4>
                            <p className="text-gray-600 text-sm">Enter your organization's name</p>
                          </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                            <h4 className="font-medium text-gray-900 mb-2">Tax ID Number</h4>
                            <p className="text-gray-600 text-sm">Add tax ID for email receipts</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-green-600 font-medium">That's it! Your kiosk is ready to accept donations.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="customization" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Customization Options
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Use the admin dashboard to customize your donation experience:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Preset Amounts</h3>
                      <p className="text-gray-600 mb-3">Configure donation amounts that appear as quick-select buttons.</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Set up to 6 preset amounts</li>
                        <li>• Custom amount option always available</li>
                        <li>• Amounts can be changed anytime</li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Home Screen Layout</h3>
                      <p className="text-gray-600 mb-3">Customize the look and feel of your donation interface.</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Upload organization logo</li>
                        <li>• Choose color themes</li>
                        <li>• Custom welcome messages</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="guided-access" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    iPad Guided Access Setup
                  </h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-medium text-red-900 mb-3">⚠️ Important Security Step</h3>
                    <p className="text-red-800">
                      Always enable Guided Access to prevent users from leaving the donation app or accessing other iPad functions.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Setup Instructions:</h3>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                        <div>
                          <span className="font-medium">Enable Guided Access:</span>
                          <p className="text-sm text-gray-600 mt-1">Go to Settings &gt; Accessibility &gt; Guided Access and turn it on</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                        <div>
                          <span className="font-medium">Set a Password:</span>
                          <p className="text-sm text-gray-600 mt-1">Create a passcode that only you know</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                        <div>
                          <span className="font-medium">Activate:</span>
                          <p className="text-sm text-gray-600 mt-1">Open ShulPad, then triple-click the power button to activate Guided Access</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </section>

                <section id="daily-operations" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Daily Operations
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Viewing Donations</h3>
                      <p className="text-gray-700 mb-3">
                        All donation information appears in your Square dashboard automatically:
                      </p>
                      <ul className="space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Real-time transaction notifications</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Daily, weekly, and monthly reports</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Automatic bank transfers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>Donor receipt confirmations</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Starting/Stopping the Kiosk</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                          <h4 className="font-medium text-green-900 mb-2">To Start:</h4>
                          <ol className="text-sm text-green-800 space-y-1">
                            <li>1. Open ShulPad app</li>
                            <li>2. Triple-click power button</li>
                            <li>3. Guided Access is now active</li>
                          </ol>
                        </div>
                        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                          <h4 className="font-medium text-red-900 mb-2">To Stop:</h4>
                          <ol className="text-sm text-red-800 space-y-1">
                            <li>1. Triple-click power button</li>
                            <li>2. Enter your passcode</li>
                            <li>3. Tap "End" in top-left corner</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="troubleshooting" className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Common Issues &amp; Solutions
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">App Won't Open/Work</h3>
                      <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Check that location access is enabled in iPad Settings</li>
                        <li>• Ensure you have a stable WiFi connection</li>
                        <li>• Restart the app and try again</li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Payments Not Processing</h3>
                      <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Verify Square reader is connected</li>
                        <li>• Check WiFi connection strength</li>
                        <li>• Ensure Square account is active</li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Can't Exit Guided Access</h3>
                      <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Triple-click the power button</li>
                        <li>• Enter the passcode you set up</li>
                        <li>• If forgotten, restart iPad and disable in Settings</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-blue-900 mb-3">Need More Help?</h3>
                    <p className="text-blue-800 mb-4">
                      Our support team is here to help you get the most out of ShulPad.
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