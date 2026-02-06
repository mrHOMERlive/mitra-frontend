import React from 'react';
import { Button } from '@/components/ui/button';
import { Package, Cpu, Cog, Car, Beaker, Heart, ShoppingBag, Building2, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '../components/landing/Navigation';
import Footer from '../components/landing/Footer';
import { useLanguage } from '../components/LanguageContext';
import { t } from '../components/translations';

const getIndustries = (lang) => [
  {
    icon: Package,
    title: t(lang, 'industries.agricultural.title'),
    description: t(lang, 'industries.agricultural.description'),
    color: 'from-[#40B691] to-[#288DAD]',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80'
  },
  {
    icon: Cpu,
    title: t(lang, 'industries.electronics.title'),
    description: t(lang, 'industries.electronics.description'),
    color: 'from-[#2B4192] to-[#36A0A2]',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
  },
  {
    icon: Cog,
    title: t(lang, 'industries.equipment.title'),
    description: t(lang, 'industries.equipment.description'),
    color: 'from-[#2D368C] to-[#288DAD]',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80'
  },
  {
    icon: Car,
    title: t(lang, 'industries.automotive.title'),
    description: t(lang, 'industries.automotive.description'),
    color: 'from-[#36A0A2] to-[#40B691]',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'
  },
  {
    icon: Beaker,
    title: t(lang, 'industries.chemicals.title'),
    description: t(lang, 'industries.chemicals.description'),
    color: 'from-[#288DAD] to-[#2B4192]',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80'
  },
  {
    icon: Heart,
    title: t(lang, 'industries.healthcare.title'),
    description: t(lang, 'industries.healthcare.description'),
    color: 'from-[#40B691] to-[#36A0A2]',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&q=80'
  },
  {
    icon: ShoppingBag,
    title: t(lang, 'industries.consumer.title'),
    description: t(lang, 'industries.consumer.description'),
    color: 'from-[#2B4192] to-[#40B691]',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
  },
  {
    icon: Building2,
    title: t(lang, 'industries.construction.title'),
    description: t(lang, 'industries.construction.description'),
    color: 'from-[#2D368C] to-[#36A0A2]',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
  }
];

export default function Industries() {
  const { language } = useLanguage();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/6281117796126', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#E8F3F5] via-[#F6F9FC] to-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(43,65,146,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(43,65,146,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#2B4192]/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-[#36A0A2]/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#40B691]/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* SVG Industry Icons */}
          <div className="absolute top-32 right-20 opacity-5 animate-float">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <circle cx="70" cy="70" r="60" stroke="#2B4192" strokeWidth="4" fill="none"/>
              <rect x="40" y="40" width="60" height="60" rx="5" fill="#36A0A2"/>
            </svg>
          </div>
          <div className="absolute bottom-32 left-20 opacity-5 animate-float animation-delay-3000">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <polygon points="60,10 110,40 90,100 30,100 10,40" fill="#40B691"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#2B4192]/10 to-[#36A0A2]/10 border border-[#2B4192]/20 backdrop-blur-sm">
                <span className="text-sm font-semibold text-[#2B4192]">{t(language, 'industries.badge')}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1020] mb-6">
              {t(language, 'industries.title')}
            </h1>
            <p className="text-lg md:text-xl text-[#0B1020]/70 leading-relaxed">
              {t(language, 'industries.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#E8F3F5] to-[#F0F7F9]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-10 opacity-5 animate-float">
            <svg width="110" height="110" viewBox="0 0 110 110">
              <rect x="15" y="15" width="80" height="80" rx="15" stroke="#2B4192" strokeWidth="4" fill="none"/>
              <circle cx="55" cy="55" r="20" fill="#36A0A2"/>
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-10 opacity-5 animate-float animation-delay-2000">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="#40B691" strokeWidth="5" fill="none"/>
              <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="#2B4192"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {getIndustries(language).map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-[#F6F9FC] rounded-2xl overflow-hidden border-2 border-[#E6ECF2] hover:border-[#36A0A2]/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Industry Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-[#0B1020] mb-3 group-hover:text-[#2B4192] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-[#0B1020]/70 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#2B4192] to-[#36A0A2] rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B4192] via-[#2D368C] to-[#36A0A2] animate-gradient"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#40B691]/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <span className="text-sm font-semibold text-white">{t(language, 'industries.cta.badge')}</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            {t(language, 'industries.cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            {t(language, 'industries.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-white text-[#2B4192] hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 animate-glow"
              >
                {t(language, 'industries.cta.requestQuote')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              onClick={openWhatsApp}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#2B4192] font-semibold transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              {t(language, 'industries.cta.whatsapp')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}