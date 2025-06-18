import { DollarSign, Clock, Shield, Receipt, BarChart3, WifiOff } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "75% Cost Savings",
    description: "$49/month vs $200-500/month competitors charge. More funds for your cause.",
    highlight: "Save $1,800+ annually",
    color: "green"
  },
  {
    icon: Clock,
    title: "15-Minute Setup",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ShulPad?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional donation kiosks that cost 75% less than competitors and set up in just 15 minutes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClasses = {
              green: "bg-green-100 text-green-600",
              blue: "bg-blue-100 text-blue-600",
              purple: "bg-purple-100 text-purple-600",
              orange: "bg-orange-100 text-orange-600",
              indigo: "bg-indigo-100 text-indigo-600",
              teal: "bg-teal-100 text-teal-600"
            };
            
            const highlightColors = {
              green: "text-green-600",
              blue: "text-blue-600", 
              purple: "text-purple-600",
              orange: "text-orange-600",
              indigo: "text-indigo-600",
              teal: "text-teal-600"
            };
            
            return (
              <div key={index} className="glassmorphism p-8 rounded-2xl hover:shadow-xl transition-all duration-300 fade-in-up">
                <div className={`w-12 h-12 ${colorClasses[benefit.color]} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className={`text-sm ${highlightColors[benefit.color]} font-medium`}>
                  {benefit.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
