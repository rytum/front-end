'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname,useRouter } from 'next/navigation'
export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/auth/login'); // Example: Navigate to the payment page
  };

  
  const isActive = (path) => pathname === path ? "bg-primary text-white" : "text-foreground hover:bg-primary hover:text-white"

  const smoothScrollTo = (target) => {
    const element = document.querySelector(target);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  const NavLinks = ({ mobile = false }) => (
    <div className={`flex ${mobile ? 'flex-col space-y-4' : 'flex-row space-x-2'}`}>
      {[
        { href: "#about", label: "About" },
        { href: "#features", label: "Services" },
        { href: "#blog", label: "Blog" },
        { href: "#pricing", label: "Pricing" },
        { href: "#stories", label: "Stories" },
        { href: "#contact", label: "Contact" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${isActive(link.href)} text-base sm:text-lg ${mobile ? 'w-full text-center' : ''} px-3 py-2 rounded-full transition-all`}
          onClick={() => {
            smoothScrollTo(link.href);
            if (mobile) setIsOpen(false);
          }}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 border-b">
      <div className="flex-1">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/logo.svg" alt="Logo" width={120} height={80} className="w-auto h-8 sm:h-10" />
        </Link>
      </div>
      
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <NavLinks />
      </div>
      
      <div className="flex-1 flex justify-end items-center space-x-4">
        <Button variant="outline" className="hidden sm:inline-flex text-sm sm:text-base bg-inherit hover:bg-primary hover:text-white"onClick={navigateToLogin}>
          Login
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] lg:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              <NavLinks mobile={true} />
              <Button className="w-full sm:hidden">
                Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}