// app/testimonials/page.tsx
'use client';

import Image from 'next/image';

const testimonials = [
  [
    { src: '/doris.png', alt: 'Doris Testimonial' },
    { src: '/exotic.png', alt: 'Exotic Testimonial' },
  ],
  [
    { src: '/clare.png', alt: 'Clare Testimonial' },
    { src: '/cobus.png', alt: 'Cobus Testimonial' },
  ],
];

export default function TestimonialsPage() {
  return (
    <main className="relative">
      {/* Background Flower - Positioned bottom right */}
      <div className="fixed bottom-0 right-0 w-[800px] h-[800px] z-0 pointer-events-none">
        <Image
          src="/pinkflowers.png"
          alt=""
          fill
          className="object-contain opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-2">
          <h1 className="text-[80px] font-bold text-[#742365] mb-8">
            Testimonials
          </h1>
          <p className="text-[21px] text-[#2A2035] max-w-[864px] mx-auto font-medium">
            Discover what our clients have to say about their experience working
            with Maria Kotze Gardens. Read firsthand accounts of our dedication
            to creating beautiful and functional outdoor spaces.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-12 space-y-8">
          {testimonials.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-8">
              {row.map((testimonial) => (
                <div
                  key={testimonial.alt}
                  className="relative w-1/2 aspect-square">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-4 mb-16">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full ${
                i === 0 ? 'bg-[#742365]' : 'bg-[#742365]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
