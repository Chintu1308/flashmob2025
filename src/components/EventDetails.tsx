import React from 'react';
import { Calendar, MapPin, Clock, Download } from 'lucide-react';

const EventDetails: React.FC = () => {
  const [showTrailerModal, setShowTrailerModal] = React.useState(false);

  const addToCalendar = () => {
    const event = {
      title: 'Music Carnival Flash Mob',
      details: 'Join us for the first-ever flash mob at Gayatri College!',
      location: 'College Garden, Gayatri Vidya Parishad College',
      startDate: '20250802',
      endDate: '20250802'
    };
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <section id="event" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold mb-6 animate-pulse bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              🎉 Music Carnival Flash Mob
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 border-opacity-30">
                <MapPin className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">📍 Location</h3>
                <p className="text-gray-300">College Garden</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 border-opacity-30">
                <Calendar className="text-cyan-400 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">📆 Date</h3>
                <p className="text-gray-300">August 02, 2025</p>
              </div>
              
              <div className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 border-opacity-30">
                <Clock className="text-orange-400 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">⏰ Time</h3>
                <p className="text-gray-300">Afternoon Onwards</p>
              </div>
            </div>
            
            <button
              onClick={addToCalendar}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2 mx-auto"
              style={{ 
                background: 'linear-gradient(to right, #B300B3, #00CCCC)',
                boxShadow: '0 4px 15px rgba(179, 0, 179, 0.25)'
              }}
            >
              <Download size={20} />
              <span>Add to Calendar</span>
            </button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
      </section>

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
    </>
  );
};

export default EventDetails;