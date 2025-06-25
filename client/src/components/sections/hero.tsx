import { Button } from "@/components/ui/button";
import { Play, Check, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      src: "/attached_assets/Mockup-homeview_1750274378260.png", 
      alt: "ShulPad home screen - Tap to Donate"
    },
    {
      src: "/attached_assets/Mockup-preset_1750274378260.png",
      alt: "ShulPad donation interface with preset amounts"
    },
    {
      src: "/attached_assets/Mockup-custom_1750274378261.png",
      alt: "ShulPad custom amount entry"
    },
    {
      src: "/attached_assets/Mockup-email_1750274378261.png",
      alt: "ShulPad receipt email option"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch/swipe handling for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 sm:hero-gradient">
      {/* Animated background elements - more visible on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 h-64 opacity-20 sm:w-80 sm:h-80 tech-gradient rounded-full sm:opacity-15 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-64 h-64 opacity-20 sm:w-80 sm:h-80 tech-gradient rounded-full sm:opacity-15 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mobile Layout: Title → Image → Button */}
        <div className="lg:hidden">
          {/* Title */}
          <div className="text-center mb-8 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="font-bold leading-tight">
              <span className="text-2xl block font-light text-gray-900 mb-1 tracking-wide">The Future of Contactless</span>
              <span className="tech-text-gradient text-5xl block font-bold tracking-tight">
                Donations
              </span>
            </h1>
          </div>
          
          {/* Image Slideshow */}
          <div className="relative fade-in-up flex items-center justify-center mb-12" style={{ animationDelay: '0.3s' }}>
            <div 
              className="relative overflow-visible group"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img 
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                className="w-[1000px] h-auto drop-shadow-2xl transform scale-125 transition-all duration-700 ease-out"
                style={{ width: '1000px' }}
              />
              
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-400 ease-out ${
                      index === currentSlide 
                        ? 'bg-purple-600 w-8' 
                        : 'bg-white/80 hover:bg-white w-2 shadow-sm'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Button */}
          <div className="text-center fade-in-up px-4" style={{ animationDelay: '0.5s' }}>
            <Button 
              asChild
              className="brand-gradient text-white px-16 py-6 rounded-full hover:opacity-90 transition-all duration-400 ease-out text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 glow-effect"
            >
              <a href="https://testflight.apple.com/join/HxUmsRNP" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Start Free Trial</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Desktop Layout: Original Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up flex flex-col justify-center">
            <div className="inline-flex items-center premium-glassmorphism rounded-full px-6 py-2 mb-6 w-fit">
              <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">The Square for Donations</span>
            </div>
            <h1 className="font-bold leading-tight mb-6">
              <span className="text-5xl block font-normal text-gray-900">The Future of Contactless</span>
              <span className="tech-text-gradient text-7xl">
                Donations
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Turn any iPad into a professional fundraising station with payment processing, 
              custom interfaces, and instant receipts. The Square for donations.
            </p>
            <div className="flex flex-row gap-4 mb-8">
              <Button 
                asChild
                className="brand-gradient text-white px-12 py-7 rounded-full hover:opacity-90 transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 hover:scale-105 glow-effect"
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
          
          <div className="relative fade-in-up flex items-center justify-center mt-8">
            <div 
              className="relative overflow-visible group"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img 
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                className="w-[1000px] h-auto drop-shadow-2xl transform scale-125 transition-all duration-500 ease-in-out"
                style={{ width: '1000px' }}
              />
              
              {/* Navigation arrows - desktop only */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/95 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/95 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
              
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-purple-600 scale-125' 
                        : 'bg-white/70 hover:bg-white/90'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}