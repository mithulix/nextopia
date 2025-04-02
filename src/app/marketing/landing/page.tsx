import React from 'react';
import HeroSection from '@/components/marketing/Hero';
import FeatureCards from '@/components/marketing/FeatureCards';
import Testimonials from '@/components/marketing/Testimonials';
import CTA from '@/components/marketing/CTA';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <Testimonials />
      <CTA />
    </>
  );
}