import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Shield, GitCompare, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '../components/landing/Navigation';
import Footer from '../components/landing/Footer';

const features = [
  {
    icon: Search,
    title: 'How to request',
    description: 'Provide brand (if any), part number/specification, quantity, destination, and target delivery date.'
  },
  {
    icon: Shield,
    title: 'Sourcing approach',
    description: 'Where authorization or controlled distribution applies, we prioritize compliant sourcing routes and clear documentation.'
  },
  {
    icon: GitCompare,
    title: 'Alternatives',
    description: 'If exact items are constrained, we can propose equivalent specifications for review (subject to your approval).'
  }
];

export default function Brands() {
  const openWhatsApp = () => {
    window.open('https://wa.me/6281117796125', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#F6F9FC] to-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(43,65,146,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(43,65,146,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Decorative Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border-4 border-[#2B4192]/10 rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border-4 border-[#36A0A2]/10 rounded-lg rotate-45 animate-float animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1020] mb-6">
              Brands We Serve
            </h1>
            <p className="text-lg md:text-xl text-[#0B1020]/70 leading-relaxed">
              We work across a broad supplier network spanning multiple sectors. If you have a brand, part number, or technical equivalent, we will source options aligned to availability and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6F9FC] to-white"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-[#E6ECF2] hover:border-[#36A0A2]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2B4192] to-[#36A0A2] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1020] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#0B1020]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B4192] via-[#2D368C] to-[#36A0A2]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a specific brand or part number?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Send your request and we'll respond with sourcing options and lead times.
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