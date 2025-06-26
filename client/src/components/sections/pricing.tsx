import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { useState } from "react";
import React from "react";

const hardwareOptions = [
  {
    name: "Table Stand",
    price: "$490",
    description: "Space-efficient installation for any surface.",
    features: [
      "Adjustable height",
      "Cable management",
      "Security mounting",
      "Premium materials",
      "Easy assembly"
    ],
    cta: "Contact Us"
  },
  {
    name: "Wall Mount",
    price: "$500",
    description: "Clean, professional wall installation.",
    features: [
      "Low-profile design",
      "Tamper-resistant",
      "Multiple angles",
      "Clean installation",
      "Hardware included"
    ],
    cta: "Contact Us"
  },
  {
    name: "Floor Stand",
    price: "$700",
    description: "Premium professional appearance for high-traffic areas.",
    features: [
      "Professional appearance",
      "Heavy-duty construction",
      "Adjustable height",
      "Secure enclosure",
      "Mobility options"
    ],
    cta: "Contact Us",
    popular: true
  }
];

const softwarePlans = [
  {
    name: "Monthly",
    price: "$49",
    period: "/month",
    description: "Perfect for getting started with donation kiosks.",
    features: [
      "1 kiosk included",
      "Real-time analytics",
      "Custom branding",
      "Email receipts",
      "Priority support"
    ],
    cta: "Contact Us"
  },
  {
    name: "Yearly",
    price: "$500",
    period: "/year",
    description: "Best value for established organizations.",
    features: [
      "1 kiosk included",
      "Real-time analytics",
      "Custom branding",
      "Email receipts",
      "Priority support"
    ],
    cta: "Contact Us",
    popular: true
  }
];

interface TabsListProps {
  children: React.ReactNode;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export default function ShulPadPricing() {
  const [activeTab, setActiveTab] = useState("software");

  const TabsList = ({ children }: TabsListProps) => (
    <div className="inline-flex bg-gray-100 rounded-full p-1">
      {children}
    </div>
  );

  const TabsTrigger = ({ value, children, active, onClick }: TabsTriggerProps) => (
    <button
      onClick={onClick}
      className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-white text-gray-900 shadow-sm"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
    </button>
  );

  return (
    <section id="pricing" className="pricing-section w-full py-20 md:py-32 bg-watercolor relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
  Simple, Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Choose the plan that's right for your organization. All plans include a 30-day free trial.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger
                value="software"
                active={activeTab === "software"}
                onClick={() => setActiveTab("software")}
              >
                Software
              </TabsTrigger>
              <TabsTrigger
                value="hardware"
                active={activeTab === "hardware"}
                onClick={() => setActiveTab("hardware")}
              >
                Hardware
              </TabsTrigger>
            </TabsList>
          </div>

          {/* SOFTWARE PLANS - REPLACE THIS ENTIRE SECTION */}
          {activeTab === "software" && (
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 max-w-2xl mx-auto">
              {softwarePlans.map((plan, i) => (
                <div key={i} className="w-full">
                  <div
                    className={`relative overflow-hidden h-full rounded-lg border ${
                      plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"
                    } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-2 lg:px-3 py-0.5 lg:py-1 text-xs font-medium rounded-bl-lg">
                        <span className="hidden sm:inline">Most Popular</span>
                        <span className="sm:hidden">Popular</span>
                      </div>
                    )}
                    <div className="p-4 lg:p-6 flex flex-col h-full">
                      <h3 className="text-lg lg:text-2xl font-bold">{plan.name}</h3>
                      <div className="flex items-baseline mt-2 lg:mt-4">
                        <span className="text-2xl lg:text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-1 text-sm lg:text-base">{plan.period}</span>
                      </div>
                      <p className="text-muted-foreground mt-1 lg:mt-2 text-sm lg:text-base">{plan.description}</p>
                      <p className="text-xs lg:text-sm text-muted-foreground mt-1">
                        +$15/month per additional kiosk
                      </p>
                      <ul className="space-y-2 lg:space-y-3 my-4 lg:my-6 flex-grow">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-center">
                            <Check className="mr-2 size-3 lg:size-4 text-primary flex-shrink-0" />
                            <span className="text-sm lg:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className={`w-full mt-auto rounded-full text-sm lg:text-base py-2 lg:py-3 ${
                          plan.popular 
                            ? "bg-primary hover:bg-primary/90" 
                            : "bg-muted hover:bg-muted/80"
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        <a href="/contact">
                          {plan.cta}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

      {/* Hardware Plans - Fixed width for third card */}
          {activeTab === "hardware" && (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto">
              {hardwareOptions.map((option, i) => (
                <div 
                  key={i} 
                  className={`w-full ${
                    // Center the third card on mobile with same width as top cards
                    i === 2 ? 'col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div
                    className={`relative overflow-hidden h-full rounded-lg border ${
                      option.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"
                    } bg-gradient-to-b from-background to-muted/10 backdrop-blur ${
                      // Make third card same width as individual top cards
                      i === 2 ? 'max-w-[calc(50%-0.5rem)] mx-auto lg:max-w-none lg:mx-0' : ''
                    }`}
                  >
                    {option.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-2 lg:px-3 py-0.5 lg:py-1 text-xs font-medium rounded-bl-lg">
                        <span className="hidden sm:inline">Most Popular</span>
                        <span className="sm:hidden">Popular</span>
                      </div>
                    )}
                    <div className="p-4 lg:p-6 flex flex-col h-full">
                      <h3 className="text-lg lg:text-2xl font-bold">{option.name}</h3>
                      <div className="flex items-baseline mt-2 lg:mt-4">
                        <span className="text-2xl lg:text-4xl font-bold">{option.price}</span>
                      </div>
                      <p className="text-muted-foreground mt-1 lg:mt-2 text-sm lg:text-base">{option.description}</p>
                      <p className="text-xs lg:text-sm text-muted-foreground mt-1">One-time purchase</p>
                      <ul className="space-y-2 lg:space-y-3 my-4 lg:my-6 flex-grow">
                        {option.features.map((feature, j) => (
                          <li key={j} className="flex items-center">
                            <Check className="mr-2 size-3 lg:size-4 text-primary flex-shrink-0" />
                            <span className="text-sm lg:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className={`w-full mt-auto rounded-full text-sm lg:text-base py-2 lg:py-3 ${
                          option.popular 
                            ? "bg-primary hover:bg-primary/90" 
                            : "bg-muted hover:bg-muted/80"
                        }`}
                        variant={option.popular ? "default" : "outline"}
                      >
                        <a href="/contact">
                          {option.cta}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer guarantee */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center text-sm text-muted-foreground">
              <Shield className="w-4 h-4 mr-2" />
              30-day money-back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}