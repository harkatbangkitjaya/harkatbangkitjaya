import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { projects, marketingCopy } from '../data/mock';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full mb-4">
            <span className="text-orange-400 font-semibold text-sm">{marketingCopy.portfolio.tagline}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {marketingCopy.portfolio.title}
          </h2>
          <p className="text-2xl text-orange-500 font-semibold mb-4">
            {marketingCopy.portfolio.subtitle}
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lihat berbagai proyek berkualitas yang telah kami selesaikan dengan standar terbaik dan kepuasan klien maksimal
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-slate-800/90 backdrop-blur-sm text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-slate-800/90 backdrop-blur-sm border-slate-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <Badge className="absolute top-4 right-4 bg-orange-600 hover:bg-orange-700 text-white">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-12 shadow-2xl shadow-orange-500/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            {marketingCopy.cta.primary}
          </h3>
          <p className="text-xl text-orange-100 mb-8">
            {marketingCopy.cta.secondary}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/6282289891300?text=Hallo%20PT.%20Harkat%20Bangkit%20Jaya%20%2C%20saya%20mau%20berkonsultasi', '_blank')}
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Konsultasi Gratis Sekarang
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
