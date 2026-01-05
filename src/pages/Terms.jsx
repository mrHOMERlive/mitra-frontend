import React from 'react';
import Navigation from '../components/landing/Navigation';
import Footer from '../components/landing/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1020] mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-[#0B1020]/60 mb-12">
            Effective date: January 1, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-[#0B1020]/80 leading-relaxed">
                By accessing this website, you agree to these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">Website content</h2>
              <p className="text-[#0B1020]/80 leading-relaxed">
                Information on this website is provided for general business purposes. It does not constitute a binding offer, guarantee, or commitment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">Quotations and availability</h2>
              <p className="text-[#0B1020]/80 leading-relaxed">
                Any quotation, lead time, or shipment plan is subject to product availability, supplier confirmation, logistics constraints, and compliance checks. Final terms are confirmed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">Compliance</h2>
              <p className="text-[#0B1020]/80 leading-relaxed">
                You are responsible for ensuring your intended purchase, import, or use complies with applicable laws and regulations in the relevant jurisdictions. We may decline requests that present compliance or operational risks.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">Limitation of liability</h2>
              <p className="text-[#0B1020]/80 leading-relaxed">
                To the maximum extent permitted by law, PT. MITRA INTERNATIONAL TRANSAKSI is not liable for indirect or consequential losses arising from the use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">Changes</h2>
              <p className="text-[#0B1020]/80 leading-relaxed">
                We may update these terms from time to time. Continued use of the website indicates acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B1020] mb-4">Contact</h2>
              <p className="text-[#0B1020]/80 leading-relaxed">
                Questions about these terms:{' '}
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