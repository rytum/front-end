
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-custom-gradient-bg">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start ">
          {/* Logo and description */}
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-4">
              <Image src="/assets/logo.svg" alt="Rytum Logo" width={200} height={50} className="w-auto h-12" />
            </Link>
            <p className="mt-2 text-sm text-gray-500">Empowering legal professionals with cutting-edge AI solutions.</p>
          </div>

          {/* Right side sections */}
          <div className="flex flex-wrap justify-end w-full md:w-2/3 space-y-8 md:space-y-0 md:space-x-8 pr-10">
            {/* Legal section */}
            <div className="w-full sm:w-auto">
              <h2 className="font-sans font-semibold text-gray-900 tracking-widest text-sm mb-3">LEGAL</h2>
              <nav className="list-none mb-4">
                <li className="mb-2">
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
                </li>
                <li className="mb-2">
                  <Link href="/terms&condition" className="text-gray-600 hover:text-gray-800">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-gray-600 hover:text-gray-800">Refund Policy</Link>
                </li>
              </nav>
            </div>

            {/* Contact Us section */}
            <div className="w-full sm:w-auto">
              <h2 className="font-sans font-semibold text-gray-900 tracking-widest text-sm mb-3">CONTACT US</h2>
              <nav className="list-none mb-4">
                <li className="mb-2">
                  <span className="text-gray-600">Address: </span>
                  <span className="text-gray-800">Noida, India</span>
                </li>
                <li className="mb-2">
                  <span className="text-gray-600">Phone: </span>
                  <a href="tel:+919643946577" className="text-gray-800 hover:text-gray-900">+91 9643946577</a>
                </li>
                <li>
                  <span className="text-gray-600">Email: </span>
                  <a href="mailto:contact@rytum.com" className="text-gray-800 hover:text-gray-900">contact@rytum.com</a>
                </li>
              </nav>
            </div>

            {/* Follow Us section */}
            <div className="w-full sm:w-auto">
              <h2 className="font-sans font-semibold text-gray-900 tracking-widest text-sm mb-3">FOLLOW US</h2>
              <span className="inline-flex">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="ml-3 text-gray-500 hover:text-gray-900">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="ml-3 text-gray-500 hover:text-gray-900">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="ml-3 text-gray-500 hover:text-gray-900">
                  <Linkedin className="w-5 h-5" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright notice */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
              @Vishal Engineering
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}