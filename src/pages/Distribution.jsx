import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, FileCheck, Package, Plane, FileText, Wrench, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '../components/landing/Navigation';
import Footer from '../components/landing/Footer';

const services = [
  {
    icon: Search,
    title: 'Procurement & Sourcing',
    description: 'Supplier outreach, quotation comparison, specification alignment, and order placement based on your requirements and budget.',
    color: 'from-[#2B4192] to-[#36A0A2]'
  },
  {
    icon: FileCheck,
    title: 'Quality & Documentation Control',
    description: 'Practical checks for packaging, labeling, and document completeness (commercial invoice, packing list, certificates where applicable).',
    color: 'from-[#36A0A2] to-[#40B691]'
  },
  {
    icon: Package,
    title: 'Consolidation & Fulfillment',
    description: 'Consolidation planning, kitting, and packaging coordination to reduce shipment complexity and improve receiving.',
    color: 'from-[#288DAD] to-[#2B4192]'
  },
  {
    icon: Plane,
    title: 'Freight Coordination',
    description: 'Air, sea, and land freight options coordinated to match lead times and cost priorities. Tracking and shipment milestones shared clearly.',
    color: 'from-[#2D368C] to-[#36A0A2]'
  },
  {
    icon: FileText,
    title: 'Customs & Clearance Support',
    description: 'Document preparation support and coordination with brokers to reduce avoidable delays.',
    color: 'from-[#40B691] to-[#288DAD]'
  },
  {
    icon: Wrench,
    title: 'Aftermarket & Spare Parts Supply',
    description: 'Support for repeat orders, replacement parts, and service-related shipments with consistent documentation routines.',
    color: 'from-[#2B4192] to-[#40B691]'
  }
];

export default function Distribution() {
  const openWhatsApp = () => {
    window.open('https://wa.me/6281117796125', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#F6F9FC] to-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(43,65,146,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(43,65,146,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Animated Visual Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#2B4192]/10 to-[#36A0A2]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#40B691]/10 rounded-full blur-2xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1020] mb-6">
              Distribution Services
            </h1>
            <p className="text-lg md:text-xl text-[#0B1020]/70 leading-relaxed">
              We simplify procurement, consolidation, and delivery—so you receive the right goods, where you need them, with clear documentation and predictable communication.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6F9FC] to-white"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-[#E6ECF2] hover:border-[#36A0A2]/30 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1020] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#0B1020]/70 leading-relaxed">
                    {service.description}
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
            Share your BOM or purchase list
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Send item names, quantities, target destination, and timing. We'll propose sourcing routes and shipment options.
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
              Contact
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}