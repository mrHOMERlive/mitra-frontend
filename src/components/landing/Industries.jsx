import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Plane, 
  Factory, 
  Store, 
  Truck, 
  Wheat, 
  HardHat, 
  Stethoscope 
} from 'lucide-react';

const industries = [
  { icon: Wheat, name: 'Agricultural Commodities', color: '#2B4192' },
  { icon: ShoppingCart, name: 'Electronics & Components', color: '#36A0A2' },
  { icon: Plane, name: 'Fuels & Lubricants', color: '#288DAD' },
  { icon: Factory, name: 'Equipment & Machinery', color: '#40B691' },
  { icon: Store, name: 'Industrial Chemicals', color: '#29887E' },
  { icon: Truck, name: 'Automotive & Transport', color: '#2B4192' },
  { icon: Stethoscope, name: 'Pharmaceuticals & Healthcare', color: '#36A0A2' },
  { icon: HardHat, name: 'Construction Materials', color: '#288DAD' }
];

export default function Industries() {
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
    <section id="industries" className="py-20 lg:py-32 bg-[#F6F9FC] relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-1/4 w-64 h-64 border-2 border-[#36A0A2]/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 border-2 border-[#2B4192]/20 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#288DAD]/5 via-transparent to-[#40B691]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1020] mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-[#0B1020]/60 max-w-2xl mx-auto">
            We leverage our worldwide sourcing and logistics infrastructure to serve a growing range of industries
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-[#E6ECF2] group cursor-pointer"
              >
                <div
                  className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${industry.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: industry.color }} />
                </div>
                <h3 className="text-sm font-semibold text-[#0B1020] leading-snug">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* CTA Line */}
        <div className="bg-white rounded-2xl p-8 border border-[#E6ECF2] shadow-sm">
          <div className="text-center">
            <p className="text-base text-[#0B1020]/70 mb-6 max-w-3xl mx-auto">
              Ready to explore sector-specific solutions or request a detailed quotation for your requirements?
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#36A0A2] hover:bg-[#29887E] text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get a quotation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}