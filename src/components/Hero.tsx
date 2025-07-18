import React from 'react';
import { Camera, Video, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 sm:space-x-4 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <Camera className="h-5 w-5 sm:h-6 sm:w-6" />
              <Sparkles className="h-5 w-5" />
              <Video className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            Discover Amazing
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent block mt-2">
              Visual Stories
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our curated collection of stunning photography and captivating videos. 
            Every piece tells a story, every moment captures beauty.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 px-4">
            <button className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Explore Photos
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
              Watch Videos
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;