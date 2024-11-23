"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Hero from './app_component/Hero/Hero';
import FeatureCards from './app_component/features/Feature';
import BlogSection from './app_component/Blog-section/Blog';
import TestimonialSection from './app_component/Testimonials/testimonial';
import Contact from './app_component/Contact/Contact';
export default function Page() {

  return (
    <main>
      <Hero />
      <FeatureCards />
      <BlogSection />
      <TestimonialSection />
      <Contact />
    </main>
  );
}
