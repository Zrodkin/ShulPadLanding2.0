import { Check, Shield } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create professional donation experiences
          </p>
        </div>
        
        {/* Feature 1: Beautiful Interface */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Beautiful Donation Interface</h3>
            <p className="text-lg text-gray-600 mb-6">
              Engage donors with preset amounts, custom options, and your organization's branding. 
              The intuitive interface increases donation completion rates.
            </p>
            <ul className="space-y-3">
              {[
                "Preset donation amounts",
                "Custom amount entry", 
                "Full brand customization",
                "Multiple payment methods"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img 
              src="/attached_assets/Mockup-preset_1750274378260.png" 
              alt="ShulPad donation interface with preset amounts"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
        
        {/* Feature 2: Admin Dashboard */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
          <div className="order-2 lg:order-1">
            <div className="glassmorphism rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold text-gray-900">Analytics Dashboard</h4>
                  <div className="text-sm text-gray-500">Last 30 days</div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$12.4K</div>
                    <div className="text-sm text-gray-600">Total Raised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">847</div>
                    <div className="text-sm text-gray-600">Donations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$14.62</div>
                    <div className="text-sm text-gray-600">Avg. Gift</div>
                  </div>
                </div>
                <div className="h-32 brand-gradient rounded-lg opacity-20"></div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Real-time Analytics</h3>
            <p className="text-lg text-gray-600 mb-6">
              Monitor performance across all your kiosks with detailed analytics. 
              Track donations, peak hours, and optimize placement for maximum impact.
            </p>
            <ul className="space-y-3">
              {[
                "Live donation tracking",
                "Multi-kiosk management",
                "Performance insights", 
                "Export reports"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Feature 3: Security & Receipts */}
        <div className="grid lg:grid-cols-2 gap-12 items-center fade-in-up">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Secure & Compliant</h3>
            <p className="text-lg text-gray-600 mb-6">
              PCI DSS compliant payment processing with automatic tax receipts. 
              Your donors' data is protected with enterprise-grade security.
            </p>
            <ul className="space-y-3">
              {[
                "PCI DSS Level 1 compliance",
                "Automatic tax receipts",
                "End-to-end encryption",
                "99.9% uptime guarantee"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="glassmorphism rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Secure Transaction</div>
                    <div className="text-sm text-gray-600">Protected by Square</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Donation Amount:</span>
                    <span className="font-semibold">$50.00</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Processing Fee:</span>
                    <span className="font-semibold">$1.45</span>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-green-800 font-medium">Receipt sent to email</div>
                    <div className="text-green-600 text-sm">Tax deductible confirmation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
