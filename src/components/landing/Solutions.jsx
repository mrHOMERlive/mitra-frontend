import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, FileText, Package, Building2 } from 'lucide-react';

const solutions = [
  {
    icon: TrendingUp,
    title: 'International Trading',
    description: 'We source and purchase goods across every sector — from raw commodities to advanced technology components',
    color: '#2B4192'
  },
  {
    icon: FileText,
    title: 'Supply Chain Management',
    description: 'Demand planning, customs documentation and final-mile delivery optimized for efficiency and reliability',
    color: '#36A0A2'
  },
  {
    icon: Package,
    title: 'Integrated Logistics',
    description: 'Full-spectrum air, sea and ground freight — monitored, insured and regulatory-compliant',
    color: '#288DAD'
  },
  {
    icon: Building2,
    title: 'Distribution Network',
    description: 'Multi-channel distribution solutions with warehousing, order fulfillment, and inventory management',
    color: '#40B691'
  }
];

export default function Solutions() {
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
    <section id="solutions" className="py-20 lg:py-32 bg-[#F6F9FC] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#36A0A2]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2B4192]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1020] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[#0B1020]/60 max-w-2xl mx-auto">
            Comprehensive trade and logistics capabilities designed to support your business growth
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E6ECF2] group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${solution.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: solution.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#0B1020] mb-4">
                  {solution.title}
                </h3>
                <p className="text-[#0B1020]/70 leading-relaxed">
                  {solution.description}
                </p>
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
            Get a custom quote
          </Button>
        </div>
      </div>
    </section>
  );
}