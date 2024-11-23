"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { sections } from '../Data/data';
export default function TermsOfService() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prev => ({ ...prev, [index]: !prev[index] }));
  };

  

  return (
    <main className="flex flex-col items-center w-full min-h-screen py-12 space-y-4 text-gray-900">
      <div className="container px-4 md:px-6 space-y-8 max-w-4xl">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Terms of Service
          </h1>
          <p className="text-xl">
            Last updated: October 10, 2024
          </p>
        </header>
        <div className="prose dark:prose-invert max-w-none">
          <p className="lead">
            Our Terms of Service explain how Vishal Engineering and its
            Affiliates and subsidiaries provide services to you, including through our websites
            (such as Rytum.in), the "Rytum AI Platform", and our marketing and sales activities
            (collectively, our "Services"). It also sets out important information about your rights
            and responsibilities when using our Services.
          </p>
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="border  rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex justify-between items-center w-full p-4 text-left"
                >
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  {expandedSections[index] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                {expandedSections[index] && (
                  <div className="p-4 bg-inherit ">
                    <p>{section.content}</p>
                  </div>
                )}
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