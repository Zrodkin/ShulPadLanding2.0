import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { useState } from "react";

const hardwareOptions = [
  {
    name: "Table Stand",
    price: 490,
    features: [
      "Adjustable height",
      "Cable management",
      "Security mounting",
      "Premium materials",
      "Easy assembly"
    ]
  },
  {
    name: "Wall Mount",
    price: 500,
    features: [
      "Low-profile design",
      "Tamper-resistant",
      "Multiple angles",
      "Clean installation",
      "Hardware included"
    ]
  },
  {
    name: "Floor Stand",
    price: 700,
    features: [
      "Professional appearance",
      "Heavy-duty construction",
      "Adjustable height",
      "Secure enclosure",
      "Mobility options"
    ],
    popular: true
  }
];

const softwarePlans = [
  {
    name: "Monthly",
    price: 49,
    period: "month",
    features: [
      "1 kiosk included",
      "Real-time analytics",
      "Custom branding",
      "Email receipts",
      "Priority support"
    ]
  },
  {
    name: "Yearly",
    price: 500,
    period: "year",
    features: [
      "1 kiosk included",
      "Real-time analytics",
      "Custom branding",
      "Email receipts",
      "Priority support"
    ],
    popular: true
  }
];

export default function SimplePricing() {
  const [activeTab, setActiveTab] = useState("software");

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("software")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "software"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Software
            </button>
            <button
              onClick={() => setActiveTab("hardware")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "hardware"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Hardware
            </button>
          </div>
        </div>

        {activeTab === "software" && (
          <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-4xl mx-auto">
            {softwarePlans.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-lg p-3 sm:p-6 flex flex-col h-full ${
                  plan.popular 
                    ? "border-blue-600 bg-blue-50/30" 
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-2 sm:mb-4">
                    <span className="inline-block bg-blue-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-500 ml-1 text-sm">/{plan.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    +$15/month per additional kiosk
                  </p>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs sm:text-sm text-gray-600">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    asChild
                    className={`w-full text-xs sm:text-sm py-2 sm:py-3 ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    <a href="https://testflight.apple.com/join/HxUmsRNP" target="_blank" rel="noopener noreferrer">
                      Start free trial
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "hardware" && (
          <div>
            {/* Mobile Layout: First two side by side, third below */}
            <div className="block sm:hidden">
              {/* Top row: Table Stand and Wall Mount side by side */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {hardwareOptions.slice(0, 2).map((option, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-3 flex flex-col h-full border-gray-200 bg-white"
                  >
                    <div className="text-center mb-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">{option.name}</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-xl font-bold text-gray-900">${option.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">One-time purchase</p>
                    </div>

                    <ul className="space-y-2 mb-4 flex-grow">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs text-gray-600">
                          <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-xs py-2">
                        Contact sales
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom row: Floor Stand (most popular) */}
              <div className="flex justify-center">
                <div className="w-1/2">
                  <div className="border rounded-lg p-3 flex flex-col h-full border-blue-600 bg-blue-50/30">
                    <div className="text-center mb-4">
                      <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                        Most popular
                      </span>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">{hardwareOptions[2].name}</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-xl font-bold text-gray-900">${hardwareOptions[2].price}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">One-time purchase</p>
                    </div>

                    <ul className="space-y-2 mb-4 flex-grow">
                      {hardwareOptions[2].features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs text-gray-600">
                          <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-2">
                        Contact sales
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout: All three in a row */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareOptions.map((option, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-6 flex flex-col h-full ${
                    option.popular
                      ? "border-blue-600 bg-blue-50/30"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {option.popular && (
                    <div className="text-center mb-4">
                      <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                        Most popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900">${option.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">One-time purchase</p>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button
                      className={`w-full ${
                        option.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}
                    >
                      Contact sales
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="inline-flex items-center text-sm text-gray-500">
            <Shield className="w-4 h-4 mr-2" />
            30-day money-back guarantee
          </div>
        </div>

      </div>
    </section>
  );
}