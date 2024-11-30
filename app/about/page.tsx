// app/about/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const rotations = [
    'rotate-0',
    'rotate-[45deg]',
    'rotate-[-45deg]',
    'rotate-[90deg]',
    'rotate-[-90deg]',
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Pattern Layer */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-5 gap-2 -m-32">
          {[...Array(60)].map((_, index) => (
            <div
              key={index}
              className={`relative aspect-square ${
                index % 2 === 0 ? '-scale-x-100' : ''
              } ${rotations[index % rotations.length]} opacity-[0.6]`}>
              <Image
                src="/protea.png"
                alt=""
                fill
                className="object-contain scale-[4]"
                style={{ transform: index % 2 === 0 ? 'scaleX(-1)' : 'none' }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Heading Section */}
        <div className="text-center mt-8">
          <h1 className="text-[96px] font-bold text-[#B2639A] mb-4">
            Maria Kotze
          </h1>
          <h2 className="text-[35px] text-[#2A2035] font-medium mb-16">
            Landscape Artist And Technologist
          </h2>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-[922px] h-[595px] rounded-[10px] overflow-hidden">
            <Image
              src="/maria.png"
              alt="Maria Kotze"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Expandable Pink Section */}
        <div className="relative">
          <div
            className={`bg-[#B2639A] p-16 text-white transition-all duration-500 ease-in-out
              ${isExpanded ? 'h-auto' : 'h-[420px]'} overflow-hidden`}>
            <div className="max-w-[864px] mx-auto space-y-8">
              <p className="text-[21px] leading-relaxed">
                With 17 years of experience in the industry, I have had the
                privilege of working for three SALI-accredited landscape
                companies. Throughout my journey, I have immersed myself in all
                aspects of landscaping from crafting garden designs to engaging
                in environmental rehabilitation.
              </p>
              <p className="text-[21px] leading-relaxed">
                I have also successfully managed and implemented projects
                spanning a diverse range of styles, including wetlands,
                contemporary upmarket hotel rooftop gardens, and landscape
                wonders masterminded by esteemed Landscape Architects like
                Planning Partners and Terra Plus.
              </p>
              <p className="text-[21px] leading-relaxed">
                This background allows me to work with various styles to create
                a garden specifically tailored to the client's expectations.
              </p>

              <div
                className={`transition-opacity duration-500 ${
                  isExpanded ? 'opacity-100' : 'opacity-0 h-0'
                }`}>
                <div className="space-y-8">
                  <p className="text-[21px] leading-relaxed">
                    With a rich background in Textile and Graphic design, my
                    artistic spirit was ignited at a young age. Growing up on a
                    wine farm just outside Stellenbosch, where my father
                    passionately crafted wines, I developed an appreciation for
                    agriculture.
                  </p>
                  <p className="text-[21px] leading-relaxed">
                    My wanderlust led me to explore delightful destinations such
                    as Singapore, Thailand and the English countryside. These
                    journeys opened my eyes to the infinite possibilities that
                    nature offers to colour the garden canvas.
                  </p>
                  <p className="text-[21px] leading-relaxed">
                    If you can dream it, I can create it! My approach is to
                    blend functionality and beauty with botanical knowledge, to
                    create spectacular outdoor spaces.
                  </p>
                  <p className="text-[21px] leading-relaxed">
                    I chose to channel my interest into Landscape Design, from
                    2004 to 2006 I got my National Diploma in Landscape
                    Technology at Cape Peninsula University of technology.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expand/Collapse Arrow Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`absolute left-1/2 -translate-x-1/2 -bottom-6 w-12 h-12 
              bg-[#B2639A] rounded-full flex items-center justify-center 
              transition-transform duration-300 hover:scale-110 z-20
              ${isExpanded ? 'rotate-180' : ''}`}
            aria-label={isExpanded ? 'Show less' : 'Show more'}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
