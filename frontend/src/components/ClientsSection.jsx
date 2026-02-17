import React from 'react';

const ClientsSection = () => {
  // Client logos - PT Harkat Bangkit Jaya actual clients
  const clients = [
    { 
      id: 1, 
      name: 'Klien 1', 
      logo: 'https://nemuftsdmjzkzcygkjpg.supabase.co/storage/v1/object/public/assets-devaq/pt-harkat-bangkit-jaya/1.png'
    },
    { 
      id: 2, 
      name: 'Klien 2', 
      logo: 'https://nemuftsdmjzkzcygkjpg.supabase.co/storage/v1/object/public/assets-devaq/pt-harkat-bangkit-jaya/2.png'
    },
    { 
      id: 3, 
      name: 'Klien 3', 
      logo: 'https://nemuftsdmjzkzcygkjpg.supabase.co/storage/v1/object/public/assets-devaq/pt-harkat-bangkit-jaya/3.png'
    },
    { 
      id: 4, 
      name: 'Klien 4', 
      logo: 'https://nemuftsdmjzkzcygkjpg.supabase.co/storage/v1/object/public/assets-devaq/pt-harkat-bangkit-jaya/4.png'
    },
    { 
      id: 5, 
      name: 'Klien 5', 
      logo: 'https://nemuftsdmjzkzcygkjpg.supabase.co/storage/v1/object/public/assets-devaq/pt-harkat-bangkit-jaya/5.png'
    },
    { 
      id: 6, 
      name: 'Klien 6', 
      logo: 'https://nemuftsdmjzkzcygkjpg.supabase.co/storage/v1/object/public/assets-devaq/pt-harkat-bangkit-jaya/6.png'
    },
    { 
      id: 7, 
      name: 'Klien 7', 
      logo: 'https://nemuftsdmjzkzcygkjpg.supabase.co/storage/v1/object/public/assets-devaq/pt-harkat-bangkit-jaya/7.png'
    }
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

      {/* Animated Logo Slider - pause on hover */}
      <div className="relative group/slider">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-800 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-800 to-transparent z-10"></div>

        {/* Scrolling container - pauses when any logo is hovered */}
        <div className="flex animate-scroll-infinite group-hover/slider:[animation-play-state:paused]">
          {allClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 mx-10"
              data-testid={`client-logo-${client.id}`}
            >
              <div className="group/logo cursor-pointer transition-all duration-300 hover:scale-110 p-4">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-20 md:h-24 w-auto object-contain grayscale opacity-70 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
