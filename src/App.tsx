import React, { useState, useEffect } from 'react';
import PopupModal from './components/PopupModal';
import Header from './components/Header';
import EventDetails from './components/EventDetails';
import TraditionModern from './components/TraditionModern';
import PartnerClubs from './components/PartnerClubs';
import MediaGallery from './components/MediaGallery';
import Footer from './components/Footer';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  useEffect(() => {
    // Show popup immediately when the page loads
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <PopupModal isOpen={showPopup} onClose={closePopup} />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center py-20">
            <h1 className="text-7xl md:text-8xl font-bold mb-6 animate-pulse bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              MUSIC CARNIVAL
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-8">
              FLASH MOB 2025
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the first-ever flash mob at Gayatri College - where tradition meets modern beats in an explosion of creativity and culture
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setShowRegistrationModal(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                style={{ 
                  background: 'linear-gradient(to right, #B300B3, #00CCCC)',
                  boxShadow: '0 4px 15px rgba(179, 0, 179, 0.25)'
                }}
              >
                Join the Movement
              </button>
              <button 
                onClick={() => setShowTrailerModal(true)}
                className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900"
                style={{ '&:hover': { backgroundColor: 'white', color: '#1A032F' } }}
              >
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 bg-opacity-30 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-500 bg-opacity-30 rounded-full animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-400 bg-opacity-30 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-teal-400 bg-opacity-30 rounded-full animate-float-delay"></div>
      </section>

      <EventDetails />
      <TraditionModern />
      <PartnerClubs />
      <MediaGallery />
      <Footer />

      {/* Trailer Loading Modal */}
      {showTrailerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-slate-800 to-gray-900 p-8 rounded-2xl shadow-2xl max-w-md mx-4 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Trailer Loading Soon</h3>
              <p className="text-gray-300">The official trailer will be available shortly. Stay tuned!</p>
            </div>
            <button
              onClick={() => setShowTrailerModal(false)}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300"
              style={{ background: 'linear-gradient(to right, #B300B3, #00CCCC)' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

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
    </div>
  );
}

export default App;