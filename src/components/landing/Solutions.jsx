import React from 'react';
import { Button } from '@/components/ui/button';
import { Handshake, Users, DollarSign, FileText } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

export default function Solutions() {
  const { language } = useLanguage();
  
  const solutions = [
    {
      icon: Handshake,
      titleKey: 'services.items.trade.title',
      descriptionKey: 'services.items.trade.description',
      color: '#2B4192',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80'
    },
    {
      icon: Users,
      titleKey: 'services.items.sourcing.title',
      descriptionKey: 'services.items.sourcing.description',
      color: '#36A0A2',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80'
    },
    {
      icon: DollarSign,
      titleKey: 'services.items.settlement.title',
      descriptionKey: 'services.items.settlement.description',
      color: '#288DAD',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'
    },
    {
      icon: FileText,
      titleKey: 'services.items.logistics.title',
      descriptionKey: 'services.items.logistics.description',
      color: '#40B691',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'
    }
  ];
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-32 bg-gradient-to-br from-[#E8F3F5] via-[#F6F9FC] to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#36A0A2]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2B4192]/5 to-transparent rounded-full blur-3xl"></div>
      
      {/* Decorative Illustrations */}
      <div className="absolute top-10 right-20 opacity-5 animate-float">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <path d="M75 15 L135 75 L75 135 L15 75 Z" fill="#2B4192"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 opacity-5 animate-float animation-delay-2000">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="#36A0A2"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1020] mb-4">
            {t(language, 'services.title')}
          </h2>
          <p className="text-lg text-[#0B1020]/60 max-w-2xl mx-auto">
            {t(language, 'services.subtitle')}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#F6F9FC] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-[#E6ECF2] hover:border-[#36A0A2]/40 group"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={t(language, solution.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shadow-xl"
                      style={{ backgroundColor: `${solution.color}` }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#0B1020] mb-4">
                    {t(language, solution.titleKey)}
                  </h3>
                  <p className="text-[#0B1020]/70 leading-relaxed">
                    {t(language, solution.descriptionKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-[#2B4192] hover:bg-[#2D368C] text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            {t(language, 'services.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}