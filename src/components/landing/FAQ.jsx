import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What types of businesses do you finance?',
    answer: 'We focus on operating businesses with verifiable activity and a clear use of funds (working capital, trade cycles, expansion).'
  },
  {
    question: 'How fast can I get a decision?',
    answer: 'Timelines depend on documentation and assessment complexity. We aim to move quickly once required documents are complete.'
  },
  {
    question: 'Do you require collateral?',
    answer: 'It depends on the structure and risk profile. Some solutions can be structured with alternative forms of support.'
  },
  {
    question: 'What documents are typically needed?',
    answer: 'Commonly: company registration info, basic financials, bank statements, and transaction/invoice evidence (as applicable).'
  },
  {
    question: 'Are rates and fees fixed?',
    answer: 'Terms depend on the assessment, funding type, and duration. We present all costs clearly in the proposal.'
  },
  {
    question: 'Is funding guaranteed once I submit a form?',
    answer: 'No—submissions are requests for review. Offers are subject to eligibility, due diligence, and approval.'
  },
  {
    question: 'Can you tailor repayment schedules?',
    answer: 'Yes, where appropriate. We can align schedules to cash-flow patterns (e.g., invoice cycles).'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-[#F6F9FC]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1020] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#0B1020]/60">
            Clear answers to common questions about our lending process
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E6ECF2] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F6F9FC] transition-colors"
              >
                <span className="text-base font-semibold text-[#0B1020] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2B4192] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-[#0B1020]/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}