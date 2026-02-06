import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageCircle, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    requestType: '',
    details: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Request submitted successfully!');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          requestType: '',
          details: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/6281117796126', '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
    {/* Radial Gradient Background */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#2B4192]/5 via-[#36A0A2]/5 to-transparent blur-3xl"></div>
    </div>

    {/* Floating Elements */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#40B691]/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#288DAD]/10 rounded-full blur-xl animate-float animation-delay-2000"></div>
    </div>

    {/* Contact Form Illustrations */}
    <div className="absolute top-20 right-10 opacity-5 animate-float">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <rect x="20" y="30" width="80" height="60" rx="10" stroke="#2B4192" strokeWidth="4" fill="none"/>
        <path d="M20 35 L60 65 L100 35" stroke="#36A0A2" strokeWidth="3" fill="none"/>
      </svg>
    </div>
    <div className="absolute bottom-20 left-10 opacity-5 animate-float animation-delay-3000">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="#40B691" strokeWidth="4" fill="none"/>
        <path d="M50 30 L50 70 M30 50 L70 50" stroke="#2B4192" strokeWidth="3"/>
      </svg>
    </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1020] mb-4">
            Request your personalized quotation
          </h2>
          <p className="text-lg text-[#0B1020]/60 max-w-2xl mx-auto">
            Tell us what you need. We'll respond with sourcing options and delivery plans.
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#F6F9FC] rounded-2xl p-8 lg:p-10 border border-[#E6ECF2] shadow-lg">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-[#40B691]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#40B691]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1020] mb-4">
                Thank you!
              </h3>
              <p className="text-[#0B1020]/70 max-w-md mx-auto">
                Thanks—our team will reach out to confirm details and request any required documents.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-[#0B1020] font-medium mb-2">
                  Full name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className="bg-white border-[#E6ECF2]"
                  placeholder="Your full name"
                />
              </div>

              {/* Email & Phone */}
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
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <Label htmlFor="company" className="text-[#0B1020] font-medium mb-2">
                  Company name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="bg-white border-[#E6ECF2]"
                  placeholder="Your company"
                />
              </div>

              {/* Request Type & Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="requestType" className="text-[#0B1020] font-medium mb-2">
                    Request type <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    required
                    value={formData.requestType}
                    onValueChange={(value) => handleChange('requestType', value)}
                  >
                    <SelectTrigger className="bg-white border-[#E6ECF2]">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sourcing">Product sourcing</SelectItem>
                      <SelectItem value="distribution">Distribution services</SelectItem>
                      <SelectItem value="brand">Brand-specific inquiry</SelectItem>
                      <SelectItem value="compliance">Compliance & documentation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="details" className="text-[#0B1020] font-medium mb-2">
                    Product / quantity (optional)
                  </Label>
                  <Input
                    id="details"
                    type="text"
                    value={formData.details}
                    onChange={(e) => handleChange('details', e.target.value)}
                    className="bg-white border-[#E6ECF2]"
                    placeholder="e.g. 500 units, industrial equipment"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-[#0B1020] font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="bg-white border-[#E6ECF2] resize-none"
                  placeholder="Include specifications, destination, and target delivery date..."
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="flex-1 bg-[#2B4192] hover:bg-[#2D368C] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send request
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  onClick={openWhatsApp}
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-[#36A0A2] text-[#36A0A2] hover:bg-[#36A0A2] hover:text-white font-semibold transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Text in WhatsApp
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}