import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    icon: '/irrigation_icon.png',
    title: 'Irrigation Plan & New Installations',
    description:
      'The artificial process of applying controlled amounts of water to your garden.',
  },
  {
    icon: '/site_analysis_icon.png',
    title: 'Site Analysis, Research and Design',
    description:
      'A landscape design plan is a visual representation of an outdoor area using scaled dimensions. It includes natural and man-made elements that suit your needs and ideas.',
  },
  {
    icon: '/soft.png',
    title: 'Soft Landscaping',
    description:
      'Soft landscaping is done after hard landscaping as it is the organic element of the landscape. These include flowers, plants, compost, fertilizer, mulch, trees and shrubs.',
  },
  {
    icon: '/seasonal_garden_icon.svg',
    title: 'Seasonal Garden Maintenance',
    description:
      'Pruning and ad hoc clean-ups, fertilizing and topdressing of lawns. Seasonal consultations & training for your gardener.',
  },
  {
    icon: '/hard.png',
    title: 'Hard Landscaping',
    description:
      'Hard landscaping refers to the non-living elements of outdoor spaces, such as paths, walls and patios. It involves the use of materials like stone, wood, concrete and metal to create structure, define spaces, and enhance functionality in gardens.',
  },
];

export default function PopularServices() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/plant 2 services.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-[1440px] mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-[80px] font-bold text-[#00543B] mb-8">
            Popular Services
          </h2>
          <p className="text-[21px] text-[#2A2035] max-w-[864px] mx-auto font-medium">
            At Maria Kotze Gardens, I offer a unique blend of hands-on
            involvement, versatile design expertise, and transparent, ethical
            pricing. Additionally, I take full responsibility for overseeing
            reliable subcontractors who handle the implementation of hard
            landscaping elements, ensuring a seamless and stunning final result.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-12 mb-16">
          {/* First Row - Centered */}
          <div className="flex justify-center">
            <div className="flex items-start gap-4 max-w-[500px]">
              <div className="w-[70px] h-[50px] relative flex-shrink-0">
                <Image
                  src={services[0].icon}
                  alt={services[0].title}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-[21px] font-bold text-[#00543B] mb-2">
                  {services[0].title}
                </h3>
                <p className="text-[15px] text-[#2A2035]">
                  {services[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-12">
            {[services[1], services[2]].map((service) => (
              <div key={service.title} className="flex items-start gap-4">
                <div className="w-[70px] h-[50px] relative flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[21px] font-bold text-[#00543B] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-[#2A2035]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-2 gap-12">
            {[services[3], services[4]].map((service) => (
              <div key={service.title} className="flex items-start gap-4">
                <div className="w-[70px] h-[50px] relative flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[21px] font-bold text-[#00543B] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-[#2A2035]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex h-[69px] px-12 items-center justify-center 
              rounded-[35px] border-2 border-[#00543B] bg-transparent text-[21px] 
              font-bold text-[#00543B] hover:bg-[#00543B] hover:text-light
              transition-colors">
            Services
          </Link>
        </div>
      </div>
    </section>
  );
}
