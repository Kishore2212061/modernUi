import React, { useState } from 'react';
import { Heart, Download, Eye, X } from 'lucide-react';

interface Photo {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  photographer: string;
  tags: string[];
}

interface PhotoGalleryProps {
  searchTerm: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ searchTerm }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const photos: Photo[] = [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600',
      thumbnail: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Mountain Landscape',
      photographer: 'James Wheeler',
      tags: ['landscape', 'mountain', 'nature']
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1600',
      thumbnail: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Ocean Waves',
      photographer: 'Pixabay',
      tags: ['ocean', 'waves', 'blue', 'water']
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600',
      thumbnail: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Forest Path',
      photographer: 'Tobias Bjørkli',
      tags: ['forest', 'path', 'trees', 'green']
    },
    {
      id: '4',
      url: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1600',
      thumbnail: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'City Skyline',
      photographer: 'Pixabay',
      tags: ['city', 'skyline', 'urban', 'buildings']
    },
    {
      id: '5',
      url: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1600',
      thumbnail: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Desert Sunset',
      photographer: 'Simon Matzinger',
      tags: ['desert', 'sunset', 'orange', 'sand']
    },
    {
      id: '6',
      url: 'https://images.pexels.com/photos/1574653/pexels-photo-1574653.jpeg?auto=compress&cs=tinysrgb&w=1600',
      thumbnail: 'https://images.pexels.com/photos/1574653/pexels-photo-1574653.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Autumn Leaves',
      photographer: 'Pixabay',
      tags: ['autumn', 'leaves', 'colorful', 'season']
    },
    {
      id: '7',
      url: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1600',
      thumbnail: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Starry Night',
      photographer: 'Felix Mittermeier',
      tags: ['night', 'stars', 'sky', 'astronomy']
    },
    {
      id: '8',
      url: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1600',
      thumbnail: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Tropical Beach',
      photographer: 'Asad Photo Maldives',
      tags: ['beach', 'tropical', 'paradise', 'ocean']
    }
  ];

  const filteredPhotos = photos.filter(photo =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleFavorite = (photoId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(photoId)) {
      newFavorites.delete(photoId);
    } else {
      newFavorites.add(photoId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Photo Collection</h2>
        <p className="text-gray-600">Discover stunning photography from around the world</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={photo.thumbnail}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
              <p className="text-sm text-gray-200 mb-3">by {photo.photographer}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(photo.id);
                    }}
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      favorites.has(photo.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors duration-200">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => setSelectedPhoto(photo)}
                  className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">View</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No photos found matching your search.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h3>
              <p className="text-gray-200">Photography by {selectedPhoto.photographer}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;