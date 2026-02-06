import React from 'react';
import { Target, Shield, Clock, Globe2, Award, FileCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

export default function WhyUs() {
  const { language } = useLanguage();
  
  const values = [
    {
      icon: Target,
      titleKey: 'whyUs.values.commitment.title',
      descriptionKey: 'whyUs.values.commitment.description',
      color: '#2B4192'
    },
    {
      icon: Clock,
      titleKey: 'whyUs.values.rapid.title',
      descriptionKey: 'whyUs.values.rapid.description',
      color: '#36A0A2'
    },
    {
      icon: Award,
      titleKey: 'whyUs.values.reliable.title',
      descriptionKey: 'whyUs.values.reliable.description',
      color: '#288DAD'
    },
    {
      icon: Globe2,
      titleKey: 'whyUs.values.transparent.title',
      descriptionKey: 'whyUs.values.transparent.description',
      color: '#40B691'
    },
    {
      icon: Shield,
      titleKey: 'whyUs.values.regulatory.title',
      descriptionKey: 'whyUs.values.regulatory.description',
      color: '#2D368C'
    },
    {
      icon: FileCheck,
      titleKey: 'whyUs.values.documentation.title',
      descriptionKey: 'whyUs.values.documentation.description',
      color: '#29887E'
    }
  ];
  
  return (
    <section id="why-us" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(43,65,146,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(43,65,146,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Decorative Value Illustrations */}
      <div className="absolute top-20 right-10 opacity-5 animate-float">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <polygon points="70,10 130,50 110,120 30,120 10,50" fill="#2B4192"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 opacity-5 animate-float animation-delay-4000">
        <svg width="110" height="110" viewBox="0 0 110 110">
          <circle cx="55" cy="55" r="45" stroke="#36A0A2" strokeWidth="5" fill="none"/>
          <circle cx="55" cy="55" r="25" fill="#40B691"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1020] mb-4">
            {t(language, 'whyUs.title')}
          </h2>
          <p className="text-lg text-[#0B1020]/60 max-w-2xl mx-auto">
            {t(language, 'whyUs.subtitle')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#E6ECF2] h-full">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0B1020] mb-4">
                    {t(language, value.titleKey)}
                  </h3>
                  <p className="text-[#0B1020]/70 leading-relaxed">
                    {t(language, value.descriptionKey)}
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