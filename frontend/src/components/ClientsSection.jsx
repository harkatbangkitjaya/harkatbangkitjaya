import React from 'react';

const ClientsSection = () => {
  // Client logos with actual brand images (placeholder - easily replaceable)
  const clients = [
    { 
      id: 1, 
      name: 'Nike', 
      logo: 'https://cdn.simpleicons.org/nike/ffffff'
    },
    { 
      id: 2, 
      name: 'Adidas', 
      logo: 'https://cdn.simpleicons.org/adidas/ffffff'
    },
    { 
      id: 3, 
      name: 'Google', 
      logo: 'https://cdn.simpleicons.org/google/ffffff'
    },
    { 
      id: 4, 
      name: 'Amazon Web Services', 
      logo: 'https://cdn.simpleicons.org/amazonaws/ffffff'
    },
    { 
      id: 5, 
      name: 'Google Cloud', 
      logo: 'https://cdn.simpleicons.org/googlecloud/ffffff'
    },
    { 
      id: 6, 
      name: 'Microsoft', 
      logo: 'https://cdn.simpleicons.org/microsoft/ffffff'
    },
    { 
      id: 7, 
      name: 'Apple', 
      logo: 'https://cdn.simpleicons.org/apple/ffffff'
    },
    { 
      id: 8, 
      name: 'Samsung', 
      logo: 'https://cdn.simpleicons.org/samsung/ffffff'
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
              className="flex-shrink-0 mx-8"
              data-testid={`client-logo-${client.id}`}
            >
              <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 w-auto object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
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
