import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Scroll Down Indicator */}
      <div className="flex justify-center -mt-20 mb-12">
        <Link 
          href="#featured-work"
          className="animate-bounce flex flex-col items-center text-purple-300 hover:text-white transition-colors"
        >
          <span className="mb-2 text-sm font-light">Scroll Down</span>
          <ArrowDown size={20} />
        </Link>
      </div>
      
      {/* Featured Work Preview Section */}
      <section id="featured-work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4">
              Portfolio Highlights
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Featured Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my most successful social media accounts and marketing campaigns
            </p>
          </div>
          
          {/* Featured Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Instagram Growth Card */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white opacity-20">1M+</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                  <h3 className="text-white font-bold text-lg">Instagram Growth</h3>
                  <p className="text-purple-300 text-sm">@zuccccccccCCC</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">Grew account to over 1 million followers through targeted content strategy and engagement tactics.</p>
                <Link href="/experience" className="text-purple-400 font-medium flex items-center hover:text-purple-300 transition-colors">
                  View Details <ArrowDown size={16} className="ml-2 rotate-[-90deg]" />
                </Link>
              </div>
            </div>
            
            {/* Account Management Card */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white opacity-20">10+</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                  <h3 className="text-white font-bold text-lg">Account Portfolio</h3>
                  <p className="text-purple-300 text-sm">Multiple Platforms</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">Successfully managed and monetized multiple social media accounts across different niches.</p>
                <Link href="/experience" className="text-purple-400 font-medium flex items-center hover:text-purple-300 transition-colors">
                  View Details <ArrowDown size={16} className="ml-2 rotate-[-90deg]" />
                </Link>
              </div>
            </div>
            
            {/* Education Card */}
            <div className="glass-card rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-pink-500/20 to-orange-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/images/temple-diploma.png" 
                    alt="Temple University" 
                    className="w-full h-full object-cover opacity-40"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                  <h3 className="text-white font-bold text-lg">Educational Background</h3>
                  <p className="text-purple-300 text-sm">Temple University</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">BA in Advertising with focus on digital marketing and social media strategies.</p>
                <Link href="/about" className="text-purple-400 font-medium flex items-center hover:text-purple-300 transition-colors">
                  View Details <ArrowDown size={16} className="ml-2 rotate-[-90deg]" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* View All Work Button */}
          <div className="text-center mt-12">
            <Link href="/experience" className="button-primary inline-flex items-center">
              View Full Portfolio <ArrowDown size={16} className="ml-2 rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Brief About Preview */}
      <AboutSection />
    </div>
  );
}
