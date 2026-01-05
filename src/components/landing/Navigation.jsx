import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { label: 'Industries', type: 'page', page: 'Industries' },
    { label: 'Distribution', type: 'page', page: 'Distribution' },
    { label: 'Brands', type: 'page', page: 'Brands' },
    { label: 'Compliance', type: 'page', page: 'Compliance' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6949a7445bc738ab35d3303b/b2b800413_PTMITLogoIcon.png"
                alt="PT. MITRA INTERNATIONAL TRANSAKSI"
                className="h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2B4192]/10 to-[#40B691]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <Link to={createPageUrl('Home')}>
              <button className="relative px-5 py-2.5 text-sm font-medium text-[#0B1020]/70 hover:text-[#2B4192] transition-all duration-300 group">
                Home
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2B4192] to-[#36A0A2] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </button>
            </Link>
            {navItems.map((item) => (
              <Link key={item.page} to={createPageUrl(item.page)}>
                <button className="relative px-5 py-2.5 text-sm font-medium text-[#0B1020]/70 hover:text-[#2B4192] transition-all duration-300 group">
                  {item.label}
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2B4192] to-[#36A0A2] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </button>
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <Link to={createPageUrl('Contact')}>
                <Button
                  variant="ghost"
                  className="text-[#2B4192] hover:text-[#2D368C] hover:bg-[#2B4192]/5 font-semibold"
                >
                  Contact
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button
                  className="bg-gradient-to-r from-[#2B4192] to-[#2D368C] hover:from-[#2D368C] hover:to-[#36A0A2] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Get Started
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
          <div className="lg:hidden bg-gradient-to-b from-white to-[#F6F9FC] border-t border-[#E6ECF2] shadow-2xl rounded-b-3xl overflow-hidden">
            <div className="px-4 py-6 space-y-1">
              <Link to={createPageUrl('Home')} onClick={() => setIsMobileMenuOpen(false)}>
                <button className="block w-full text-left px-5 py-3.5 text-sm font-medium text-[#0B1020] hover:bg-white hover:text-[#2B4192] rounded-xl transition-all">
                  Home
                </button>
              </Link>
              {navItems.map((item) => (
                <Link key={item.page} to={createPageUrl(item.page)} onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="block w-full text-left px-5 py-3.5 text-sm font-medium text-[#0B1020] hover:bg-white hover:text-[#2B4192] rounded-xl transition-all">
                    {item.label}
                  </button>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link to={createPageUrl('Contact')} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#2B4192] text-[#2B4192] hover:bg-[#2B4192] hover:text-white font-semibold"
                  >
                    Contact
                  </Button>
                </Link>
                <Link to={createPageUrl('Contact')} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-gradient-to-r from-[#2B4192] to-[#2D368C] hover:from-[#2D368C] hover:to-[#36A0A2] text-white font-semibold shadow-lg"
                  >
                    Get Started
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