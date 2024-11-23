"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { terms } from '../Data/data';




export default function TermsCondition() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prev => ({ ...prev, [index]: !prev[index] }));
  };

  

  return (
    <main className="flex flex-col items-center w-full min-h-screen py-12 space-y-4 text-gray-900">
      <div className="container px-4 md:px-6 space-y-8 max-w-4xl">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Terms an Conditions
          </h1>
          <p className="text-xl">
            Last updated: October 10, 2024
          </p>
        </header>
        <div className="prose dark:prose-invert max-w-none">
            <h1 className='mb-6 font-extrabold text-2xl'>Terms and Conditons</h1>
         
          <div className="space-y-6">
            {terms.map((section, index) => (
              <div key={index} className="flex gap-4 rounded-lg overflow-hidden">
                <span>{section.id}</span>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <span>{section.content}</span>
              </div>
            ))}
          </div>
        </div>
        <footer className="text-center text-gray-500 dark:text-gray-400 pt-8">
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <address className="mt-2 not-italic">
            <p>Rytum</p>
            <p>Noida, India</p>
            <p>Email: <a href="mailto:contact@rytum.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@rytum.com</a></p>
          </address>
        </footer>
      </div>
    </main>
  );
}