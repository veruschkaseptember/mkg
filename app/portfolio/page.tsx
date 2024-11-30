// app/portfolio/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    image: '/project1.png',
    title: 'Contemporary Garden Design',
    description:
      'A modern approach to outdoor living spaces with clean lines and sustainable features.',
    isStatic: false,
  },
  {
    id: 2,
    image: '/project2.png',
    title: 'Mediterranean Garden',
    description:
      'Drought-resistant plants and water features creating a serene atmosphere.',
    isStatic: false,
  },
  {
    id: 3,
    image: '/project3.png',
    title: 'Native Garden Design',
    description:
      'Incorporating indigenous plants to create a water-wise and beautiful landscape.',
    isStatic: false,
  },
  {
    id: 4,
    image: '/project4.png',
    title: 'Luxury Estate Garden',
    description:
      'Large-scale landscaping with premium materials and exotic plant selections.',
    isStatic: false,
  },
  {
    id: 5,
    image: '/project5.png',
    title: 'Courtyard Garden',
    description:
      'Intimate space maximization with vertical gardens and ambient lighting.',
    isStatic: false,
  },
  {
    id: 6,
    image: '/project6.png',
    title: 'Coastal Garden Design',
    description:
      'Salt-tolerant plants and wind-resistant design elements for seaside homes.',
    isStatic: false,
  },
  {
    id: 7,
    image: '/project7.png',
    title: 'Indigenous Garden',
    description:
      'Child-friendly spaces combined with adult entertainment areas.',
    isStatic: false,
  },
  {
    id: 8,
    image: '/project8.png',
    title: 'Formal Garden',
    description:
      'Professional landscaping for business environments and public spaces.',
    isStatic: false,
  },
  {
    id: 9,
    isStatic: true,
    title: 'Rooftop Garden',
    description:
      "A rooftop garden utilizes the extra space on a building's roof to create a green area, offering environmental benefits, aesthetic enhancement.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="pt-[80px] pb-24">
      <div className="max-w-[1440px] mx-auto px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[80px] font-bold text-[#742365] mb-8">
            Portfolio
          </h1>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-16 mb-24">
          {projects.map((project) => (
            <div key={project.id} className="group">
              {/* Card Container */}
              <div className="relative h-[400px] perspective">
                {project.isStatic ? (
                  // Static purple card for rooftop garden
                  <div className="w-full h-full rounded-[30px] bg-[#742365] p-8 flex items-center justify-center">
                    <p className="text-[21px] text-white text-center leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ) : (
                  // Flipping cards for other projects
                  <div className="relative w-full h-full transition-all duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden">
                      <div className="w-full h-full rounded-[30px] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <div className="w-full h-full rounded-[30px] bg-white p-8 flex items-center justify-center border-2 border-[#742365]">
                        <div className="text-center">
                          <h3 className="text-[21px] font-bold text-[#742365] mb-4">
                            {project.title}
                          </h3>
                          <p className="text-[16px] text-[#2A2035]">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Title Below Card - Only show for non-static cards */}
              {!project.isStatic && (
                <h3 className="text-[18px] font-medium text-[#2A2035] text-center mt-6">
                  {project.title}
                </h3>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="text-[21px] font-bold text-[#742365] hover:text-[#B2639A] transition-colors">
            Ready to Transform Your Outdoor Space? Get in Touch Today
          </Link>
        </div>
      </div>
    </main>
  );
}
