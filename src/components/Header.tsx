import React from 'react';
import { Camera, Video, Search } from 'lucide-react';

interface HeaderProps {
  activeTab: 'photos' | 'videos';
  setActiveTab: (tab: 'photos' | 'videos') => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, searchTerm, setSearchTerm }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-2 rounded-lg">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              MediaVault
            </h1>
          </div>

          <nav className="flex items-center space-x-8">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'photos'
                  ? 'bg-blue-100 text-blue-700 shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Camera className="h-4 w-4" />
              <span>Photos</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'videos'
                  ? 'bg-emerald-100 text-emerald-700 shadow-sm'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
              }`}
            >
              <Video className="h-4 w-4" />
              <span>Videos</span>
            </button>
          </nav>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search media..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;