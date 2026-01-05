import React from 'react';
import { MessageSquare, FileSearch, FileCheck, Coins } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell us what you need',
    description: 'Share your funding goal, timeline, and business profile.'
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Quick document review',
    description: 'We assess basic eligibility and request the minimum required documentation.'
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Terms proposal',
    description: 'Receive a clear proposal outlining amount, tenor, fees (if any), and repayment structure.'
  },
  {
    number: '04',
    icon: Coins,
    title: 'Disbursement & support',
    description: 'Once approved and signed, funding is processed and your account is supported through the lifecycle.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#2B4192]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#40B691]/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      {/* Connecting Line Background */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E6ECF2] to-transparent hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1020] mb-4">
            How it works
          </h2>
          <p className="text-lg text-[#0B1020]/60 max-w-2xl mx-auto mb-8">
            A straightforward process designed for clarity and speed
          </p>
          <p className="text-sm font-medium text-[#2B4192] max-w-xl mx-auto">
            We prioritize clarity: no confusing steps, no hidden surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#E6ECF2] to-transparent -translate-x-8 z-0" />
                )}

                <div className="relative bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-[#E6ECF2] h-full">
                  {/* Step Number */}
                  <div className="text-5xl font-bold text-[#2B4192]/10 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B4192] to-[#36A0A2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#0B1020] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#0B1020]/70 leading-relaxed">
                    {step.description}
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