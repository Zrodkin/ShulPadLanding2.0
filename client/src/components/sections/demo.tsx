import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const demoSteps = [
  {
    image: "/attached_assets/Mockup-homeview_1750274378260.png",
    title: "Welcome Screen",
    description: "Simple tap to start donating"
  },
  {
    image: "/attached_assets/Mockup-preset_1750274378260.png", 
    title: "Choose Amount",
    description: "Quick preset options or custom entry"
  },
  {
    image: "/attached_assets/Mockup-custom_1750274378261.png",
    title: "Custom Amount", 
    description: "Easy number pad for any amount"
  },
  {
    image: "/attached_assets/Mockup-email_1750274378261.png",
    title: "Tax Receipt",
    description: "Automatic email confirmation"
  }
];

export default function Demo() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    // Only open lightbox on desktop/tablet (768px and up)
    if (window.innerWidth >= 768) {
      setSelectedImageIndex(index);
    }
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImageIndex === null) return;
    
    const newIndex = direction === 'next' 
      ? (selectedImageIndex + 1) % demoSteps.length
      : selectedImageIndex === 0 ? demoSteps.length - 1 : selectedImageIndex - 1;
    
    setSelectedImageIndex(newIndex);
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Dynamic background pattern - reduced on mobile for performance */}
      <div className="absolute inset-0">
        <div className="hidden sm:block absolute top-5 left-5 w-24 h-24 tech-gradient rounded-full opacity-8 blur-3xl animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-5 right-5 w-24 h-24 tech-gradient rounded-full opacity-8 blur-3xl animate-pulse delay-1000"></div>
        <div className="hidden lg:block absolute top-20 right-32 w-32 h-32 tech-gradient rounded-full opacity-5 blur-3xl"></div>
        <div className="hidden lg:block absolute bottom-32 left-20 w-32 h-32 tech-gradient rounded-full opacity-5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - mobile optimized typography */}
        <div className="text-center mb-12 sm:mb-20 lg:mb-24 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight">
            See <span className="tech-text-gradient">ShulPad</span> in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Watch how easy it is for donors to contribute with our intuitive interface
          </p>
        </div>
        
        {/* Mobile-first responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {demoSteps.map((step, index) => (
            <div key={index} className="fade-in-up group">
          {/* Mobile: Optimized card layout */}
<div className="sm:hidden">
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 hover:shadow-xl transition-shadow duration-300">
    {/* Image container with minimal padding */}
    <div className="relative bg-gray-50 px-1 py-1">
      <img 
        src={step.image} 
        alt={step.title}
        className="w-full h-auto mx-auto object-contain"
      />
    </div>
    {/* Content with reduced spacing */}
    <div className="px-4 py-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-1 text-center">
        {step.title}
      </h3>
      <p className="text-gray-600 text-center leading-relaxed">
        {step.description}
      </p>
    </div>
  </div>
</div>
              
              {/* Tablet & Desktop: Enhanced glassmorphism layout */}
              <div className="hidden sm:block text-center">
                <div 
                  className="relative overflow-hidden rounded-2xl premium-glassmorphism mb-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* Hover overlay with gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    index === 0 ? 'from-purple-500/20' :
                    index === 1 ? 'from-blue-500/20' :
                    index === 2 ? 'from-green-500/20' : 'from-orange-500/20'
                  } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                </div>
                <h3 className={`text-lg font-semibold text-gray-900 mb-2 transition-colors ${
                  index === 0 ? 'group-hover:text-purple-700' :
                  index === 1 ? 'group-hover:text-blue-700' :
                  index === 2 ? 'group-hover:text-green-700' : 'group-hover:text-orange-700'
                }`}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative inline-block">
              <img
                onClick={(e) => e.stopPropagation()}
                src={demoSteps[selectedImageIndex].image}
                alt={demoSteps[selectedImageIndex].title}
                className="h-[70vh] w-auto md:h-[70vh] md:w-auto max-w-[90vw]"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-20 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-20 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}