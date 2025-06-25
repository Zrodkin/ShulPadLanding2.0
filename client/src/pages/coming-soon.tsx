import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Bell, Mail } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";

export default function ComingSoon() {
  // Default values since this is a generic coming soon page
  const title = "Coming Soon";
  const description = "We're working hard to bring you this feature. Stay tuned for updates!";
  const expectedDate = "Q3 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-lg p-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Clock className="w-10 h-10 text-blue-600" />
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>

            {expectedDate && (
              <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center space-x-2 text-blue-700">
                  <Bell className="w-5 h-5" />
                  <span className="font-medium">Expected: {expectedDate}</span>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <Button 
                asChild
                className="w-full brand-gradient text-white py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-medium shadow-lg"
              >
                <a href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                asChild
                className="w-full py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
              >
                <a href="mailto:info@shulpad.com?subject=Notify me when ready">
                  <Mail className="w-4 h-4 mr-2" />
                  Get Notified When Ready
                </a>
              </Button>

              <Button 
                variant="outline" 
                asChild
                className="w-full py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
              >
                <a href="/contact">
                  Contact Us for More Info
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Have questions? <a href="mailto:info@shulpad.com" className="text-blue-600 hover:text-blue-700">Email us</a> or <a href="https://wa.me/16179032387" className="text-blue-600 hover:text-blue-700">WhatsApp us</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

// If you need different versions, create separate page files:
// help-center.tsx, api-docs.tsx, etc.