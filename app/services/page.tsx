// app/services/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    image: '/garden1.png',
    icon: '/irrigation_icon.png',
    title: 'Irrigation Plan & New Installations',
    description:
      'The artificial process of applying controlled amounts of water to your garden.',
  },
  {
    image: '/garden2.png',
    icon: '/site_analysis_icon.png',
    title: 'Site Analysis, Research and Design',
    description:
      'A landscape design plan is a visual representation of an outdoor area using scaled dimensions. It includes natural and man-made elements that suit your needs and ideas.',
  },
  {
    image: '/garden3.png',
    icon: '/soft.png',
    title: 'Soft Landscaping',
    description:
      'Soft landscaping is done after hard landscaping as it is the organic element of the landscape. These include flowers, plants, compost, fertilizer, mulch, trees and shrubs.',
  },
  {
    image: '/garden4.png',
    icon: '/seasonal_garden_icon.svg',
    title: 'Seasonal Garden Maintenance',
    description:
      'Pruning and ad hoc clean-ups, fertilizing and topdressing of lawns. Seasonal consultations & training for your gardener.',
  },
  {
    image: '/garden5.png',
    icon: '/hard.png',
    title: 'Hard Landscaping',
    description:
      'Hard landscaping refers to the non-living elements of outdoor spaces, such as paths, walls and patios. It involves the use of materials like stone, wood, concrete and metal to create structure, define spaces, and enhance functionality in gardens.',
  },
];

export default function ServicesPage() {
  return (
    <main>
      <div className="text-center mb-16 mt-2">
        <h1 className="text-[80px] font-bold text-[#00543B] mb-8">Services</h1>
        <p className="text-[21px] text-[#2A2035] max-w-[864px] mx-auto font-medium mb-12">
          Maria specializes in providing tailored landscaping solutions to meet
          the unique requirements of residential, agricultural, and corporate
          landscapes.
        </p>
        <Link
          href="/contact"
          className="inline-flex h-[69px] px-12 items-center justify-center 
            rounded-[35px] border-2 border-[#00543B] bg-transparent text-[21px] 
            font-bold text-[#00543B] hover:bg-[#00543B] hover:text-white
            transition-colors">
          Get a Quote
        </Link>
      </div>

      {/* Services List */}
      <div>
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`flex ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
            {/* Image Block */}
            <div className="w-1/2">
              <div className="relative w-full aspect-square">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Block */}
            <div className="w-1/2 flex flex-col items-center justify-center text-center px-24">
              <div className="w-[70px] h-[50px] relative mb-6">
                <Image
                  src={service.icon}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-[21px] font-bold text-[#00543B] mb-4">
                {service.title}
              </h2>
              <p className="text-[15px] text-[#2A2035] max-w-[400px]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
