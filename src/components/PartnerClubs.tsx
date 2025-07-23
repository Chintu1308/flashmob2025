import React from 'react';
import { Users, Award, Music, Palette, Camera, Cpu } from 'lucide-react';

const PartnerClubs: React.FC = () => {

  const partnerClubs = [
    {
      name: 'HOH',
      icon: <img src="partners/hoh.png" alt="HOH" className="w-20 h-20 object-contain" />
    },
    {
      name: 'NSS-1',
      icon: <img src="partners/nss.png" alt="NSS-1" className="w-12 h-12 object-contain" />
    },
    {
      name: 'NSS-2',
      icon: <img src="partners/nss.png" alt="NSS-2" className="w-12 h-12 object-contain" />
    },
    {
      name: 'Rotaract',
      icon: <img src="partners/rotaract.png" alt="Rotaract" className="w-12 h-12 object-contain" />
    },
    {
      name: 'Vidhyadhan',
      icon: <img src="partners/vidhyadhan.png" alt="Vidhyadhan" className="w-8 h-8 object-contain" />
    },
    {
      name: 'WeR4help',
      icon: <img src="partners/wer4help.png" alt="WeR4help" className="w-12 h-12 object-contain" />
    },
    {
      name: 'YES',
      icon: <img src="partners/yes.png" alt="YES" className="w-8 h-8 object-contain" />
    },
    {
      name: 'Youth for Seva',
      icon: <img src="partners/youthforseva.png" alt="Youth for Seva" className="w-12 h-12 object-contain" />
    },
    {
      name: 'Youth for Sustainability',
      icon: <img src="partners/youthforsustainability.png" alt="Youth for Sustainability" className="w-15 h-15 object-contain" />
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            🤝 <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Partner Clubs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            United in creativity, collaborating to make this flash mob an unforgettable experience
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8" style={{ width: 'fit-content' }}>
            {[...partnerClubs, ...partnerClubs].map((club, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 border-opacity-30 transition-all duration-300 cursor-pointer group"
                style={{ 
                  background: 'rgba(26, 3, 47, 0.5)', 
                  borderColor: 'rgba(255, 255, 255, 0.1)' 
                }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                    {club.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white transition-all duration-300">
                    {club.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerClubs;