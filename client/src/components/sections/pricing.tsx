import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

const plans = [
  {
    name: "ShulPad Starter",
    price: 49,
    period: "per month",
    features: [
      "1 kiosk included",
      "Unlimited donations", 
      "Basic analytics",
      "Email receipts",
      "Email support"
    ],
    popular: false
  },
  {
    name: "ShulPad Pro", 
    price: 99,
    period: "per month",
    features: [
      "5 kiosks included",
      "Advanced analytics",
      "Custom branding", 
      "Priority support",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    features: [
      "Unlimited kiosks",
      "White-label solution",
      "Dedicated support",
      "Custom integrations", 
      "SLA guarantee"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Simple, <span className="tech-text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees. No setup costs. Cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glassmorphism p-8 rounded-2xl fade-in-up relative ${
                plan.popular ? 'border-2 border-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="brand-gradient text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-blue-600' : 'text-gray-900'}`}>
                  ${plan.price}
                </div>
                <div className="text-gray-600">{plan.period}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
           <Button 
  asChild={plan.name !== "Enterprise"}
  className={`w-full py-3 rounded-full font-medium ${
    plan.popular 
      ? 'brand-gradient text-white hover:opacity-90' 
      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
  }`}
>
  {plan.name === "Enterprise" ? (
    "Contact Sales"
  ) : (
    <a href="https://testflight.apple.com/join/HxUmsRNP" target="_blank" rel="noopener noreferrer">
      Start Free Trial
    </a>
  )}
</Button>
            </div>
          ))}
        </div>
        
        {/* Additional kiosks pricing */}
        <div className="text-center mt-12 fade-in-up">
          <div className="glassmorphism p-6 rounded-xl inline-block">
            <p className="text-gray-600">
              <span className="font-semibold">Additional kiosks:</span> $25/month each
            </p>
          </div>
        </div>
        
        {/* Money-back guarantee */}
        <div className="text-center mt-8 fade-in-up">
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
