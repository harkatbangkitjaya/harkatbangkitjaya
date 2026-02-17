import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';
import { useTheme } from '../contexts/ThemeContext';

const Testimonials = () => {
  const { isDark } = useTheme();

  return (
    <section id="testimonials" className={`relative py-24 ${isDark ? 'bg-slate-800' : 'bg-gray-50'} overflow-hidden`}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className={`absolute top-10 right-10 w-80 h-80 ${isDark ? 'bg-orange-600/5' : 'bg-orange-600/10'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-10 left-10 w-96 h-96 ${isDark ? 'bg-orange-500/5' : 'bg-orange-500/10'} rounded-full blur-3xl`}></div>
        
        {/* Diagonal lines for depth */}
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.04]'}`}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="50" height="50">
                <path d="M-1,1 l2,-2 M0,50 l50,-50 M49,51 l2,-2" stroke="#ea580c" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 ${isDark ? 'bg-orange-600/20' : 'bg-orange-100'} border ${isDark ? 'border-orange-500/30' : 'border-orange-300'} rounded-full mb-4`}>
            <span className={`${isDark ? 'text-orange-400' : 'text-orange-600'} font-semibold text-sm`}>Testimoni</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>
            Apa Kata <span className="text-orange-500">Klien Kami</span>
          </h2>
          <p className="text-xl text-orange-500 font-semibold mb-4">
            Kepercayaan Mereka adalah Kebanggaan Kami
          </p>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-slate-600'} max-w-3xl mx-auto`}>
            Ratusan klien puas telah mempercayakan proyek mereka kepada kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`${isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white border-gray-200 shadow-lg'} backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10`}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="text-orange-500" size={40} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="text-orange-500 fill-orange-500" size={20} />
                  ))}
                </div>

                {/* Comment */}
                <p className={`${isDark ? 'text-gray-300' : 'text-slate-700'} text-lg leading-relaxed mb-6`}>
                  "{testimonial.comment}"
                </p>

                {/* Author Info */}
                <div className={`border-t ${isDark ? 'border-slate-700' : 'border-gray-200'} pt-6`}>
                  <p className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold text-lg`}>{testimonial.name}</p>
                  <p className="text-orange-500 font-medium">{testimonial.position}</p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
