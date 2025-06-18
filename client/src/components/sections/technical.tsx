import { Apple, CreditCard, Shield, Tablet, ArrowRight } from "lucide-react";

const compatibility = [
  {
    icon: Apple,
    title: "iPad Compatibility", 
    items: [
      "iPad Pro (all sizes)",
      "iPad Air (3rd gen+)",
      "iPad (7th gen+)",
      "iPad mini (5th gen+)"
    ],
    color: "blue"
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    items: [
      "Square Reader integration",
      "Tap, chip, and swipe", 
      "Apple Pay & Google Pay",
      "All major credit cards"
    ],
    color: "green"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    items: [
      "PCI DSS Level 1",
      "End-to-end encryption",
      "SOC 2 Type II", 
      "GDPR compliant"
    ],
    color: "purple"
  }
];

const hardware = [
  {
    icon: Tablet,
    title: "iPad Pro 11\"",
    description: "Perfect screen size for donation kiosks",
    color: "blue"
  },
  {
    icon: CreditCard,
    title: "Square Reader", 
    description: "Contactless and chip card reader",
    color: "green"
  },
  {
    icon: Shield,
    title: "iPad Stand",
    description: "Secure mounting for public use",
    color: "purple"
  }
];

export default function Technical() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="tech-text-gradient">Specifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compatible with your existing hardware and secure by design
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {compatibility.map((spec, index) => {
            const Icon = spec.icon;
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600",
              green: "bg-green-100 text-green-600", 
              purple: "bg-purple-100 text-purple-600"
            };
            
            return (
              <div key={index} className="glassmorphism p-8 rounded-2xl fade-in-up">
                <div className={`w-12 h-12 ${colorClasses[spec.color]} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{spec.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        {/* Hardware recommendations */}
        <div className="mt-16 fade-in-up">
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Recommended Hardware Setup
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {hardware.map((item, index) => {
                const Icon = item.icon;
                const colorClasses = {
                  blue: "bg-blue-100 text-blue-600",
                  green: "bg-green-100 text-green-600",
                  purple: "bg-purple-100 text-purple-600"
                };
                
                return (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${colorClasses[item.color]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <a href="#" className="text-blue-600 hover:underline font-medium inline-flex items-center">
                View complete hardware guide
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
