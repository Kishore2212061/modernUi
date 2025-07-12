import React, { useState } from 'react';
import { Play, Heart, Download, X, Video as VideoIcon, Filter } from 'lucide-react';
import { videoCategories, Video } from '../data/videos';

interface VideoGalleryProps {
  searchTerm: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ searchTerm }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const currentVideos = videoCategories.find(cat => cat.id === selectedCategory)?.videos || [];
  
  const filteredVideos = currentVideos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    video.creator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (videoId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(videoId)) {
      newFavorites.delete(videoId);
    } else {
      newFavorites.add(videoId);
    }
    setFavorites(newFavorites);
  };

  // Placeholder thumbnail generator
  const getPlaceholderThumbnail = (video: Video) => {
    const colors = ['4F46E5', '059669', 'DC2626', 'D97706', '7C3AED', 'DB2777'];
    const color = colors[parseInt(video.id.slice(-1), 36) % colors.length];
    
    return `https://via.placeholder.com/600x400/${color}/FFFFFF?text=${encodeURIComponent(video.title)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Video Collections</h2>
            <p className="text-gray-600">Experience captivating videos organized by category</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <VideoIcon className="h-4 w-4" />
              <span>{filteredVideos.length} videos</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Filter className="h-5 w-5 text-gray-400 mt-2" />
          {videoCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.videos.length})
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="aspect-video overflow-hidden relative">
              <img
                src={getPlaceholderThumbnail(video)}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="bg-emerald-600 text-white p-4 rounded-full hover:bg-emerald-700 transition-colors duration-200 transform scale-90 group-hover:scale-100"
                >
                  <Play className="h-8 w-8 ml-1" />
                </button>
              </div>
              
              <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </div>

              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                  {video.category}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 text-gray-900 line-clamp-2">{video.title}</h3>
              <p className="text-sm text-gray-600 mb-2">by {video.creator}</p>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">{video.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {video.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(video.id);
                    }}
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      favorites.has(video.id)
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-200">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <VideoIcon className="h-12 w-12 text-gray-400" />
          </div>
          <p className="text-gray-500 text-lg mb-2">No videos found</p>
          <p className="text-gray-400">Try adjusting your search or category filter</p>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {/* Placeholder for video player */}
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 text-emerald-500" />
                  <h3 className="text-xl font-semibold mb-2">{selectedVideo.title}</h3>
                  <p className="text-gray-300 mb-4">{selectedVideo.description}</p>
                  <p className="text-sm text-gray-400">Video file: {selectedVideo.filename}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300 mb-2">Created by {selectedVideo.creator}</p>
              <p className="text-gray-400 mb-4">{selectedVideo.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedVideo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-emerald-600 text-white text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;