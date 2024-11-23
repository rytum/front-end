import React from 'react';
import { testimonials } from '../../Data/data';
import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section id='stories' className="text-gray-600 body-font overflow-hidden relative ">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 mx-auto">
        
        {/* Blurred overlay with text */}
        
        <div className="absolute inset-0  bg-opacity-20 backdrop-blur-md flex flex-col justify-center items-center z-10 p-4 sm:p-6 lg:p-8">
        {/* <div className="bg-white p-6 rounded-md flex flex-col justify-center items-center max-w-lg w-full"> */}

          <h1 className="text-center text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 lg:mb-16">
            What Our Users Say
          </h1>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium mb-4 sm:mb-6">
              Unshackle lawyers to focus on what matters. Strategy, counsel, and insight – unfettered by routine tasks.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
              Real People, Real Stories: Currently in Collection
            </p>
            </div>
          {/* </div> */}
        </div>
        
        {/* Testimonials */}
        <div className="relative z-0 flex flex-col text-center w-full mb-8 sm:mb-12">
          <div className="flex flex-wrap -m-2 sm:-m-4 mb-8 sm:mb-12">
            {testimonials.map((user, idx) => (
              <div className="p-2 sm:p-4 w-full md:w-1/2 lg:w-1/3" key={idx}>
                <div className="h-full text-center">
                  <Image
                    alt="testimonial"
                    height={100}
                    width={100}
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={user.image}
                  />
                  <p className="leading-relaxed text-sm sm:text-base">{user.testimonial}</p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 sm:mt-6 mb-2 sm:mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-xs sm:text-sm">{user.name}</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">{user.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}