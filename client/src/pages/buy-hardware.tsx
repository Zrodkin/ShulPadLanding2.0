import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus, Send, Check } from 'lucide-react';

interface HardwareOption {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  features: string[];
  video?: string;
  popular?: boolean;
}

const hardwareOptions: HardwareOption[] = [
  {
    id: "wall-mount",
    name: "Square Kiosk",
    subtitle: "Wall Mount",
    price: 500,
    description: "Clean wall installation for permanent setups",
    features: [
      "Low-profile design",
      "Tamper-resistant mounting", 
      "Professional appearance",
      "Secure cable management"
    ],
    video: "attached_assets/Kiosk video Wall Mount.mp4"
  },
  {
    id: "floor-stand", 
    name: "Square Stand Pro",
    subtitle: "Floor Stand",
    price: 700,
    description: "Premium solution for high-traffic areas",
    features: [
      "Heavy-duty construction",
      "Adjustable height",
      "Secure enclosure", 
      "Professional grade"
    ],
    popular: true
  },
  {
    id: "table-top",
    name: "Square Stand", 
    subtitle: "Table Top",
    price: 490,
    description: "Flexible positioning for events and counters",
    features: [
      "Portable design",
      "Adjustable angle",
      "Quick setup",
      "Event-friendly"
    ],
    video: "attached_assets/Video square stand.mp4"
  }
];

export default function HardwareBuyingPage() {
  const [selectedOption, setSelectedOption] = useState<HardwareOption | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    organization: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleSubmit = async () => {
    if (!selectedOption || !contactInfo.name || !contactInfo.email || !contactInfo.organization) return;

    setIsSubmitting(true);

    // Simple email data - no actual purchasing logic needed
    const emailData = {
      customerName: contactInfo.name,
      customerEmail: contactInfo.email,
      organization: contactInfo.organization,
      phone: contactInfo.phone || 'Not provided',
      selectedHardware: `${selectedOption.name} (${selectedOption.subtitle})`,
      quantity: quantity,
      estimatedTotal: `${(selectedOption.price * quantity).toLocaleString()}`
    };

    try {
      const response = await fetch('/api/hardware-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-6 h-6 text-gray-900" />
          </div>
          <h2 className="text-2xl font-light text-gray-900 mb-4">Request Information</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We'll contact you with pricing and availability details.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => window.history.back()}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-xl font-light text-gray-900">Hardware Selection</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Hardware Options */}
          <div className="lg:col-span-3">
            <div className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-4">Choose your mounting solution</h2>
              <p className="text-gray-600 leading-relaxed">
                Professional hardware designed to integrate seamlessly into your space.
              </p>
            </div>

            <div className="space-y-6">
              {hardwareOptions.map((option) => (
                <div
                  key={option.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    selectedOption?.id === option.id ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                  }`}
                  onClick={() => setSelectedOption(option)}
                >
                  <div className={`border rounded-none p-8 transition-all duration-300 ${
                    selectedOption?.id === option.id
                      ? 'border-gray-900 bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    
                    {option.popular && (
                      <div className="absolute -top-3 left-8">
                        <div className="bg-gray-900 text-white px-3 py-1 text-xs font-light tracking-wide">
                          RECOMMENDED
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      {/* Media */}
                      <div className="relative">
                        {option.video ? (
                          <div className="aspect-video bg-gray-100 rounded-sm overflow-hidden">
                            <video
                              src={option.video}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="aspect-video bg-gray-100 rounded-sm flex items-center justify-center">
                            <span className="text-sm text-gray-400">Preview coming soon</span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-light text-gray-900">{option.name}</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">{option.subtitle}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-light text-gray-900">${option.price.toLocaleString()}</div>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {option.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                              {feature}
                            </div>
                          ))}
                        </div>

                        {selectedOption?.id === option.id && (
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="flex items-center text-sm text-gray-900">
                              <Check className="w-4 h-4 mr-2" />
                              Selected
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Form */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              {selectedOption ? (
                <div className="border border-gray-200 p-8">
                  <h3 className="text-lg font-light text-gray-900 mb-8">Send Inquiry</h3>

                  {/* Selected Item Summary */}
                  <div className="mb-8 pb-8 border-b border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-light text-gray-900">{selectedOption.name}</h4>
                        <p className="text-sm text-gray-500">{selectedOption.subtitle}</p>
                      </div>
                      <div className="text-lg font-light text-gray-900">
                        ${selectedOption.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="mb-8">
                    <label className="block text-sm text-gray-600 mb-3">Quantity</label>
                    <div className="flex items-center border border-gray-200">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(-1)}
                        className="px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="flex-1 text-center py-3 border-0 focus:ring-0"
                        min="1"
                      />
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(1)}
                        className="px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="mb-8 pb-8 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Estimated Total</span>
                      <span className="text-xl font-light text-gray-900">
                        ${(selectedOption.price * quantity).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">For reference only</p>
                  </div>

                  {/* Contact Form */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Name</label>
                      <input
                        type="text"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                        className="w-full border border-gray-200 px-4 py-3 focus:ring-0 focus:border-gray-900 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Email</label>
                      <input
                        type="email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                        className="w-full border border-gray-200 px-4 py-3 focus:ring-0 focus:border-gray-900 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Organization</label>
                      <input
                        type="text"
                        value={contactInfo.organization}
                        onChange={(e) => setContactInfo({...contactInfo, organization: e.target.value})}
                        className="w-full border border-gray-200 px-4 py-3 focus:ring-0 focus:border-gray-900 transition-colors"
                        placeholder="Organization name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Phone (optional)</label>
                      <input
                        type="tel"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                        className="w-full border border-gray-200 px-4 py-3 focus:ring-0 focus:border-gray-900 transition-colors"
                        placeholder="Phone number"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !contactInfo.name || !contactInfo.email || !contactInfo.organization}
                      className="w-full bg-gray-900 text-white py-4 px-6 hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span className="font-light">Send Request</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 mt-4 text-center leading-relaxed">
                    We'll respond with detailed pricing and availability within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="border border-gray-200 p-8 text-center">
                  <p className="text-gray-500">Select a hardware option to continue</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}