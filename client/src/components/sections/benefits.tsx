import { Sparkles, Clock, Shield, Receipt, BarChart3, WifiOff } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Premium Design",
    description: "Sleek, modern kiosks that elevate your brand with clean aesthetics and professional appeal.",
    highlight: "Most elegant design",
    color: "green"
  },
  {
    icon: Clock,
    title: "30-Second Setup",
    description: "Connect your Square account, customize interface, and start accepting donations.",
    highlight: "Launch same day",
    color: "blue"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "PCI DSS compliant with Square's trusted payment processing.",
    highlight: "Bank-level security",
    color: "purple"
  },
  {
    icon: Receipt,
    title: "Instant Tax Receipts",
    description: "Automatic email receipts for tax deductions. Boost donor satisfaction.",
    highlight: "IRS compliant",
    color: "orange"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track donations, peak hours, and performance across all kiosks.",
    highlight: "Data-driven insights",
    color: "indigo"
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    description: "Accept donations even without internet. Syncs when reconnected.",
    highlight: "Never miss a donation",
    color: "teal"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden section-alt">
      {/* Animated background elements - very subtle ambient wash on mobile */}
      <div className="absolute inset-0">
        {/* Mobile: Multiple extremely subtle ambient background elements */}
        <div className="sm:hidden absolute -top-32 -right-32 w-96 h-96 tech-gradient rounded-full opacity-[0.02] blur-3xl"></div>
        <div className="sm:hidden absolute -bottom-32 -left-32 w-96 h-96 tech-gradient rounded-full opacity-[0.02] blur-3xl"></div>
        <div className="sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full tech-gradient rounded-full opacity-[0.01] blur-3xl"></div>
        <div className="sm:hidden absolute top-16 left-1/4 w-80 h-80 tech-gradient rounded-full opacity-[0.015] blur-3xl"></div>
        <div className="sm:hidden absolute bottom-16 right-1/4 w-80 h-80 tech-gradient rounded-full opacity-[0.015] blur-3xl"></div>
        <div className="sm:hidden absolute top-1/3 -left-16 w-72 h-72 tech-gradient rounded-full opacity-[0.01] blur-3xl"></div>
        <div className="sm:hidden absolute bottom-1/3 -right-16 w-72 h-72 tech-gradient rounded-full opacity-[0.01] blur-3xl"></div>
        <div className="sm:hidden absolute top-3/4 left-1/3 w-64 h-64 tech-gradient rounded-full opacity-[0.008] blur-3xl"></div>
        
        {/* Tablet: Balanced coverage */}
        <div className="hidden sm:block md:hidden absolute top-10 right-10 w-48 h-48 tech-gradient rounded-full opacity-3 blur-3xl animate-pulse"></div>
        <div className="hidden sm:block md:hidden absolute bottom-10 left-10 w-48 h-48 tech-gradient rounded-full opacity-3 blur-3xl animate-pulse delay-1000"></div>
        
        {/* Desktop: Original full effect */}
        <div className="hidden md:block absolute top-20 right-20 w-64 h-64 tech-gradient rounded-full opacity-8 blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 left-20 w-64 h-64 tech-gradient rounded-full opacity-8 blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="tech-text-gradient">ShulPad?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional donation kiosks that cost 75% less than competitors and set up in just 15 minutes
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClasses: Record<string, string> = {
              green: "bg-green-100 text-green-600",
              blue: "bg-blue-100 text-blue-600",
              purple: "bg-purple-100 text-purple-600",
              orange: "bg-orange-100 text-orange-600",
              indigo: "bg-indigo-100 text-indigo-600",
              teal: "bg-teal-100 text-teal-600"
            };
            
            const highlightColors: Record<string, string> = {
              green: "text-green-600",
              blue: "text-blue-600", 
              purple: "text-purple-600",
              orange: "text-orange-600",
              indigo: "text-indigo-600",
              teal: "text-teal-600"
            };
            
            return (
              <div key={index}>
                {/* Mobile: 2-column compact cards */}
                <div className="md:hidden bg-white border border-gray-200 rounded-lg p-3 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 ${colorClasses[benefit.color]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 leading-tight">{benefit.title}</h3>
                  </div>
                  <p className="text-xs text-gray-600 mb-2 leading-relaxed flex-grow">{benefit.description}</p>
                  <div className={`text-xs ${highlightColors[benefit.color]} font-medium px-2 py-1 rounded bg-gray-50 inline-block mt-auto`}>
                    {benefit.highlight}
                  </div>
                </div>

                {/* Desktop: Original design */}
                <div className="hidden md:block interactive-card fade-in-up group">
                  <div className={`w-16 h-16 ${colorClasses[benefit.color]} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className={`text-sm ${highlightColors[benefit.color]} font-semibold px-3 py-1 rounded-full bg-white/60 inline-block`}>
                    {benefit.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}