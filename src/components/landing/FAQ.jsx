import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      questionKey: 'faq.items.businesses.question',
      answerKey: 'faq.items.businesses.answer'
    },
    {
      questionKey: 'faq.items.fast.question',
      answerKey: 'faq.items.fast.answer'
    },
    {
      questionKey: 'faq.items.documents.question',
      answerKey: 'faq.items.documents.answer'
    },
    {
      questionKey: 'faq.items.customs.question',
      answerKey: 'faq.items.customs.answer'
    },
    {
      questionKey: 'faq.items.fees.question',
      answerKey: 'faq.items.fees.answer'
    },
    {
      questionKey: 'faq.items.guaranteed.question',
      answerKey: 'faq.items.guaranteed.answer'
    },
    {
      questionKey: 'faq.items.logistics.question',
      answerKey: 'faq.items.logistics.answer'
    },
    {
      questionKey: 'faq.items.quality.question',
      answerKey: 'faq.items.quality.answer'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-[#F6F9FC] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(43,65,146,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(43,65,146,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* FAQ Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-5 animate-float">
        <svg width="130" height="130" viewBox="0 0 130 130">
          <rect x="15" y="15" width="100" height="100" rx="20" stroke="#2B4192" strokeWidth="5" fill="none"/>
          <text x="65" y="75" fontSize="60" fill="#36A0A2" textAnchor="middle">?</text>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 animate-float animation-delay-2000">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="#40B691"/>
          <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="white"/>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1020] mb-4">
            {t(language, 'faq.title')}
          </h2>
          <p className="text-lg text-[#0B1020]/60">
            {t(language, 'faq.subtitle')}
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
                  {t(language, faq.questionKey)}
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
                    {t(language, faq.answerKey)}
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