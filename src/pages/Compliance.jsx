import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, FileText, Globe, Package, MessageSquare, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '../components/landing/Navigation';
import Footer from '../components/landing/Footer';
import { useLanguage } from '../components/LanguageContext';
import { t } from '../components/translations';

const getSections = (lang) => [
  {
    icon: Shield,
    title: t(lang, 'compliance.checks.title'),
    description: t(lang, 'compliance.checks.description')
  },
  {
    icon: FileText,
    title: t(lang, 'compliance.documentation.title'),
    description: t(lang, 'compliance.documentation.description')
  },
  {
    icon: Globe,
    title: t(lang, 'compliance.requirements.title'),
    description: t(lang, 'compliance.requirements.description')
  },
  {
    icon: Package,
    title: t(lang, 'compliance.handling.title'),
    description: t(lang, 'compliance.handling.description')
  },
  {
    icon: MessageSquare,
    title: t(lang, 'compliance.communication.title'),
    description: t(lang, 'compliance.communication.description')
  }
];

export default function Compliance() {
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
        
        {/* Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#2B4192]/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-[#36A0A2]/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#40B691]/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* SVG Compliance Icons */}
          <div className="absolute top-32 right-20 opacity-5 animate-float">
            <svg width="130" height="130" viewBox="0 0 130 130">
              <circle cx="65" cy="65" r="55" stroke="#2B4192" strokeWidth="4" fill="none"/>
              <path d="M45 65 L60 80 L90 50" stroke="#36A0A2" strokeWidth="5" fill="none"/>
            </svg>
          </div>
          <div className="absolute bottom-32 left-20 opacity-5 animate-float animation-delay-3000">
            <svg width="110" height="110" viewBox="0 0 110 110">
              <rect x="15" y="15" width="80" height="80" rx="10" stroke="#40B691" strokeWidth="4" fill="none"/>
              <path d="M35 55 L50 70 L75 40" stroke="#2B4192" strokeWidth="4" fill="none"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#2B4192]/10 to-[#36A0A2]/10 border border-[#2B4192]/20 backdrop-blur-sm">
                <span className="text-sm font-semibold text-[#2B4192]">{t(language, 'compliance.badge')}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1020] mb-6">
              {t(language, 'compliance.title')}
            </h1>
            <p className="text-lg md:text-xl text-[#0B1020]/70 leading-relaxed">
              {t(language, 'compliance.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#E8F3F5] to-[#F0F7F9]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-10 opacity-5 animate-float">
            <svg width="110" height="110" viewBox="0 0 110 110">
              <polygon points="55,10 100,40 85,100 25,100 10,40" fill="#2B4192"/>
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-10 opacity-5 animate-float animation-delay-2000">
            <svg width="90" height="90" viewBox="0 0 90 90">
              <circle cx="45" cy="45" r="35" stroke="#36A0A2" strokeWidth="5" fill="none"/>
              <circle cx="45" cy="45" r="18" fill="#40B691"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Compliance Photos Section */}
          <div className="mb-16 grid md:grid-cols-2 gap-6">
            <div className="group relative h-72 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
                alt="Documentation review"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B4192]/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">{t(language, 'compliance.photos.documentation')}</p>
              </div>
            </div>
            <div className="group relative h-72 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
                alt="Compliance verification"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#36A0A2]/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">{t(language, 'compliance.photos.compliance')}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {getSections(language).map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-[#F6F9FC] rounded-2xl p-8 border-2 border-[#E6ECF2] hover:border-[#36A0A2]/40 hover:shadow-2xl transition-all duration-500 flex gap-6 hover:-translate-x-2"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2B4192] to-[#36A0A2] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0B1020] mb-3 group-hover:text-[#2B4192] transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-[#0B1020]/70 leading-relaxed">
                      {section.description}
                    </p>
                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#2B4192] to-[#36A0A2] rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compliance Note */}
          <div className="mt-12 bg-[#F6F9FC] rounded-xl p-6 border border-[#E6ECF2]">
            <p className="text-sm text-[#0B1020]/60 leading-relaxed">
              <strong className="text-[#0B1020]">{t(language, 'compliance.note')}</strong> {t(language, 'compliance.noteText')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
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
              <span className="text-sm font-semibold text-white">{t(language, 'compliance.cta.badge')}</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            {t(language, 'compliance.cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            {t(language, 'compliance.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-white text-[#2B4192] hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 animate-glow"
              >
                {t(language, 'compliance.cta.contact')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2B4192] font-semibold transition-all duration-300 hover:scale-105"
              >
                {t(language, 'compliance.cta.requestQuote')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}