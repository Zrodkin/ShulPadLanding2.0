import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, XCircle, Wifi, Lock, Smartphone } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";

export default function HardwareRequirements() {
  const compatibleIpads = [
    {
      name: "iPad (A16)",
      supported: true,
      note: "Latest model - recommended"
    },
    {
      name: "iPad (10th generation)",
      supported: true,
      note: "Great performance"
    },
    {
      name: "iPad Pro 11-inch (1st generation)",
      supported: true,
      note: "Professional grade"
    },
    {
      name: "iPad Pro 11-inch (2nd generation)",
      supported: true,
      note: "Professional grade"
    },
    {
      name: "iPad Pro 11-inch (3rd generation)",
      supported: true,
      note: "Professional grade"
    },
    {
      name: "iPad Pro 11-inch (4th generation)",
      supported: true,
      note: "Professional grade"
    },
    {
      name: "iPad Air (4th generation)",
      supported: true,
      note: "Excellent choice"
    },
    {
      name: "iPad Air (5th generation)",
      supported: true,
      note: "Excellent choice"
    },
    {
      name: "iPad Air 11-inch (M2)",
      supported: true,
      note: "Latest chip - fastest"
    },
    {
      name: "iPad Air 11-inch (M3)",
      supported: true,
      note: "Latest chip - fastest"
    }
  ];

  const squareReaders = [
    {
      name: "Square Kiosk",
      description: "Wall-mounted solution perfect for permanent installations",
      features: ["Wall mountable", "Secure screw lock", "Professional appearance", "Space efficient"],
      bestFor: "Permanent installations, lobbies, entrance areas"
    },
    {
      name: "Square Stand",
      description: "Portable stand ideal for events and temporary setups",
      features: ["Portable design", "Adjustable angle", "Easy setup", "Event-friendly"],
      bestFor: "Events, temporary setups, multiple locations"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
              Hardware Requirements
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about compatible devices and setup requirements.
            </p>
          </div>

          {/* iPad Compatibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Compatible iPad Models
            </h2>
            <p className="text-gray-700 mb-6">
              ShulPad works with modern iPad models that support the latest iOS features and performance requirements.
            </p>
            
            <div className="grid gap-4">
              {compatibleIpads.map((ipad, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">{ipad.name}</h3>
                      <p className="text-sm text-gray-600">{ipad.note}</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium text-sm">Supported</span>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-2">
                💡 Recommendation
              </h3>
              <p className="text-blue-800">
                We recommend the <strong>iPad (A16)</strong> or <strong>iPad Air (M2/M3)</strong> for the best performance and future compatibility.
              </p>
            </div>
          </section>

          {/* Square Readers */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Square Payment Readers
            </h2>
            <p className="text-gray-700 mb-6">
              Choose the Square reader that best fits your setup needs:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {squareReaders.map((reader, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{reader.name}</h3>
                  <p className="text-gray-600 mb-4">{reader.description}</p>
                  
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1 mb-4">
                    {reader.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-900 mb-1">Best for:</p>
                    <p className="text-sm text-gray-600">{reader.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Network Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Network Requirements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Wifi className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-medium text-gray-900">WiFi Connection</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  A stable WiFi connection is required for payment processing and transaction sync.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Minimum 5 Mbps download speed
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Stable connection preferred
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Guest networks supported
                  </li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Smartphone className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-medium text-gray-900">Cellular Option</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  iPads with cellular capability can work without WiFi, perfect for outdoor events.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    4G LTE or 5G connection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Data plan required
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Great for mobile setups
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Physical Security Features
            </h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <Lock className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-yellow-900 mb-2">Secure Your Kiosk</h3>
                  <p className="text-yellow-800">
                    Both Square readers include security features to protect your equipment from theft.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Locking Mechanism</h3>
                <p className="text-gray-700 mb-3">
                  Secure your kiosk with the included locking screw system.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Small screw included with reader
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Prevents unauthorized removal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Easy to install and remove
                  </li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Software Security</h3>
                <p className="text-gray-700 mb-3">
                  iPad Guided Access prevents unauthorized app usage.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Locks iPad to ShulPad app only
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Passcode protection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Prevents unauthorized access
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Setup Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Setup Requirements
            </h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Before Installation</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Required:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Compatible iPad (see list above)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Square reader (Kiosk or Stand)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Active Square account
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        WiFi or cellular connection
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Optional:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        Wall mounting hardware (for Kiosk)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        Power adapter for extended use
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        Signage or branding materials
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Installation Tips</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Location Considerations:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• High visibility area</li>
                      <li>• Easy access for donors</li>
                      <li>• Near power outlet (optional)</li>
                      <li>• Good WiFi signal strength</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Setup Best Practices:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Test connection before mounting</li>
                      <li>• Enable Guided Access</li>
                      <li>• Install security screw</li>
                      <li>• Add clear signage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Purchase Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Where to Purchase
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">iPads</h3>
                <p className="text-gray-700 mb-4">
                  Purchase compatible iPads from authorized Apple retailers:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Apple Store (online or retail)</li>
                  <li>• Best Buy</li>
                  <li>• Amazon</li>
                  <li>• Costco (bulk pricing available)</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Square Readers</h3>
                <p className="text-gray-700 mb-4">
                  Order Square readers directly from Square:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Square.com (official store)</li>
                  <li>• Free shipping available</li>
                  <li>• Volume discounts for multiple units</li>
                  <li>• Customer support included</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-green-900 mb-3">
                💰 Cost Savings Tip
              </h3>
              <p className="text-green-800">
                Need multiple kiosks? Contact us for volume pricing on hardware bundles and extended support plans.
              </p>
              <div className="mt-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a href="/contact">Get Volume Pricing</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Support */}
          <section className="mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-3">
                Need Help Choosing Hardware?
              </h3>
              <p className="text-blue-800 mb-4">
                Our team can help you select the right hardware configuration for your specific needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="/contact">Contact Our Team</a>
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
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}