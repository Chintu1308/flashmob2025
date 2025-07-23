import React, { useState } from 'react';
import { Play, Image, Plus } from 'lucide-react';

const MediaGallery: React.FC = () => {
  const [mediaItems, setMediaItems] = useState<any[]>([]);

  // Function to load media from public/gallery folder
  React.useEffect(() => {
    // This would be replaced with actual file loading logic
    // For now, we'll just show the empty state
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            🎥 <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Media Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Photos and videos from the event
          </p>
        </div>
        
        {mediaItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus className="text-gray-300" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-300 mb-4">Gallery Coming Soon</h3>
            <p className="text-gray-400">Photos and videos will be added here after the event!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-600 border-opacity-30 transition-all duration-300 cursor-pointer"
              style={{ 
                background: 'rgba(26, 3, 47, 0.5)', 
                borderColor: 'rgba(255, 255, 255, 0.1)' 
              }}
            >
              <div className="relative overflow-hidden">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    controls={false}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 right-4">
                  {item.type === 'video' ? (
                    <div className="w-12 h-12 bg-blue-600 bg-opacity-80 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="text-white ml-1" size={20} />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-cyan-600 bg-opacity-80 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Image className="text-white" size={20} />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 transition-all duration-300 truncate">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 capitalize">{item.type}</p>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGallery;