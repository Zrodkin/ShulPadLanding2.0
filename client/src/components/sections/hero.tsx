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
              <IPadMockup>
                <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Donation Amount</h3>
                    <p className="text-gray-600">Choose your contribution</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6 w-full">
                    <button className="glassmorphism px-4 py-3 rounded-xl text-lg font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                      $18
                    </button>
                    <button className="brand-gradient text-white px-4 py-3 rounded-xl text-lg font-semibold shadow-lg">
                      $36
                    </button>
                    <button className="glassmorphism px-4 py-3 rounded-xl text-lg font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                      $54
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6 w-full">
                    <button className="glassmorphism px-4 py-3 rounded-xl text-lg font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                      $100
                    </button>
                    <button className="glassmorphism px-4 py-3 rounded-xl text-lg font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                      $180
                    </button>
                    <button className="glassmorphism px-4 py-3 rounded-xl text-lg font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                      $360
                    </button>
                  </div>
                  <button className="glassmorphism px-6 py-3 rounded-xl text-blue-600 font-medium w-full hover:bg-white/50 transition-all">
                    Custom Amount
                  </button>
                </div>
              </IPadMockup>
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
                <div className="w-8 h-8 bg-gray-800 rounded"></div>
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
