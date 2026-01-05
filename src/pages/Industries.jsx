import React from 'react';
import { Button } from '@/components/ui/button';
import { Package, Cpu, Cog, Car, Beaker, Heart, ShoppingBag, Building2, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '../components/landing/Navigation';
import Footer from '../components/landing/Footer';

const industries = [
  {
    icon: Package,
    title: 'Agricultural Commodities',
    description: 'Trading support for grains, oilseeds, and related inputs with practical quality documentation and shipment planning.',
    color: 'from-[#40B691] to-[#288DAD]'
  },
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Sourcing and distribution of components and finished goods with careful packaging and traceability expectations.',
    color: 'from-[#2B4192] to-[#36A0A2]'
  },
  {
    icon: Cog,
    title: 'Equipment & Industrial Machinery',
    description: 'Procurement support for industrial equipment, project cargo coordination, and export/import documentation workflows.',
    color: 'from-[#2D368C] to-[#288DAD]'
  },
  {
    icon: Car,
    title: 'Automotive & Transport',
    description: 'Parts sourcing (OEM/aftermarket), MRO items, and shipment coordination aligned to operational timelines.',
    color: 'from-[#36A0A2] to-[#40B691]'
  },
  {
    icon: Beaker,
    title: 'Industrial Chemicals & Materials',
    description: 'Trade coordination for industrial inputs with documentation discipline and compliant handling requirements.',
    color: 'from-[#288DAD] to-[#2B4192]'
  },
  {
    icon: Heart,
    title: 'Healthcare & Packaging',
    description: 'Packaging materials and related supplies where consistent specs and documentation are critical.',
    color: 'from-[#40B691] to-[#36A0A2]'
  },
  {
    icon: ShoppingBag,
    title: 'Consumer & Retail Supply',
    description: 'Assortment sourcing support for general merchandise with clear packing and delivery planning.',
    color: 'from-[#2B4192] to-[#40B691]'
  },
  {
    icon: Building2,
    title: 'Construction & Infrastructure Supply',
    description: 'Materials and equipment sourcing support with practical scheduling and document control.',
    color: 'from-[#2D368C] to-[#36A0A2]'
  }
];

export default function Industries() {
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
    window.open('https://wa.me/6281117796125', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#F6F9FC] to-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(43,65,146,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(43,65,146,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Animated Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#2B4192]/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#36A0A2]/10 rounded-lg rotate-45 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-[#40B691]/10 rounded-full animate-float animation-delay-4000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1020] mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg md:text-xl text-[#0B1020]/70 leading-relaxed">
              PT. MITRA INTERNATIONAL TRANSAKSI supports procurement and cross-border deliveries across a wide range of sectors. Each request is managed with the handling, lead times, and documentation your industry requires.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6F9FC] to-white"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-[#E6ECF2] hover:border-[#36A0A2]/30 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1020] mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-[#0B1020]/70 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B4192] via-[#2D368C] to-[#36A0A2]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need an industry-specific sourcing plan?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Send us your product list, target delivery location, and preferred Incoterms. We'll respond with a workable plan and quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-white text-[#2B4192] hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl transition-all group"
              >
                Request a quotation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              onClick={openWhatsApp}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#2B4192] font-semibold transition-all"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Talk on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}