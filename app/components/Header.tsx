import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[148px]">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-no-background-3.png"
              alt="Maria Kotze Gardens"
              width={261}
              height={117}
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#742365] font-bold text-xl hover:text-[#b2639a] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/quote"
            className="bg-[#742365] text-white px-8 py-3 rounded-full font-bold text-xl hover:bg-[#8c2b7a] transition-colors">
            Get A Quote
          </Link>
        </div>
      </div>
    </header>
  );
};
