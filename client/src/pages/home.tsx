import { useEffect } from "react";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Demo from "@/components/sections/demo";
import HowItWorks from "@/components/sections/how-it-works";
import Features from "@/components/sections/features";
import SocialProof from "@/components/sections/social-proof";
import Pricing from "@/components/sections/pricing";
import Technical from "@/components/sections/technical";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  useEffect(() => {
    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    // Observe all fade-in-up elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
      observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        const target = href ? document.querySelector(href) : null;
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
  <div className="min-h-screen">
    <Navigation />
    <Hero />
    <Benefits />
    <Demo />
    <HowItWorks />
    <Features />
    <SocialProof />
    <Pricing />
    <Technical />
    <FAQ />
    <CTA />
    <Footer />
    <WhatsAppWidget /> 
  </div>
);
}
