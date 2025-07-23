import React, { useState } from 'react';
import { Music, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-gradient-to-r from-slate-900 via-gray-800 to-black backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src="https://raw.githubusercontent.com/Chintu1308/flashmob2025/main/public/partners/gccc.png" alt="Gayatri College Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">GCCC</h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#event" className="text-white hover:text-cyan-400 transition-colors">Event</a>
            <a href="#vibe" className="text-white hover:text-cyan-400 transition-colors">The Vibe</a>
            <a href="#partners" className="text-white hover:text-cyan-400 transition-colors">Partners</a>
            <a href="#gallery" className="text-white hover:text-cyan-400 transition-colors">Gallery</a>
          </nav>
          
          <button 
            onClick={() => setShowRegistrationModal(true)}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-lg"
            style={{ 
              background: 'linear-gradient(to right, #B300B3, #00CCCC)',
              boxShadow: '0 4px 15px rgba(179, 0, 179, 0.25)'
            }}
          >
            JOIN THE VIBE
          </button>
        </div>
      </header>

      {/* Registration Closed Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-8 rounded-2xl shadow-2xl max-w-md mx-4 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❌</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Registration Closed</h3>
              <p className="text-gray-300">Sorry, the registrations are closed for this event.</p>
            </div>
            <button
              onClick={() => setShowRegistrationModal(false)}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300"
              style={{ background: 'linear-gradient(to right, #B300B3, #00CCCC)' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;