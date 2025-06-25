import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Send, X, Mail, Phone, MessageCircle } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organizationName: "",
    organizationType: "",
    organizationSize: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    try {
      // Simulate form submission - replace with actual form handling
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          organizationName: "",
          organizationType: "",
          organizationSize: "",
          message: ""
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Contact <span className="tech-text-gradient">ShulPad</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your donation experience? Get in touch with our team and we'll help you get started.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                
                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <a href="mailto:info@shulpad.com" className="text-blue-600 hover:text-blue-700">
                        info@shulpad.com
                      </a>
                      <p className="text-gray-600 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <a href="tel:+16179032387" className="text-green-600 hover:text-green-700">
                        +1 (617) 903-2387
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Mon-Fri, 9 AM - 6 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/16179032387" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700"
                      >
                        +1 (617) 903-2387
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Quick responses</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-gray-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Why Choose ShulPad?</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      15-minute setup
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      75% cost savings
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      30-day free trial
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Enterprise security
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
                
                <div className="space-y-6">
                  {/* Contact Information Section */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200 pb-2">
                      Contact Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Organization Details Section */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200 pb-2">
                      Organization Details
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your Organization"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Organization Type
                        </label>
                        <select
                          name="organizationType"
                          value={formData.organizationType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select type</option>
                          <option value="synagogue">Synagogue</option>
                          <option value="church">Church</option>
                          <option value="mosque">Mosque</option>
                          <option value="nonprofit">Nonprofit</option>
                          <option value="charity">Charity</option>
                          <option value="school">School</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Organization Size
                        </label>
                        <select
                          name="organizationSize"
                          value={formData.organizationSize}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select size</option>
                          <option value="small">Small (1-50 members)</option>
                          <option value="medium">Medium (51-200 members)</option>
                          <option value="large">Large (201-500 members)</option>
                          <option value="xlarge">Very Large (500+ members)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message Section */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200 pb-2">
                      Additional Information
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your needs
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        placeholder="Share your timeline, specific requirements, or any questions you have about ShulPad..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full brand-gradient text-white py-4 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-medium shadow-lg group"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </div>
                      ) : submitStatus === "success" ? (
                        <div className="flex items-center justify-center gap-3">
                          <Check className="w-5 h-5" />
                          <span>Message Sent Successfully!</span>
                        </div>
                      ) : submitStatus === "error" ? (
                        <div className="flex items-center justify-center gap-3">
                          <X className="w-5 h-5" />
                          <span>Error - Please Try Again</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3">
                          <span>Send Message</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      )}
                    </Button>
                  </div>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-green-800 font-medium">Message sent successfully!</p>
                          <p className="text-green-700 text-sm">
                            We'll get back to you within 24 hours with next steps.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
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