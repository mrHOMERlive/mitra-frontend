import React from 'react';
import { Award, Shield, Clock, Eye, BarChart3, Lock } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Commitment to quality',
    description: 'Structured assessment and consistent standards—every application, every time.',
    color: '#2B4192'
  },
  {
    icon: Shield,
    title: 'Compliance-first approach',
    description: 'Processes designed around responsible lending and regulatory alignment.',
    color: '#36A0A2'
  },
  {
    icon: Clock,
    title: 'Reliable execution',
    description: 'Clear timelines, proactive updates, and disciplined follow-through.',
    color: '#288DAD'
  },
  {
    icon: Eye,
    title: 'Transparent partnership',
    description: 'You see the terms, logic, and steps—before you commit.',
    color: '#40B691'
  },
  {
    icon: BarChart3,
    title: 'Business-fit structuring',
    description: 'Financing aligned to your cycle (inventory, receivables, projects), not one-size-fits-all.',
    color: '#29887E'
  },
  {
    icon: Lock,
    title: 'Secure handling of data',
    description: 'Practical controls for confidentiality and secure document processing.',
    color: '#2B4192'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1020] mb-4">
            Why PT. MITRA INTERNATIONAL TRANSAKSI
          </h2>
          <p className="text-lg text-[#0B1020]/60 max-w-2xl mx-auto">
            Built on principles that protect your interests and power your growth
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#E6ECF2] h-full">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0B1020] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#0B1020]/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}