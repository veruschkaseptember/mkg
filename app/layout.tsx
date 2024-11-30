import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#742365',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mkgardens.co.za'),
  title: {
    default: 'Maria Kotze Gardens | Professional Garden Design & Landscaping',
    template: '%s | Maria Kotze Gardens',
  },
  description:
    'Professional garden design and landscaping services in the Western Cape. Creating beautiful outdoor spaces with expert landscape artistry.',
  keywords: [
    'landscape design',
    'garden design',
    'landscaping',
    'Western Cape',
    'Somerset West',
    'garden maintenance',
    'outdoor spaces',
    'landscape architecture',
  ],
  authors: [{ name: 'Maria Kotze' }],
  creator: 'Maria Kotze',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://mkgardens.co.za',
    title: 'Maria Kotze Gardens',
    description: 'Professional Garden Design & Landscaping Services',
    siteName: 'Maria Kotze Gardens',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} scroll-smooth`}
      suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-white antialiased">
        <Navbar />
        <main className="flex-grow pt-[148px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
