import { Star } from "lucide-react";

const stats = [
  { value: "500+", label: "Organizations" },
  { value: "$2.4M+", label: "Donations Processed" },
  { value: "99.9%", label: "Uptime" }
];

const testimonials = [
  {
    quote: "ShulPad increased our event donations by 40%. The setup was incredibly easy and donors love the professional interface.",
    author: "Sarah Johnson",
    role: "Executive Director, Hope Foundation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The cost savings alone paid for itself in the first month. We're now running 5 kiosks across different locations.",
    author: "Michael Chen", 
    role: "Development Manager, Green Earth Org",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The analytics dashboard helps us understand donor behavior and optimize our fundraising strategies. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Fundraising Coordinator, Children First", 
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

const organizations = [
  "United Way",
  "Salvation Army", 
  "Red Cross",
  "Habitat for Humanity",
  "Feeding America"
];

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Trusted by <span className="tech-text-gradient">Nonprofits</span> Worldwide
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="glassmorphism p-8 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glassmorphism p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trusted Organizations */}
        <div className="mt-16 fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by <span className="tech-text-gradient">Leading Organizations</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of nonprofits, religious organizations, and charities using ShulPad to modernize their fundraising
            </p>
          </div>
          
          {/* Logo Grid with Enhanced Design */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 tech-gradient opacity-5 rounded-3xl blur-3xl"></div>
            
            <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {organizations.map((org, index) => (
                <div 
                  key={index} 
                  className="group relative"
                >
                  <div className="interactive-card h-20 flex items-center justify-center p-4 transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 tech-gradient opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
                    <span className="relative text-gray-700 font-semibold text-sm text-center leading-tight group-hover:text-gray-900 transition-colors duration-300">
                      {org}
                    </span>
                  </div>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white mb-4 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">SOC 2 Compliant</h4>
              <p className="text-gray-600 text-sm">Enterprise-grade security standards</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white mb-4 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">PCI DSS Certified</h4>
              <p className="text-gray-600 text-sm">Secure payment processing</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white mb-4 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Dedicated customer success team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
