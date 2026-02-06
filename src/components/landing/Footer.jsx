import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Footer() {
  return (
    <footer className="bg-[#0B1020] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              PT. MITRA INTERNATIONAL TRANSAKSI
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              General trading, sourcing, distribution, and logistics coordination for cross-border trade
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#36A0A2] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/70 leading-relaxed">
                  Sahid Sudirman Center, 56th Floor<br />
                  Jl. Jenderal Sudirman No. 86<br />
                  Karet Tengsin, Tanah Abang<br />
                  Jakarta Pusat, DKI Jakarta 10220
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#36A0A2] flex-shrink-0" />
                <a href="mailto:info@mitraintr.com" className="text-sm text-white/70 hover:text-[#36A0A2] transition-colors">
                  info@mitraintr.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#36A0A2] flex-shrink-0" />
                <a href="tel:+6281117796126" className="text-sm text-white/70 hover:text-[#36A0A2] transition-colors">
                  +62 811 17796126
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Business Hours</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Compliance Disclaimer */}
          <div className="mb-6">
            <p className="text-xs text-white/50 leading-relaxed max-w-4xl">
              <strong>Disclaimer:</strong> All quotations and delivery plans are subject to product availability, supplier confirmation, logistics constraints, and compliance checks. Terms and availability may vary based on product classification, destination, and operational requirements. PT. MITRA INTERNATIONAL TRANSAKSI reserves the right to decline requests or modify terms at its discretion. This website does not constitute a binding offer or guarantee.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} PT. MITRA INTERNATIONAL TRANSAKSI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <Link to={createPageUrl('Privacy')} className="hover:text-[#36A0A2] transition-colors">Privacy Policy</Link>
              <Link to={createPageUrl('Terms')} className="hover:text-[#36A0A2] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}