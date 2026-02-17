import React from 'react';

const ClientsSection = () => {
  // Client logos dengan placeholder images
  const clients = [
    { 
      id: 1, 
      name: 'PT. Maju Bersama',
      logo: 'https://logo.clearbit.com/mandiri.co.id'
    },
    { 
      id: 2, 
      name: 'Grand Mall Tasikmalaya',
      logo: 'https://logo.clearbit.com/lippo-malls.com'
    },
    { 
      id: 3, 
      name: 'Hotel Tasik Indah',
      logo: 'https://logo.clearbit.com/marriott.com'
    },
    { 
      id: 4, 
      name: 'Tasik Property',
      logo: 'https://logo.clearbit.com/sinarmasland.com'
    },
    { 
      id: 5, 
      name: 'Bank Mandiri',
      logo: 'https://logo.clearbit.com/bankmandiri.co.id'
    },
    { 
      id: 6, 
      name: 'RS Umum',
      logo: 'https://logo.clearbit.com/siloamhospitals.com'
    },
    { 
      id: 7, 
      name: 'Pemkot Tasikmalaya',
      logo: 'https://logo.clearbit.com/go.id'
    },
    { 
      id: 8, 
      name: 'Plaza Tasikmalaya',
      logo: 'https://logo.clearbit.com/plazaindonesia.com'
    }
  ];

  // Duplicate clients for seamless loop
  const allClients = [...clients, ...clients];

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
              <div className="w-40 h-28 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 flex items-center justify-center p-6 group hover:scale-110 hover:bg-white/10">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    // Fallback jika logo tidak load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-gray-400 group-hover:text-orange-500 font-semibold text-center text-sm transition-colors">${client.name}</span>`;
                  }}
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
