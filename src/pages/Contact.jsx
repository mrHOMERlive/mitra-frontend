import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import Navigation from '../components/landing/Navigation';
import Footer from '../components/landing/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Request submitted successfully!');
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', details: '' });
      }, 3000);
    }, 1500);
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
              Contacts
            </h1>
            <p className="text-lg md:text-xl text-[#0B1020]/70 leading-relaxed">
              Send your request with product details and destination. We'll reply with next steps and a quotation structure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0B1020] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2B4192] to-[#36A0A2] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B1020] mb-1">Office Address</p>
                      <p className="text-sm text-[#0B1020]/70 leading-relaxed">
                        Sahid Sudirman Center, 56th Floor<br />
                        Jl. Jenderal Sudirman No. 86<br />
                        Karet Tengsin, Tanah Abang<br />
                        Jakarta Pusat, DKI Jakarta 10220
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#36A0A2] to-[#40B691] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B1020] mb-1">Email</p>
                      <a href="mailto:info@mitraintr.com" className="text-sm text-[#2B4192] hover:text-[#36A0A2] transition-colors">
                        info@mitraintr.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#288DAD] to-[#40B691] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B1020] mb-1">Phone / WhatsApp</p>
                      <a href="tel:+6281117796125" className="text-sm text-[#2B4192] hover:text-[#36A0A2] transition-colors">
                        +62 811 17796125
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D368C] to-[#288DAD] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B1020] mb-1">Business Hours</p>
                      <p className="text-sm text-[#0B1020]/70 leading-relaxed">
                        Mon–Fri: 09:00–18:00 (GMT+7)<br />
                        Sat: 09:00–13:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#F6F9FC] rounded-2xl p-8 lg:p-10 border border-[#E6ECF2] shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-[#40B691]/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#40B691]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1020] mb-4">Thank you!</h3>
                    <p className="text-[#0B1020]/70 max-w-md mx-auto">
                      We received your request and will respond with next steps shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-[#0B1020] font-medium mb-2">
                        Your name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="bg-white border-[#E6ECF2]"
                        placeholder="Full name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-[#0B1020] font-medium mb-2">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="bg-white border-[#E6ECF2]"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-[#0B1020] font-medium mb-2">
                          Phone / WhatsApp <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="bg-white border-[#E6ECF2]"
                          placeholder="+62 xxx"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="details" className="text-[#0B1020] font-medium mb-2">
                        Product / request details <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="details"
                        rows={6}
                        required
                        value={formData.details}
                        onChange={(e) => handleChange('details', e.target.value)}
                        className="bg-white border-[#E6ECF2] resize-none"
                        placeholder="Include quantity, destination, target date, Incoterms if known"
                      />
                    </div>

                    <p className="text-xs text-[#0B1020]/60 leading-relaxed">
                      The more specific the request, the faster we can quote: item name/spec, quantity, destination, and timing.
                    </p>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-[#2B4192] hover:bg-[#2D368C] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send request
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}