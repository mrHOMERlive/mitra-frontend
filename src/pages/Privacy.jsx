import React from 'react';
import Navigation from '../components/landing/Navigation';
import Footer from '../components/landing/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1020] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#0B1020]/60 mb-12">
            Effective date: January 1, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-[#0B1020]/80 leading-relaxed">
                PT. MITRA INTERNATIONAL TRANSAKSI ("we", "our", "us") respects your privacy. This policy explains what information we collect, how we use it, and the choices you have.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">Information we collect</h2>
              <ul className="space-y-2 text-[#0B1020]/80 leading-relaxed list-disc pl-6">
                <li>Contact details you provide (such as name, email, phone/WhatsApp).</li>
                <li>Business and request details you submit (product lists, quantities, destinations, timelines).</li>
                <li>Basic technical data (such as browser/device information and approximate location derived from IP) for security and performance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">How we use information</h2>
              <ul className="space-y-2 text-[#0B1020]/80 leading-relaxed list-disc pl-6">
                <li>To respond to inquiries, prepare quotations, and coordinate trade-related requests.</li>
                <li>To communicate about ongoing discussions, documentation needs, and shipment milestones (where applicable).</li>
                <li>To improve our website and protect it from abuse.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">Sharing</h2>
              <p className="text-[#0B1020]/80 leading-relaxed">
                We may share information with service providers involved in communications, hosting, and operational support. We may also share information where required by applicable law or to protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">Retention</h2>
              <p className="text-[#0B1020]/80 leading-relaxed">
                We retain information only as long as needed for the purposes above, or as required by applicable obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">Your choices</h2>
              <p className="text-[#0B1020]/80 leading-relaxed">
                You may request access, correction, or deletion of your personal information, subject to applicable requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">Contact</h2>
              <p className="text-[#0B1020]/80 leading-relaxed">
                For privacy-related requests, contact:{' '}
                <a href="mailto:info@mitraintr.com" className="text-[#2B4192] hover:text-[#36A0A2] transition-colors">
                  info@mitraintr.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}