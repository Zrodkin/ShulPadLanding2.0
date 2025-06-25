import { useState, useEffect, useRef } from "react";

const options = [
  {
    id: "wall",
    title: "Square Kiosk",
    subtitle: "Space-efficient installation",
    video: "attached_assets/Kiosk video Wall Mount.mp4"
  },
  {
    id: "table",
    title: "Square Stand",
    subtitle: "Perfect for events",
    video: "attached_assets/Video square stand.mp4"
  }
];

export default function MountingShowcase() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const current = options[active];

  // Touch handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swipe left - next
        setActive((prev) => (prev + 1) % options.length);
      } else {
        // Swipe right - previous
        setActive((prev) => (prev - 1 + options.length) % options.length);
      }
    }
  };

  return (
    <section 
      className="h-[50vh] sm:h-[80vh] lg:h-[95vh] bg-black relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        <video
          src={current.video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      </div>

      {/* Navigation - Top on all devices */}
      <nav className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex gap-1 p-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          {options.map((option, i) => (
            <button
              key={option.id}
              onClick={() => setActive(i)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                active === i
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="hidden sm:inline">{option.title}</span>
              <span className="sm:hidden">{option.title.split(' ')[1]}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">

            {/* Title Section */}
            <div className="flex-1">
              <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light text-white mb-1 sm:mb-2 transition-all duration-700 leading-tight ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {current.title}
              </h1>
              <p className={`text-sm sm:text-lg lg:text-xl text-white/60 transition-all duration-700 delay-100 ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {current.subtitle}
              </p>
            </div>

            {/* Controls - Only show on desktop */}
            <div className="hidden sm:flex items-center gap-6">
              {/* Navigation Dots */}
              <div className="flex gap-2">
                {options.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      active === i ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile-only swipe indicator */}
          <div className="sm:hidden mt-4 flex justify-center">
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <div className="flex gap-1">
                {options.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === i ? 'w-6 bg-white/60' : 'w-1.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2">Swipe to navigate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Navigation - Only active on desktop */}
      <div 
        className="absolute inset-0 focus:outline-none hidden sm:block"
        tabIndex={0}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'ArrowLeft') {
            setActive((prev) => (prev - 1 + options.length) % options.length);
          } else if (e.key === 'ArrowRight') {
            setActive((prev) => (prev + 1) % options.length);
          }
        }}
      />
    </section>
  );
}