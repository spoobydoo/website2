import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'George Lock - Social Media & Advertising Expert',
  description: 'Temple University Advertising graduate with extensive experience in social media management, content creation, and digital marketing strategies that drive engagement and growth.',
  keywords: 'George Lock, social media expert, advertising, Temple University, portfolio, content creation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
