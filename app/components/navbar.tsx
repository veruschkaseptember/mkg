import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/', active: true },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 transition-all duration-300
      bg-white/75 backdrop-blur-sm shadow-[0px_4px_10px_rgba(0,_0,_0,_0.07)]
      supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[148px] px-4">
        {/* Logo */}
        <Link href="/" className="relative w-[261px] h-[117px]">
          <Image
            src="/logo.png"
            alt="Maria Kotze Gardens"
            fill
            priority
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-14">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[21px] font-bold transition-colors
                ${
                  item.active
                    ? 'text-[#B2639A]'
                    : 'text-[#742365] hover:text-[#B2639A]'
                }`}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          className="h-[69px] px-8 rounded-[35px] bg-[#742365] text-[21px] font-bold text-[#FDFCFA]
            hover:bg-[#B2639A] transition-colors backdrop-blur-none">
          Get A Quote
        </button>
      </div>

      {/* Mobile Menu - Hidden on Desktop */}
      <div className="hidden">{/* We'll implement mobile menu later */}</div>
    </header>
  );
}
