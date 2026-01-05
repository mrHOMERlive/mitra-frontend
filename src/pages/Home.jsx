import React, { useEffect } from 'react';
import Navigation from '../components/landing/Navigation';
import Hero from '../components/landing/Hero';
import Solutions from '../components/landing/Solutions';
import HowItWorks from '../components/landing/HowItWorks';
import Industries from '../components/landing/Industries';
import WhyUs from '../components/landing/WhyUs';
import FAQ from '../components/landing/FAQ';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Solutions />
      <HowItWorks />
      <Industries />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}