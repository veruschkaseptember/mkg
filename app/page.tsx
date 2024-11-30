import Link from 'next/link';
import Image from 'next/image';
import PopularServices from './components/sections/popular-services';
import PortfolioIntro from './components/sections/portfolio-intro';
import Testimonials from './components/sections/testimonials';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[1074px] w-full mt-[-148px]">
        <Image
          src="/hero_image.png"
          alt="Maria Kotze Gardens Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/25" />

        <div className="relative z-10 mx-auto max-w-[1440px] h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-bold mb-4">
            <span className="block text-[96px] text-primary">
              Maria Kotze Gardens
            </span>
            <span className="block text-[48px] text-[#2A2035]">
              Landscape Artist
            </span>
          </h1>

          <div className="flex gap-8 mt-12">
            <Link
              href="tel:+27823570557"
              className="h-[69px] px-8 flex items-center gap-3 
                rounded-[35px] bg-secondary text-[21px] font-bold text-light
                hover:bg-primary transition-colors">
              <Image src="/phone_icon.png" alt="Phone" width={25} height={25} />
              082 357 0557
            </Link>
            <Link
              href="mailto:maria@mkgardens.co.za"
              className="h-[69px] px-8 flex items-center gap-3
                rounded-[35px] bg-secondary text-[21px] font-bold text-light
                hover:bg-primary transition-colors">
              <Image src="/email_icon.png" alt="Email" width={25} height={25} />
              maria@mkgardens.co.za
            </Link>
            <Link
              href="https://wa.me/+27823570557"
              className="h-[69px] px-8 flex items-center gap-3
                rounded-[35px] bg-secondary text-[21px] font-bold text-light
                hover:bg-primary transition-colors">
              <Image
                src="/whatsapp_icon.png"
                alt="WhatsApp"
                width={25}
                height={25}
              />
              082 357 0557
            </Link>
          </div>
        </div>
      </section>
      {/* Popular Services Section */}
      <PopularServices />
      <PortfolioIntro />
      <Testimonials />
    </>
  );
}
