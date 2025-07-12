import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import VideoGallery from './components/VideoGallery';

function App() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      <Hero />
      
      <main className="pb-16">
        {activeTab === 'photos' ? (
          <PhotoGallery searchTerm={searchTerm} />
        ) : (
          <VideoGallery searchTerm={searchTerm} />
        )}
      </main>
      
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">MediaVault</h3>
          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
            Curating the world's most beautiful visual content
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2025 MediaVault. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;