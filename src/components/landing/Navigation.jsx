import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/Home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t(language, 'nav.industries'), type: 'page', page: 'Industries' },
    { label: t(language, 'nav.distribution'), type: 'page', page: 'Distribution' },
    { label: t(language, 'nav.brands'), type: 'page', page: 'Brands' },
    { label: t(language, 'nav.compliance'), type: 'page', page: 'Compliance' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-gradient-to-r from-white via-[#F6F9FC] to-white backdrop-blur-xl shadow-[0_8px_30px_rgba(43,65,146,0.15)] border-b-2 border-[#2B4192]/10'
          : 'bg-gradient-to-r from-white/95 via-[#F6F9FC]/90 to-white/95 backdrop-blur-md border-b border-[#E6ECF2]/50'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2B4192]/20 via-[#36A0A2]/15 to-[#40B691]/20 rounded-full blur-2xl animate-pulse"></div>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6949a7445bc738ab35d3303b/b2b800413_PTMITLogoIcon.png"
                alt="PT. MITRA INTERNATIONAL TRANSAKSI"
                className="h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10 drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2B4192]/20 to-[#40B691]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <Link to={createPageUrl('Home')}>
              <button className="relative px-5 py-2.5 text-sm font-semibold text-[#0B1020]/80 hover:text-[#2B4192] transition-all duration-300 group">
                Home
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#2B4192] via-[#36A0A2] to-[#40B691] group-hover:w-3/4 transition-all duration-300 rounded-full shadow-lg shadow-[#2B4192]/30"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#2B4192]/0 via-[#36A0A2]/5 to-[#2B4192]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              </button>
            </Link>
            {navItems.map((item) => (
              <Link key={item.page} to={createPageUrl(item.page)}>
                <button className="relative px-5 py-2.5 text-sm font-semibold text-[#0B1020]/80 hover:text-[#2B4192] transition-all duration-300 group">
                  {item.label}
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#2B4192] via-[#36A0A2] to-[#40B691] group-hover:w-3/4 transition-all duration-300 rounded-full shadow-lg shadow-[#2B4192]/30"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#2B4192]/0 via-[#36A0A2]/5 to-[#2B4192]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                </button>
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#2B4192]/5 transition-colors"
              >
                {language === 'en' ? '🇬🇧' : '🇮🇩'}
                <span className="text-sm font-medium text-[#2B4192]">{language === 'en' ? 'EN' : 'ID'}</span>
              </button>
              <Link to={createPageUrl('Contact')}>
                <Button
                  variant="ghost"
                  className="text-[#2B4192] hover:text-white hover:bg-gradient-to-r hover:from-[#2B4192] hover:to-[#36A0A2] font-semibold border-2 border-transparent hover:border-[#2B4192]/20 transition-all duration-300"
                >
                  {t(language, 'nav.contact')}
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button
                  className="bg-gradient-to-r from-[#2B4192] via-[#2D368C] to-[#36A0A2] hover:from-[#2D368C] hover:via-[#36A0A2] hover:to-[#40B691] text-white font-bold shadow-[0_4px_20px_rgba(43,65,146,0.4)] hover:shadow-[0_6px_30px_rgba(54,160,162,0.6)] transition-all duration-300 group animate-glow hover:scale-105"
                >
                  {t(language, 'nav.getStarted')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#2B4192] hover:bg-[#2B4192]/5 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gradient-to-b from-[#F6F9FC] via-white to-[#F6F9FC] border-t-2 border-[#2B4192]/20 shadow-[0_10px_40px_rgba(43,65,146,0.2)] rounded-b-3xl overflow-hidden backdrop-blur-xl">
            <div className="px-4 py-6 space-y-1">
              <Link to={createPageUrl('Home')} onClick={() => setIsMobileMenuOpen(false)}>
                <button className="block w-full text-left px-5 py-3.5 text-sm font-semibold text-[#0B1020] hover:bg-gradient-to-r hover:from-[#2B4192]/10 hover:to-[#36A0A2]/10 hover:text-[#2B4192] rounded-xl transition-all border-2 border-transparent hover:border-[#2B4192]/20">
                  {t(language, 'nav.home')}
                </button>
              </Link>
              {navItems.map((item) => (
                <Link key={item.page} to={createPageUrl(item.page)} onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="block w-full text-left px-5 py-3.5 text-sm font-semibold text-[#0B1020] hover:bg-gradient-to-r hover:from-[#2B4192]/10 hover:to-[#36A0A2]/10 hover:text-[#2B4192] rounded-xl transition-all border-2 border-transparent hover:border-[#2B4192]/20">
                    {item.label}
                  </button>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#2B4192] bg-[#2B4192]/5 rounded-xl hover:bg-[#2B4192]/10 transition-all"
                >
                  {language === 'en' ? '🇬🇧' : '🇮🇩'}
                  <span>{language === 'en' ? 'English' : 'Bahasa Indonesia'}</span>
                </button>
                <Link to={createPageUrl('Contact')} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#2B4192] text-[#2B4192] hover:bg-gradient-to-r hover:from-[#2B4192] hover:to-[#36A0A2] hover:text-white font-bold transition-all duration-300 hover:scale-105 hover:border-transparent"
                  >
                    {t(language, 'nav.contact')}
                  </Button>
                </Link>
                <Link to={createPageUrl('Contact')} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-gradient-to-r from-[#2B4192] via-[#2D368C] to-[#36A0A2] hover:from-[#2D368C] hover:via-[#36A0A2] hover:to-[#40B691] text-white font-bold shadow-[0_4px_20px_rgba(43,65,146,0.4)] hover:shadow-[0_6px_30px_rgba(54,160,162,0.6)] transition-all duration-300 hover:scale-105 animate-glow"
                  >
                    {t(language, 'nav.getStarted')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}