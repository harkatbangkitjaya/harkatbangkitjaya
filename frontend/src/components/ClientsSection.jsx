import React from 'react';

const ClientsSection = () => {
  // Client dengan SVG placeholders untuk logo
  const clients = [
    { id: 1, name: 'PT. Maju Bersama', color: '#0066CC' },
    { id: 2, name: 'Grand Mall', color: '#E31837' },
    { id: 3, name: 'Hotel Tasik Indah', color: '#6A1B9A' },
    { id: 4, name: 'Tasik Property', color: '#00897B' },
    { id: 5, name: 'Bank Mandiri', color: '#003D7A' },
    { id: 6, name: 'RS Umum', color: '#D32F2F' },
    { id: 7, name: 'Pemkot Tasikmalaya', color: '#F57C00' },
    { id: 8, name: 'Plaza Tasikmalaya', color: '#7B1FA2' }
  ];

  // Duplicate clients for seamless loop
  const allClients = [...clients, ...clients];

  // Generate simple logo SVG
  const generateLogo = (name, color) => {
    const initials = name.split(' ').map(word => word[0]).join('').substring(0, 2);
    return (
      <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="8" fill={color} className="logo-bg transition-all duration-300"/>
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="24" fontWeight="bold" className="logo-text">
          {initials}
        </text>
      </svg>
    );
  };

  return (
    <section className="relative py-16 bg-slate-800 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Klien <span className="text-orange-500">Kami</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Dipercaya oleh perusahaan terkemuka di Indonesia
          </p>
        </div>
      </div>

      {/* Animated Logo Slider */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-800 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-800 to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll-infinite">
          {allClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 mx-6"
            >
              <div className="w-44 h-32 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 flex items-center justify-center p-6 group hover:scale-110 hover:bg-white/10 logo-container">
                <div className="grayscale-[100%] group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                  {generateLogo(client.name, client.color)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logo-container:hover .logo-bg {
          filter: brightness(1.1);
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
