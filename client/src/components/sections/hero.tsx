import { Button } from "@/components/ui/button";
import IPadMockup from "@/components/ui/ipad-mockup";
import { Play, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your iPad Into a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                Donation Kiosk
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Turn any iPad into a professional fundraising station with payment processing, 
              custom interfaces, and instant receipts. The Square for donations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="brand-gradient text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="glassmorphism text-blue-600 px-8 py-4 rounded-full hover:bg-white/30 text-lg font-semibold">
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
            <div className="absolute -top-4 -right-4 glassmorphism rounded-full px-6 py-3 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">$49</div>
                <div className="text-xs text-gray-600">per month</div>
              </div>
            </div>
            
            {/* Floating Square reader */}
            <div className="absolute -bottom-8 -left-8 glassmorphism rounded-2xl p-4 shadow-lg">
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
