import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ = ({ faqs }: FAQProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="pb-16 bg-primary-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-primary-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-primary-dark">{faq.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-primary-green" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary-green" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4 animate-slide-up">
                  <p dangerouslySetInnerHTML={{__html:faq.answer}} className="text-primary-muted leading-relaxed"></p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;