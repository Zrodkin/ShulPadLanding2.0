import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Make real API call instead of simulation
      await apiRequest("POST", "/api/contact", formData);
      setSubmitStatus("success");
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          message: ""
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error: any) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
      setErrorMessage(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              GET IN TOUCH
            </div>
            <h1 className="text-5xl font-light text-gray-900 mb-6">
              Let's Talk
            </h1>
            <p className="text-lg text-gray-600">
              We'll get back to you soon!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-gray-900 transition-colors placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-gray-900 transition-colors placeholder-gray-400"
                />
              </div>
            </div>

            {/* Phone and Organization Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(999) 999-9999"
                  className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-gray-900 transition-colors placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Your Organization"
                  className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-gray-900 transition-colors placeholder-gray-400"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={1}
                placeholder="Your Message"
                className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-gray-900 transition-colors placeholder-gray-400 resize-none min-h-[3rem] overflow-hidden"
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = target.scrollHeight + 'px';
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              {submitStatus === "success" ? (
                <div className="text-center">
                  <div className="text-green-600 font-medium mb-2">Message sent successfully!</div>
                  <div className="text-gray-600 text-sm">We'll get back to you within 24 hours.</div>
                </div>
              ) : (
                <div>
                  {submitStatus === "error" && (
                    <div className="text-center mb-4">
                      <div className="text-red-600 font-medium">Error sending message</div>
                      <div className="text-red-500 text-sm">{errorMessage}</div>
                    </div>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-full text-lg font-medium transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      "SEND REQUEST"
                    )}
                  </Button>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info Cards - Full Width Section */}
        <div className="max-w-6xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl px-8 py-8 shadow-sm border border-gray-100">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
                CALL
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-gray-700 flex-shrink-0" />
                <a href="tel:+16179032387" className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">
                  +1 617 903 2387
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl px-8 py-8 shadow-sm border border-gray-100">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
                EMAIL
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-gray-700 flex-shrink-0" />
                <a href="mailto:info@shulpad.com" className="text-gray-900 hover:text-gray-600 transition-colors whitespace-nowrap">
                  info@shulpad.com
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl px-8 py-8 shadow-sm border border-gray-100">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
                LOCATION
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-gray-700 flex-shrink-0" />
                <div className="text-gray-900 whitespace-nowrap">
                  Canadensis, PA
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}