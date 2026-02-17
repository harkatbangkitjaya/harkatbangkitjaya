import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-slate-800 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        
        {/* Diagonal lines for depth */}
        <div className="absolute inset-0 opacity-[0.02]">
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
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full mb-4">
            <span className="text-orange-400 font-semibold text-sm">Testimoni</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Apa Kata <span className="text-orange-500">Klien Kami</span>
          </h2>
          <p className="text-xl text-orange-500 font-semibold mb-4">
            Kepercayaan Mereka adalah Kebanggaan Kami
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ratusan klien puas telah mempercayakan proyek mereka kepada kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-slate-900/90 backdrop-blur-sm border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10"
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
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  "{testimonial.comment}"
                </p>

                {/* Author Info */}
                <div className="border-t border-slate-700 pt-6">
                  <p className="text-white font-bold text-lg">{testimonial.name}</p>
                  <p className="text-orange-500 font-medium">{testimonial.position}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
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
