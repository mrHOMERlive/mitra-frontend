import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, FileText, Globe, Package, MessageSquare, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '../components/landing/Navigation';
import Footer from '../components/landing/Footer';

const sections = [
  {
    icon: Shield,
    title: 'Counterparty & Transaction Checks',
    description: 'Basic customer/supplier verification and consistency checks appropriate for international trade operations.'
  },
  {
    icon: FileText,
    title: 'Trade Documentation',
    description: 'Support for preparing and controlling typical documents such as commercial invoices, packing lists, certificates (where applicable), and shipment references.'
  },
  {
    icon: Globe,
    title: 'Export/Import Requirements',
    description: 'Coordination support around controlled goods, special handling, or additional declarations when required by the destination or product category.'
  },
  {
    icon: Package,
    title: 'Handling & Packaging Discipline',
    description: 'Packaging, labeling, and shipment readiness aligned to the nature of the goods and transport mode.'
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Milestones, document status, and shipment updates communicated in a structured way.'
  }
];

export default function Compliance() {
  const openWhatsApp = () => {
    window.open('https://wa.me/6281117796125', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#F6F9FC] to-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(43,65,146,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(43,65,146,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1020] mb-6">
              Compliance & Documentation
            </h1>
            <p className="text-lg md:text-xl text-[#0B1020]/70 leading-relaxed">
              Cross-border trade works when documents, declarations, and counterparties are handled carefully. We keep the process practical and disciplined—without adding unnecessary friction.
            </p>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6F9FC] to-white"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-[#E6ECF2] hover:border-[#36A0A2]/30 hover:shadow-xl transition-all duration-300 flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2B4192] to-[#36A0A2] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1020] mb-3">
                      {section.title}
                    </h3>
                    <p className="text-[#0B1020]/70 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compliance Note */}
          <div className="mt-12 bg-[#F6F9FC] rounded-xl p-6 border border-[#E6ECF2]">
            <p className="text-sm text-[#0B1020]/60 leading-relaxed">
              <strong className="text-[#0B1020]">Compliance note:</strong> PT. MITRA INTERNATIONAL TRANSAKSI supports trade coordination and documentation workflows. Final import/export eligibility depends on product classification, local rules, and required permits in the relevant jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B4192] via-[#2D368C] to-[#36A0A2]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            If your shipment needs strict paperwork, tell us upfront
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Share the product category, destination, and any known documentation requirements. We'll build the plan around them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-white text-[#2B4192] hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl transition-all group"
              >
                Contact
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2B4192] font-semibold transition-all"
              >
                Request a quotation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}