// components/sections/testimonials.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-[80px] font-bold text-[#742365] mb-8">
            Testimonials
          </h2>
          <p className="text-[21px] text-[#2A2035] max-w-[864px] mx-auto font-medium mb-16">
            Explore testimonials from Maria's diverse garden landscape clients
            to see how she transforms outdoor spaces into stunning havens. Hear
            firsthand, authentic accounts of Maria's expertise, dedication, and
            personalized approach that consistently exceed expectations. Let
            these authentic testimonials inspire your own garden adventure with
            Maria today!
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col items-center gap-8 mb-16">
          {/* First Row */}
          <div className="flex gap-8">
            <div className="relative w-[532px] h-[532px] rounded-[30px] overflow-hidden">
              <Image
                src="/doris.png"
                alt="Doris Testimonial"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[532px] h-[532px] rounded-[30px] overflow-hidden">
              <Image
                src="/colin.png"
                alt="Colin Testimonial"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Second Row */}
          <div className="relative w-[532px] h-[532px] rounded-[30px] overflow-hidden">
            <Image
              src="/tony.png"
              alt="Tony Testimonial"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex h-[69px] px-12 items-center justify-center 
              rounded-[35px] border-2 border-[#742365] bg-transparent text-[21px] 
              font-bold text-[#742365] hover:bg-[#742365] hover:text-white
              transition-colors">
            Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
