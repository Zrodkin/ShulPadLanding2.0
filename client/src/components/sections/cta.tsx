import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-4xl mx-auto text-center">
        <div className="interactive-card fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="tech-text-gradient">Transform</span> Your Fundraising?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 500+ organizations using ShulPad to raise more funds with professional donation kiosks. 
            Start your free 30-day trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="brand-gradient text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" className="glassmorphism text-blue-600 px-8 py-4 rounded-full hover:bg-white/30 text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              30-day money-back guarantee
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Setup in 15 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
