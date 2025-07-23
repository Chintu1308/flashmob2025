import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Preload the poster image
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.src = 'https://raw.githubusercontent.com/Chintu1308/flashmob2025/main/public/event-poster.png';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="relative max-w-4xl max-h-[90vh] mx-4 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors z-10"
        >
          <X size={32} />
        </button>
        
        <div className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-black p-4 rounded-2xl shadow-2xl animate-zoom-in">
          <div className="text-center text-white">
            {/* Flashmob Poster Image */}
            <div className="mb-6 relative">
              <img 
                src="https://raw.githubusercontent.com/Chintu1308/flashmob2025/main/public/event-poster.png"
                alt="Music Carnival Flash Mob Poster" 
                className="w-full max-w-lg mx-auto rounded-xl shadow-2xl border-4 border-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"
                style={{
                  filter: 'drop-shadow(0 20px 25px rgba(0, 0, 0, 0.25))',
                  borderImage: 'linear-gradient(45deg, #60a5fa, #22d3ee, #2dd4bf) 1'
                }}
                onLoad={() => setImageLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
            </div>
            
            <div className="mb-6 p-4 bg-slate-800 bg-opacity-50 rounded-xl backdrop-blur-sm">
              <p className="text-lg mb-2">📍 College Garden</p>
              <p className="text-lg mb-2">📅 August 02, 2025</p>
              <p className="text-lg">⏰ Afternoon Onwards</p>
            </div>
            
            <div className="mb-4">
              <p className="text-sm italic text-gray-300">Hosted by</p>
              <p className="text-xl font-bold text-cyan-400">Gayatri College Cultural Club</p>
            </div>
            
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse bg-gradient-to-br from-blue-600 to-cyan-600">
                <span className="text-lg">🎵</span>
              </div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse delay-150 bg-gradient-to-br from-cyan-600 to-teal-600">
                <span className="text-lg">🎭</span>
              </div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse delay-300 bg-gradient-to-br from-orange-500 to-red-600">
                <span className="text-lg">💃</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-white text-lg animate-bounce">
            ↓ Swipe down to explore the rhythm ↓
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;