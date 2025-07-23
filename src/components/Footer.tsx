import React from 'react';
import { Instagram as InstagramIcon, Youtube as YoutubeIcon, Globe, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* College Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src="/partners/gccc.png" alt="GCCC Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Gayatri College</h3>
                <p className="text-sm text-gray-300">Cultural Club</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Celebrating culture, creativity, and community through unforgettable events and experiences.
            </p>
            <div className="flex space-x-4">
                <a href="https://www.instagram.com/sacgvpcoe" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <InstagramIcon size={20} />
                </a>
                <a href="https://www.youtube.com/@studentactivitycentergvpco2030" className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <YoutubeIcon size={20} />
                </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Contact Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={20} />
                <span className="text-gray-300">gc3@gvpce.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-cyan-400" size={20} />
                <span className="text-gray-300">+91 93923 29347</span>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="text-orange-400 mt-1" size={20} />
                <div>
                  <p className="text-gray-300">Gayatri College Campus</p>
                  <p className="text-sm text-gray-400">Cultural Activities Wing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
                  
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © 2025 Gayatri College Cultural Club. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>for our college community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;