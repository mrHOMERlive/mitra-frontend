import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, FileCheck, Package, Plane, FileText, Wrench, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '../components/landing/Navigation';
import Footer from '../components/landing/Footer';
import { useLanguage } from '../components/LanguageContext';
import { t } from '../components/translations';

const getServices = (lang) => [
  {
    icon: Search,
    title: t(lang, 'distribution.procurement.title'),
    description: t(lang, 'distribution.procurement.description'),
    color: 'from-[#2B4192] to-[#36A0A2]'
  },
  {
    icon: FileCheck,
    title: t(lang, 'distribution.quality.title'),
    description: t(lang, 'distribution.quality.description'),
    color: 'from-[#36A0A2] to-[#40B691]'
  },
  {
    icon: Package,
    title: t(lang, 'distribution.consolidation.title'),
    description: t(lang, 'distribution.consolidation.description'),
    color: 'from-[#288DAD] to-[#2B4192]'
  },
  {
    icon: Plane,
    title: t(lang, 'distribution.freight.title'),
    description: t(lang, 'distribution.freight.description'),
    color: 'from-[#2D368C] to-[#36A0A2]'
  },
  {
    icon: FileText,
    title: t(lang, 'distribution.customs.title'),
    description: t(lang, 'distribution.customs.description'),
    color: 'from-[#40B691] to-[#288DAD]'
  },
  {
    icon: Wrench,
    title: t(lang, 'distribution.aftermarket.title'),
    description: t(lang, 'distribution.aftermarket.description'),
    color: 'from-[#2B4192] to-[#40B691]'
  }
];

export default function Distribution() {
  const { language } = useLanguage();
  
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
          
          {/* SVG Illustrations */}
          <div className="absolute top-32 right-20 opacity-5 animate-float">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <rect x="20" y="20" width="100" height="100" rx="15" stroke="#2B4192" strokeWidth="4" fill="none"/>
              <path d="M40 70 L70 40 L100 70" stroke="#36A0A2" strokeWidth="3" fill="none"/>
            </svg>
          </div>
          <div className="absolute bottom-32 left-20 opacity-5 animate-float animation-delay-3000">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" stroke="#40B691" strokeWidth="4" fill="none"/>
              <path d="M40 60 L60 40 L80 60 L60 80 Z" fill="#2B4192"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#2B4192]/10 to-[#36A0A2]/10 border border-[#2B4192]/20 backdrop-blur-sm">
                <span className="text-sm font-semibold text-[#2B4192]">{t(language, 'distribution.badge')}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1020] mb-6">
              {t(language, 'distribution.title')}
            </h1>
            <p className="text-lg md:text-xl text-[#0B1020]/70 leading-relaxed">
              {t(language, 'distribution.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#E8F3F5] to-[#F0F7F9]"></div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-10 opacity-5 animate-float">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <polygon points="60,10 110,40 90,100 30,100 10,40" fill="#2B4192"/>
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-10 opacity-5 animate-float animation-delay-2000">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="#36A0A2" strokeWidth="5" fill="none"/>
              <circle cx="50" cy="50" r="20" fill="#40B691"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Real Photos Section */}
          <div className="mb-16 grid md:grid-cols-3 gap-6">
            <div className="group relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                alt="Warehouse logistics"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">{t(language, 'distribution.photos.warehouse')}</p>
              </div>
            </div>
            <div className="group relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" 
                alt="Cargo shipping"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">{t(language, 'distribution.photos.freight')}</p>
              </div>
            </div>
            <div className="group relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80" 
                alt="Quality inspection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">{t(language, 'distribution.photos.quality')}</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getServices(language).map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-[#F6F9FC] rounded-2xl p-8 border-2 border-[#E6ECF2] hover:border-[#36A0A2]/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#40B691]/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                    
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1020] mb-3 group-hover:text-[#2B4192] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#0B1020]/70 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#2B4192] to-[#36A0A2] rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B4192] via-[#2D368C] to-[#36A0A2] animate-gradient"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Animated Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#40B691]/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <span className="text-sm font-semibold text-white">{t(language, 'distribution.cta.badge')}</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            {t(language, 'distribution.cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            {t(language, 'distribution.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-white text-[#2B4192] hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 animate-glow"
              >
                {t(language, 'distribution.cta.requestQuote')}
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
              {t(language, 'distribution.cta.contact')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}