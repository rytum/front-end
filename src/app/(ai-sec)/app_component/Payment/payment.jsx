import React from "react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section id="pricing" className="text-gray-600 body-font overflow-hidden relative ">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 mx-auto">
        {/* Blurred overlay */}
        <div className="absolute inset-0  bg-opacity-50 backdrop-blur-md flex flex-col justify-center items-center z-10 p-4">
          <div className="bg-slate-50 p-6 rounded-md flex flex-col justify-center items-center max-w-lg w-full">
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl text-primary font-extrabold mb-4 sm:mb-6">
              Our Pricing Plan
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-900 mb-2 text-center">
              Consolidate your workflow on One platform
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 text-center">
              Secure || Integrated || Efficient
            </p>
            <Button className="py-2 px-6 rounded-lg text-sm sm:text-base">Sign Up Now</Button>
            <p className="mt-4 text-xs sm:text-sm text-gray-500">
              Claim Your Trial Premium Month Now
            </p>
          </div>
        </div>

        {/* Pricing content */}
        <div className="relative z-0 flex flex-col text-center w-full mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium title-font mb-2 sm:mb-4 text-gray-900">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-sm sm:text-base text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
          </p>
          <div className="flex justify-center mx-auto border-2 rounded overflow-hidden mt-4 sm:mt-6">
            <Button className="py-1 px-3 sm:px-4 text-sm sm:text-base">
              Monthly
            </Button>
            <Button className="py-1 px-3 sm:px-4 text-sm sm:text-base focus:outline-none">
              Annually
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap -m-2 sm:-m-4">
          {[
            { title: "START", price: "Free", highlight: false },
            { title: "PRO", price: "$38/mo", highlight: true },
            { title: "BUSINESS", price: "$56/mo", highlight: false },
            { title: "SPECIAL", price: "$72/mo", highlight: false }
          ].map((plan, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-4 w-full sm:w-1/2 lg:w-1/4"
            >
              <div
                className={`h-full p-4 sm:p-6 rounded-lg border-2 flex flex-col relative overflow-hidden`}
              >
                {plan.highlight && (
                  <span className="px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                )}
                <h2 className="text-xs sm:text-sm tracking-widest title-font mb-1 font-medium">
                  {plan.title}
                </h2>
                <h1 className="text-4xl sm:text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  {plan.price}
                </h1>
                <p className="flex items-center text-gray-600 mb-2 text-sm">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>

                <Button
                  className={`flex items-center mt-auto text-white ${
                    plan.highlight
                      ? "bg-indigo-500 hover:bg-indigo-600"
                      : "bg-gray-400 hover:bg-gray-500"
                  } border-0 py-2 px-4 w-full focus:outline-none rounded text-sm`}
                >
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}