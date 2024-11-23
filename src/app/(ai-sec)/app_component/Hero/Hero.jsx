"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import ShimmerButton from "@/components/ui/shimmer-button";
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter();

  const navigateToRegister = () => {
    router.push('/auth/register'); // Example: Navigate to the payment page
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 ">
        <div className="flex-1 text-center lg:text-left px-10 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary">
            Unrivaled Legal Intelligence, At Your Fingertips
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground">
            Supercharge your legal research with Rytum&apos;s innovative Domain Specific AI!
            Our intuitive platform helps you quickly identify key facts, issues, statutes, and precedents,
            freeing up time for strategic thinking and exceptional client service.
          </p>
          {/* <div className="mt-6 sm:mt-8">
            <Button size="lg" variant="outline" className="rounded-xl text-lg px-6 sm:px-8 py-2 sm:py-3 bg-inherit hover:bg-primary hover:text-white text-foreground">
              Try Rytum
            </Button>
          </div> */}
              <div className="z-10mt-6 sm:mt-8">
      <ShimmerButton className="shadow-2xl" onClick={navigateToRegister}>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-gray-600 lg:text-lg">
        Try Rytum
        </span>
      </ShimmerButton>
    </div>

          

        </div>
        <div className="flex-1 w-full max-w-md lg:max-w-none">
           <DotLottieReact
             src="https://lottie.host/d7e0bc9f-02e6-4313-988d-f5d7c9db3bc0/36Hw2wAq87.json"
             loop
             autoplay
             className="w-auto h-auto"
           />
         </div>
      </div>
    </div>
  )
}
