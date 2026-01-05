import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2B4192] via-[#2D368C] to-[#36A0A2] opacity-[0.03]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2B4192] rounded-full mix-blend-multiply filter blur-3xl opacity-[0.08] animate-blob"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#36A0A2] rounded-full mix-blend-multiply filter blur-3xl opacity-[0.08] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-[#40B691] rounded-full mix-blend-multiply filter blur-3xl opacity-[0.08] animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[#2B4192]/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-[#36A0A2]/10 rounded-lg rotate-45 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-[#40B691]/10 to-[#288DAD]/10 rounded-full animate-float animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border-4 border-[#288DAD]/10 rounded-lg animate-float animation-delay-3000"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(43,65,146,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(43,65,146,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B1020] leading-tight mb-6">
            Global Trading & Logistics
            <br />
            <span className="bg-gradient-to-r from-[#2B4192] via-[#36A0A2] to-[#40B691] bg-clip-text text-transparent animate-gradient">
              Partner
            </span>
          </h1>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#2B4192] to-transparent rounded-full"></div>
            <div className="h-2 w-2 bg-[#40B691] rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#36A0A2] to-transparent rounded-full"></div>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#0B1020]/70 leading-relaxed mb-10 max-w-3xl mx-auto">
            Complete sourcing, distribution and fulfillment services built for every industry, delivered anywhere in the world
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#2B4192] hover:bg-[#2D368C] text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Request a quotation
            </Button>
            <Button
              onClick={openWhatsApp}
              size="lg"
              variant="outline"
              className="border-2 border-[#36A0A2] text-[#36A0A2] hover:bg-[#36A0A2] hover:text-white px-8 py-6 text-base font-semibold transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Talk on WhatsApp
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-6">
            {['Fast turnaround', 'Transparent pricing', 'Full compliance'].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#40B691]" />
                <span className="text-sm font-medium text-[#0B1020]/60">{item}</span>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-[#0B1020]/50 max-w-2xl mx-auto leading-relaxed">
            All quotations subject to product availability, supplier verification, and regulatory compliance
          </p>
        </div>
      </div>
    </section>
  );
}