import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  {
    icon: '/mdi_linkedin.png',
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: '/mdi_instagram.png',
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    icon: '/mdi_facebook.png',
    href: 'https://facebook.com',
    label: 'Facebook',
  },
];

const learnMoreLinks = [
  { label: 'The Process', href: '/process' },
  { label: 'Garden Ideas', href: '/ideas' },
  { label: 'Plants 101', href: '/plants' },
  { label: 'Articles', href: '/articles' },
];

export default function Footer() {
  return (
    <footer className="bg-[#35002b] text-[#fdfcfa] py-12">
      <div className="max-w-[1440px] mx-auto px-16 grid grid-cols-4 gap-8">
        {/* Contact Us Section */}
        <div className="space-y-8">
          <h3 className="text-[27px] font-bold">Contact Us</h3>
          <div className="space-y-6">
            <Link
              href="https://wa.me/+27823570557"
              className="flex items-center gap-3 hover:text-[#B2639A] transition-colors">
              <Image
                src="/whatsapp_icon.png"
                alt="WhatsApp"
                width={25}
                height={25}
              />
              <span className="text-[15px]">082 357 0557</span>
            </Link>
            <Link
              href="tel:+27823570557"
              className="flex items-center gap-3 hover:text-[#B2639A] transition-colors">
              <Image src="/phone_icon.png" alt="Phone" width={25} height={25} />
              <span className="text-[15px]">082 357 0557</span>
            </Link>
            <Link
              href="https://maps.google.com"
              className="flex items-center gap-3 hover:text-[#B2639A] transition-colors">
              <Image
                src="/location_icon.png"
                alt="Location"
                width={25}
                height={25}
              />
              <span className="text-[15px]">Somerset West, Western Cape</span>
            </Link>
            <Link
              href="mailto:maria@mkgardens.co.za"
              className="flex items-center gap-3 hover:text-[#B2639A] transition-colors">
              <Image src="/email_icon.png" alt="Email" width={25} height={25} />
              <span className="text-[15px]">maria@mkgardens.co.za</span>
            </Link>
          </div>
        </div>

        {/* Connect Section */}
        <div className="space-y-8">
          <h3 className="text-[27px] font-bold">Connect</h3>
          <Link
            href="/newsletter"
            className="text-[15px] hover:text-[#B2639A] transition-colors">
            Our Newsletter
          </Link>
          <div className="flex gap-4 mt-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="hover:opacity-80 transition-opacity">
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={25}
                  height={25}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Learn More Section */}
        <div className="space-y-8">
          <h3 className="text-[27px] font-bold">Learn More</h3>
          <div className="space-y-6">
            {learnMoreLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-[15px] font-medium hover:text-[#B2639A] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 self-end">
          <Link
            href="https://wa.me/+27823570557"
            className="flex h-[69px] w-[236px] items-center justify-center rounded-[35px] bg-[#742365] text-[21px] 
      font-bold hover:bg-[#B2639A] transition-colors">
            WhatsApp Me
          </Link>
          <Link
            href="tel:+27823570557"
            className="flex h-[69px] w-[169px] items-center justify-center rounded-[35px] bg-[#742365] text-[21px] 
      font-bold hover:bg-[#B2639A] transition-colors">
            Call Me
          </Link>
        </div>
      </div>
    </footer>
  );
}
