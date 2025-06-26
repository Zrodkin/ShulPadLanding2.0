import { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Setup takes about 1 minute. Simply install our app on your iPad, connect your Square account, click on quick-setup, add a picture, email, tax-exempt number and you're ready to start accepting donations.",
    priority: true
  },
  {
    question: "Do I need a Square account?",
    answer: "Yes, ShulPad integrates with Square for payment processing. If you don't have a Square account, you can create one for free. Square handles all payment processing and deposits funds directly to your bank account.",
    priority: true
  },
  {
    question: "What are the processing fees?",
    answer: "Square charges 2.6% + 15¢ per transaction for in-person card payments. There are no additional fees from ShulPad beyond your monthly subscription. All fees are transparently displayed to donors.",
    priority: true
  },
  {
    question: "Can I customize the donation interface?",
    answer: "Absolutely! You can customize colors, logos, donation amounts, messaging, and more. The Pro plan includes advanced branding options including custom backgrounds and themes.",
    priority: true
  },
  {
    question: "Does it work offline?",
    answer: "Yes! ShulPad can process donations even without an internet connection. All transactions are securely stored and automatically synced when connectivity is restored.",
    priority: false
  },
  {
    question: "How secure is the payment processing?",
    answer: "ShulPad uses Square's PCI DSS Level 1 compliant payment processing with end-to-end encryption. Your donors' payment information is never stored on the device and all data is protected with enterprise-grade security.",
    priority: false
  },
  {
    question: "Can I manage multiple kiosks?",
    answer: "Yes! The admin dashboard allows you to manage unlimited kiosks from one central location. View analytics, update settings, and monitor performance across all your donation stations.",
    priority: false
  },
  {
    question: "What about tax receipts?",
    answer: "ShulPad automatically generates and emails tax-deductible receipts to donors. Receipts include all required information for tax purposes and can be customized with your organization's details.",
    priority: false
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const priorityFaqs = faqs.filter(faq => faq.priority);
  const additionalFaqs = faqs.filter(faq => !faq.priority);
  const displayedFaqs = showAllQuestions ? faqs : priorityFaqs;

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 section-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="tech-text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ShulPad
          </p>
        </div>
        
        <div className="space-y-4 fade-in-up">
          {displayedFaqs.map((faq, index) => (
            <div key={index} className="group relative">
              {/* Main card with clean glassmorphism */}
              <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/25">
                <button 
                  className="w-full text-left flex justify-between items-center p-7"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-6 transition-colors duration-200">
                    {faq.question}
                  </h3>
                  
                  {/* Minimal icon */}
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center transition-all duration-200">
                      <div className={`w-4 h-4 transition-transform duration-200 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                        <Plus className="w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                  </div>
                </button>
                
                {/* Clean answer with smooth transition */}
                <div className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="border-t border-white/20 mx-7 mb-7">
                    <div className="animate-in fade-in duration-500 ease-out">
                      <p className="text-gray-800 leading-relaxed mt-2">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {additionalFaqs.length > 0 && (
          <div className="text-center mt-8 fade-in-up">
            <button
              onClick={() => setShowAllQuestions(!showAllQuestions)}
              className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="font-medium">
                {showAllQuestions ? 'Show Less' : `Show ${additionalFaqs.length} More Questions`}
              </span>
              <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${showAllQuestions ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}


      </div>
    </section>
  );
}