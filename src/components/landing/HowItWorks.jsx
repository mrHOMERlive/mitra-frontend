import React from 'react';
import { MessageSquare, FileSearch, FileCheck, Truck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

export default function HowItWorks() {
  const { language } = useLanguage();
  
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      titleKey: 'howItWorks.steps.submit.title',
      descriptionKey: 'howItWorks.steps.submit.description'
    },
    {
      number: '02',
      icon: FileSearch,
      titleKey: 'howItWorks.steps.quote.title',
      descriptionKey: 'howItWorks.steps.quote.description'
    },
    {
      number: '03',
      icon: FileCheck,
      titleKey: 'howItWorks.steps.verification.title',
      descriptionKey: 'howItWorks.steps.verification.description'
    },
    {
      number: '04',
      icon: Truck,
      titleKey: 'howItWorks.steps.execution.title',
      descriptionKey: 'howItWorks.steps.execution.description'
    }
  ];
  
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-white via-[#F0F7F9] to-[#E8F3F5] relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#2B4192]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#40B691]/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      {/* Decorative Process Illustrations */}
      <div className="absolute top-1/4 left-10 opacity-5 animate-float">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path d="M20 50 L50 20 L80 50 L50 80 Z" stroke="#2B4192" strokeWidth="4" fill="none"/>
          <circle cx="50" cy="50" r="15" fill="#36A0A2"/>
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-5 animate-float animation-delay-3000">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <rect x="20" y="20" width="80" height="80" rx="15" stroke="#40B691" strokeWidth="4" fill="none"/>
          <path d="M40 60 L60 40 L80 60" stroke="#2B4192" strokeWidth="3" fill="none"/>
        </svg>
      </div>
      
      {/* Connecting Line Background */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E6ECF2] to-transparent hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1020] mb-4">
            {t(language, 'howItWorks.title')}
          </h2>
          <p className="text-lg text-[#0B1020]/60 max-w-2xl mx-auto mb-8">
            {t(language, 'howItWorks.subtitle')}
          </p>
          <p className="text-sm font-medium text-[#2B4192] max-w-xl mx-auto">
            {t(language, 'howItWorks.note')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#E6ECF2] to-transparent -translate-x-8 z-0" />
                )}

                <div className="relative bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-[#E6ECF2] h-full">
                  {/* Step Number */}
                  <div className="text-5xl font-bold text-[#2B4192]/10 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B4192] to-[#36A0A2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#0B1020] mb-3">
                    {t(language, step.titleKey)}
                  </h3>
                  <p className="text-sm text-[#0B1020]/70 leading-relaxed">
                    {t(language, step.descriptionKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}