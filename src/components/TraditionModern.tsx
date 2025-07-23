import React, { useEffect, useState } from 'react';

const TraditionModern: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="vibe" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            🌀 The Vibe: <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Modern Energy</span>
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div 
            className="space-y-8 transform transition-transform duration-700 max-w-2xl"
            style={{ transform: `translateX(${scrollY * 0.1}px)` }}
          >
            <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 border-opacity-30">
              <h3 className="text-3xl font-bold text-blue-400 mb-4 text-center">🎧 Modern Energy</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center animate-spin-slow">
                    <span className="text-2xl">🎛️</span>
                  </div>
                  <p className="text-gray-300">Musical beats and electronic soundscapes</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💫</span>
                  </div>
                  <p className="text-gray-300">Neon lights and contemporary vibes</p>
                </div>
              </div>
            </div>
            
            <blockquote className="text-xl italic text-center text-gray-300 p-6 bg-slate-800 bg-opacity-30 rounded-lg border-l-4 border-blue-500">
              "History meets harmony on one unforgettable day."
            </blockquote>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-full px-12 py-6 border border-gray-600 border-opacity-30">
            <span className="text-4xl animate-bounce">🎵</span>
            <span className="text-2xl text-white font-bold">+</span>
            <span className="text-4xl animate-bounce delay-300">🎧</span>
            <span className="text-2xl text-white font-bold">=</span>
            <span className="text-4xl animate-bounce delay-500">🔥</span>
          </div>
        </div>
      </div>
      
      {/* Parallax background elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-400 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default TraditionModern;