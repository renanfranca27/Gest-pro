import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Oswald } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const beVietnam = Be_Vietnam_Pro({
  variable: '--font-be-vietnam',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Cest Pro',
  description: 'sistema de gestão empresarial',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${beVietnam.variable} ${oswald.variable} antialiased`}>
        <Header />
        {children}
        <Main />
        <Footer />
      </body>
    </html>
  );
}
