import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50 premium-glassmorphism backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer group transition-all duration-300 hover:scale-105"
            onClick={scrollToTop}
          >
            <img 
              src="/attached_assets/Charity Pad Logo Square_1750274378262.png" 
              alt="ShulPad Logo" 
              className="w-8 h-8 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
            />
            <span 
              className="text-2xl font-semibold text-gray-900 transition-all duration-300 group-hover:text-purple-700" 
              style={{fontFamily: "'EB Garamond', serif"}}
            >
              ShulPad
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
            <Button 
              asChild
              className="brand-gradient text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <a href="https://testflight.apple.com/join/HxUmsRNP" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Start Free Trial</span>
              </a>
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/90 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#faq" className="block px-3 py-2 text-gray-600 hover:text-blue-600">FAQ</a>
              <Button 
                asChild
                className="w-full mt-2 brand-gradient text-white"
              >
                <a href="https://testflight.apple.com/join/HxUmsRNP" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}