import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Setup takes about 15 minutes. Simply connect your Square account, customize your kiosk interface, install our app on your iPad, and you're ready to start accepting donations."
  },
  {
    question: "Do I need a Square account?",
    answer: "Yes, ShulPad integrates with Square for payment processing. If you don't have a Square account, you can create one for free. Square handles all payment processing and deposits funds directly to your bank account."
  },
  {
    question: "What are the processing fees?",
    answer: "Square charges 2.6% + 10¢ per transaction for in-person card payments. There are no additional fees from ShulPad beyond your monthly subscription. All fees are transparently displayed to donors."
  },
  {
    question: "Can I customize the donation interface?",
    answer: "Absolutely! You can customize colors, logos, donation amounts, messaging, and more. The Pro plan includes advanced branding options including custom backgrounds and themes."
  },
  {
    question: "Does it work offline?",
    answer: "Yes! ShulPad can process donations even without an internet connection. All transactions are securely stored and automatically synced when connectivity is restored."
  },
  {
    question: "How secure is the payment processing?",
    answer: "ShulPad uses Square's PCI DSS Level 1 compliant payment processing with end-to-end encryption. Your donors' payment information is never stored on the device and all data is protected with enterprise-grade security."
  },
  {
    question: "Can I manage multiple kiosks?",
    answer: "Yes! The admin dashboard allows you to manage unlimited kiosks from one central location. View analytics, update settings, and monitor performance across all your donation stations."
  },
  {
    question: "What about tax receipts?",
    answer: "ShulPad automatically generates and emails tax-deductible receipts to donors. Receipts include all required information for tax purposes and can be customized with your organization's details."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ShulPad
          </p>
        </div>
        
        <div className="space-y-6 fade-in-up">
          {faqs.map((faq, index) => (
            <div key={index} className="glassmorphism p-6 rounded-xl">
              <button 
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
