import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ExternalLink } from "lucide-react";

export default function Navigation() {
  // State variables
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior for mobile nav visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show nav at the very top
      if (currentScrollY < 10) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
      
      // On mobile, hide/show based on scroll direction
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past threshold - hide nav
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show nav
          setIsVisible(true);
        }
      } else {
        // Always visible on desktop
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    if (window.location.pathname !== '/') {
      // If we're not on home page, navigate to home page
      window.location.href = '/';
    } else {
      // If we're on home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      // Handle home page anchors
      if (window.location.pathname !== '/') {
        // Navigate to home page with anchor
        window.location.href = href;
      } else {
        // Already on home page, just scroll
        setTimeout(() => {
          const element = document.querySelector(href.substring(1)); // Remove the leading /
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }
    // For other links (like /privacy), let the default behavior handle it
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {/* Mobile: Full width glassmorphism bar */}
        <div className="md:hidden w-full premium-glassmorphism backdrop-blur-xl">
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
              
              <Button
                variant="ghost"
                size="sm"
                className="relative z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="relative w-5 h-5">
                  <Menu 
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                    }`} 
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>

<div className="hidden md:flex justify-center w-full">
  <div className="flex items-center premium-glassmorphism backdrop-blur-xl rounded-full shadow-2xl border border-white/30 px-6 py-2.5 space-x-6 hover:shadow-3xl transition-all duration-300 max-w-4xl my-1">
    {/* Logo */}
    <div 
      className="flex items-center space-x-2 cursor-pointer group transition-all duration-300 hover:scale-105"
      onClick={scrollToTop}
    >
      <img 
        src="/attached_assets/Charity Pad Logo Square_1750274378262.png" 
        alt="ShulPad Logo" 
        className="w-7 h-7 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
      />
      <span 
        className="text-lg font-semibold text-gray-900 transition-all duration-300 group-hover:text-purple-700" 
        style={{fontFamily: "'EB Garamond', serif"}}
      >
        ShulPad
      </span>
    </div>

    {/* Separator */}
    <div className="w-px h-5 bg-gray-200"></div>
    
    {/* Navigation Links */}
    <div className="flex items-center space-x-4">
      <a 
        href="/#features" 
        className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-2.5 py-1.5 rounded-full hover:bg-blue-50"
        onClick={(e) => {
          e.preventDefault();
          if (window.location.pathname !== '/') {
            window.location.href = '/#features';
          } else {
            const element = document.querySelector('#features');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      >
        Features
      </a>
      <a 
        href="/#pricing" 
        className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-2.5 py-1.5 rounded-full hover:bg-blue-50"
        onClick={(e) => {
          e.preventDefault();
          if (window.location.pathname !== '/') {
            window.location.href = '/#pricing';
          } else {
            const element = document.querySelector('#pricing');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      >
        Pricing
      </a>
      <a 
        href="/#faq" 
        className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-2.5 py-1.5 rounded-full hover:bg-blue-50"
        onClick={(e) => {
          e.preventDefault();
          if (window.location.pathname !== '/') {
            window.location.href = '/#faq';
          } else {
            const element = document.querySelector('#faq');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      >
        FAQ
      </a>
    </div>

    {/* Separator */}
    <div className="w-px h-5 bg-gray-200"></div>

    {/* CTA Button */}
    <Button 
      asChild
      className="brand-gradient text-white px-5 py-2 rounded-full hover:opacity-90 transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:shadow-purple-500/25"
    >
      <a href="https://apps.apple.com/us/app/shulpad/id6746584703" target="_blank" rel="noopener noreferrer">
        <span className="relative z-10">Download</span>
      </a>
    </Button>
  </div>
</div>
</nav>

      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 md:hidden transform transition-all duration-300 ease-out shadow-2xl ${
          isOpen 
            ? 'translate-x-0' 
            : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <img 
              src="/attached_assets/Charity Pad Logo Square_1750274378262.png" 
              alt="ShulPad Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <span 
              className="text-xl font-semibold text-gray-900" 
              style={{fontFamily: "'EB Garamond', serif"}}
            >
              ShulPad
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="px-6 py-8">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`group flex items-center justify-between px-4 py-4 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 ${
                  isOpen ? 'animate-in slide-in-from-right' : ''
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationDuration: '400ms',
                  animationFillMode: 'both'
                }}
              >
                <span className="text-lg font-medium">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="space-y-4">
              <Button 
                asChild
                className="w-full brand-gradient text-white py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-medium shadow-lg"
              >
                <a 
                  href="https://apps.apple.com/us/app/shulpad/id6746584703" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>

              <Button 
                variant="outline" 
                className="w-full py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Schedule Demo
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Need help?</p>
                <a 
                  href="https://wa.me/16179032387" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  +1 (617) 903-2387
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-from-right {
          from {
            opacity: 0;
            transform: translateX(1rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-in {
          animation-name: slide-in-from-right;
        }
        
        .slide-in-from-right {
          animation-name: slide-in-from-right;
        }
      `}</style>
    </>
  );
}