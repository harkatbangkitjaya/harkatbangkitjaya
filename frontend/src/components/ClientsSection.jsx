import React from 'react';
import { Building2, Hotel, ShoppingBag, Home, Landmark, Hospital, Building, Store } from 'lucide-react';

const ClientsSection = () => {
  // Client logos with icons
  const clients = [
    { id: 1, name: 'PT. Maju Bersama', icon: Building2, color: '#0066CC' },
    { id: 2, name: 'Grand Mall', icon: ShoppingBag, color: '#E31837' },
    { id: 3, name: 'Hotel Tasik Indah', icon: Hotel, color: '#6A1B9A' },
    { id: 4, name: 'Tasik Property', icon: Home, color: '#00897B' },
    { id: 5, name: 'Bank Mandiri', icon: Landmark, color: '#003D7A' },
    { id: 6, name: 'RS Umum', icon: Hospital, color: '#D32F2F' },
    { id: 7, name: 'Pemkot Tasikmalaya', icon: Building, color: '#F57C00' },
    { id: 8, name: 'Plaza Tasikmalaya', icon: Store, color: '#7B1FA2' }
  ];

  // Duplicate clients for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section className="relative py-16 bg-slate-800 overflow-hidden" data-testid="clients-section">
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
          {allClients.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 mx-6"
                data-testid={`client-logo-${client.id}`}
              >
                <div className="w-48 h-36 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 flex flex-col items-center justify-center p-4 group hover:scale-110 hover:bg-white/10">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300 grayscale group-hover:grayscale-0"
                    style={{ backgroundColor: `${client.color}20` }}
                  >
                    <IconComponent 
                      size={32} 
                      style={{ color: client.color }}
                      className="transition-all duration-300 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 text-center leading-tight">
                    {client.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
