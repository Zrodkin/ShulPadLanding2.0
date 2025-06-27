import { Twitter, Linkedin, Facebook, Instagram, X } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Demo", href: "#demo" },
      { name: "FAQ", href: "#faq" }
    ]
  },
  {
    title: "Support", 
    links: [
      { name: "Contact Us", href: "/contact" },  // ← Updated to real page
      { name: "WhatsApp", href: "https://wa.me/16179032387" },
      { name: "Phone Support", href: "tel:+16179032387" },
      { name: "Schedule Demo", href: "mailto:info@shulpad.com?subject=Demo Request" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "User Guide", href: "/user-guide" },
      { name: "Hardware Requirements", href: "/hardware-requirements" },
      { name: "Integration Help", href: "/integration-help" },
      { name: "Security Info", href: "/security-info" }
    ]
  }
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms", href: "/terms" },  // ← Updated to real page
  { name: "Contact Legal", href: "mailto:info@shulpad.com?subject=Legal Inquiry" }
];

export default function MobileOptimizedFooter() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Desktop Layout: 4-column grid (original) */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/attached_assets/Charity Pad Logo Square_1750274378262.png" 
                alt="ShulPad Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-semibold">ShulPad</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform any iPad into a professional donation kiosk. The Square for donations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/shulpadhq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow ShulPad on X"
              >
                <X className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/shulpad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Connect with ShulPad on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/shulpad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Like ShulPad on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/shulpadhq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow ShulPad on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors"
                      {...(link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? 
                        { target: link.href.startsWith('http') ? '_blank' : undefined, rel: link.href.startsWith('http') ? 'noopener noreferrer' : undefined } : 
                        {})}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Layout: Optimized stacked version */}
        <div className="md:hidden">
          {/* Company Info */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="/attached_assets/Charity Pad Logo Square_1750274378262.png" 
                alt="ShulPad Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-semibold">ShulPad</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Transform any iPad into a professional donation kiosk. The Square for donations.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://twitter.com/shulpad"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 -m-2"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/shulpad"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 -m-2"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/shulpad"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 -m-2"
                aria-label="Like us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/shulpadhq"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 -m-2"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Footer Sections - 3 Columns on Mobile */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {footerSections.map((section, index) => (
              <div key={index} className="text-center">
                <h3 className="text-sm font-semibold mb-3 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors text-xs block py-1"
                        {...(link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? 
                          { target: link.href.startsWith('http') ? '_blank' : undefined, rel: link.href.startsWith('http') ? 'noopener noreferrer' : undefined } : 
                          {})}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Section - Legal & Copyright (shared) */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 ShulPad. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            {legalLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="hover:text-white transition-colors"
                {...(link.href.startsWith('http') || link.href.startsWith('mailto:') ? 
                  { target: link.href.startsWith('mailto:') ? undefined : '_blank', rel: link.href.startsWith('http') ? 'noopener noreferrer' : undefined } : 
                  {})}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}