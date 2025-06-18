import { Button } from "@/components/ui/button";
import IPadMockup from "@/components/ui/ipad-mockup";
import { Play, Check, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 tech-gradient rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 tech-gradient rounded-full opacity-15 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <div className="inline-flex items-center premium-glassmorphism rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">The Square for Donations</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Transform Your iPad Into a{" "}
              <span className="tech-text-gradient">
                Donation Kiosk
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Turn any iPad into a professional fundraising station with payment processing, 
              custom interfaces, and instant receipts. The Square for donations.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
  <Button 
    asChild
    className="brand-gradient text-white px-12 py-6 rounded-full hover:opacity-90 transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 hover:scale-105 glow-effect"
  >
    <a href="https://testflight.apple.com/join/HxUmsRNP" target="_blank" rel="noopener noreferrer">
      <span className="relative z-10">Start Free Trial</span>
    </a>
  </Button>
  <Button variant="outline" className="premium-glassmorphism text-purple-700 px-10 py-6 rounded-full hover:bg-white/40 text-lg font-semibold transition-all duration-300 hover:scale-105 border-white/40">
    <Play className="w-4 h-4 mr-2" />
    Watch Demo
  </Button>
</div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                30-day free trial
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
          
          <div className="relative fade-in-up">
            <div className="floating-animation">
              <img 
                src="/attached_assets/Mockup-preset_1750274378260.png" 
                alt="ShulPad donation interface with preset amounts"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating price badge */}
            <div className="absolute -top-4 -right-4 premium-glassmorphism rounded-full px-6 py-3 shadow-2xl noise-texture">
              <div className="text-center">
                <div className="text-2xl font-bold tech-text-gradient">$49</div>
                <div className="text-xs text-gray-600">per month</div>
              </div>
            </div>
            
            {/* Floating Square reader */}
            <div className="absolute -bottom-8 -left-8 premium-glassmorphism rounded-2xl p-4 shadow-2xl noise-texture">
              <div className="flex items-center space-x-3">
                <img 
                  src="/attached_assets/Square Reader Tap Transparent_1750274378259.png" 
                  alt="Square Reader" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <div className="text-xs font-semibold text-gray-900">Square Compatible</div>
                  <div className="text-xs text-gray-600">Tap to pay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
