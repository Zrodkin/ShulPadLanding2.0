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
        
        {/* Customer Logos */}
        <div className="mt-16 fade-in-up">
          <div className="text-center mb-8">
            <p className="text-gray-600">Trusted by leading organizations</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {organizations.map((org, index) => (
              <div key={index} className="glassmorphism px-6 py-3 rounded-lg">
                <span className="font-semibold text-gray-700">{org}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
