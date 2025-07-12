import React, { useState } from 'react';
import { Play, Heart, Download, X } from 'lucide-react';

interface Video {
  id: string;
  thumbnail: string;
  videoUrl: string;
  title: string;
  creator: string;
  duration: string;
  tags: string[];
}

interface VideoGalleryProps {
  searchTerm: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ searchTerm }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const videos: Video[] = [
    {
      id: '1',
      thumbnail: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      title: 'Mountain Adventure',
      creator: 'Nature Films',
      duration: '2:34',
      tags: ['mountain', 'adventure', 'nature']
    },
    {
      id: '2',
      thumbnail: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://player.vimeo.com/video/90509568',
      title: 'Ocean Waves',
      creator: 'Blue Ocean Media',
      duration: '1:45',
      tags: ['ocean', 'waves', 'relaxing']
    },
    {
      id: '3',
      thumbnail: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://player.vimeo.com/video/169599296',
      title: 'Forest Exploration',
      creator: 'Wild Life Productions',
      duration: '3:12',
      tags: ['forest', 'exploration', 'wildlife']
    },
    {
      id: '4',
      thumbnail: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://player.vimeo.com/video/162391636',
      title: 'City Life',
      creator: 'Urban Stories',
      duration: '2:58',
      tags: ['city', 'urban', 'lifestyle']
    },
    {
      id: '5',
      thumbnail: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://player.vimeo.com/video/148751763',
      title: 'Desert Sunset',
      creator: 'Desert Films',
      duration: '1:28',
      tags: ['desert', 'sunset', 'timelapse']
    },
    {
      id: '6',
      thumbnail: 'https://images.pexels.com/photos/1574653/pexels-photo-1574653.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://player.vimeo.com/video/195913085',
      title: 'Seasonal Changes',
      creator: 'Time Lapse Studio',
      duration: '4:15',
      tags: ['seasons', 'timelapse', 'nature']
    }
  ];

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Video Collection</h2>
        <p className="text-gray-600">Experience captivating videos and documentaries</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="aspect-video overflow-hidden relative">
              <img
                src={video.thumbnail}
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
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 text-gray-900">{video.title}</h3>
              <p className="text-sm text-gray-600 mb-3">by {video.creator}</p>
              
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
          <p className="text-gray-500 text-lg">No videos found matching your search.</p>
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
              <iframe
                src={selectedVideo.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={selectedVideo.title}
              />
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300">Created by {selectedVideo.creator}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;