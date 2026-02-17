import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1748956628042-b73331e0b479"
          alt="Construction Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-orange-400 font-semibold text-sm">Kontraktor Terpercaya Sejak 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Solusi Konstruksi <span className="text-orange-500">Profesional</span> untuk Masa Depan
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            PT. Harkat Bangkit Jaya menyediakan layanan konstruksi, pemeliharaan bangunan, dan desain arsitektur dengan standar kualitas terbaik.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap gap-4 mb-10">
            {['Kualitas Terjamin', 'Tim Profesional', 'Harga Kompetitif'].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-200 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => window.open(companyInfo.whatsapp, '_blank')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/50"
            >
              <Phone className="mr-2" size={20} />
              Konsultasi Gratis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              <Mail className="mr-2" size={20} />
              Kirim Email
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-700">
            {[
              { number: '100+', label: 'Proyek' },
              { number: '50+', label: 'Klien' },
              { number: '100%', label: 'Kepuasan' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
