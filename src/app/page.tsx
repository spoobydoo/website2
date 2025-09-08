import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* Scroll Down Indicator */}
      <div className="flex justify-center mb-8">
        <Link 
          href="#about"
          className="animate-bounce flex flex-col items-center text-green-600 hover:text-green-700 transition-colors"
        >
          <span className="mb-2 text-sm font-medium">Scroll Down</span>
          <ArrowDown size={20} />
        </Link>
      </div>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <AboutSection />
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Work Experience</h2>
          <ExperienceSection />
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Me</h2>
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
