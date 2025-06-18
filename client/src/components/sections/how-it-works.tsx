import { Palette, Tablet, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: "/attached_assets/Square Logo White.png", // Your uploaded Square logo
    title: "Connect Square",
    description: "Link your existing Square account or create a new one in minutes.",
    gradient: "square-gradient"
  },
  {
    icon: Palette,
    title: "Customize Interface", 
    description: "Design your kiosk with your branding, colors, and donation amounts.",
    gradient: "accent-gradient"
  },
  {
    icon: Tablet,
    title: "Setup iPad",
    description: "Install our app on any compatible iPad and configure your kiosk.", 
    gradient: "bg-gradient-to-br from-green-400 to-blue-500"
  },
  {
    icon: Rocket,
    title: "Start Accepting",
    description: "Launch your kiosk and start accepting donations immediately.",
    gradient: "bg-gradient-to-br from-yellow-400 to-red-500"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How <span className="tech-text-gradient">It Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your donation kiosk running in four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconOrImage = step.icon;
            const isImagePath = typeof IconOrImage === 'string';
            
            return (
              <div key={index} className="text-center fade-in-up">
                <div className="relative mb-8">
                  <div className={`w-20 h-20 ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    {isImagePath ? (
                      <img 
                        src={IconOrImage}
                        alt={`${step.title} icon`}
                        className="object-contain"
                        style={{
                          width: '40px',
                          height: '40px'
                        }}
                      />
                    ) : (
                      <IconOrImage className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12 fade-in-up">
          <Button className="brand-gradient text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}