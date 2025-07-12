import React, { useState } from 'react';
import { Heart, Download, Eye, X, Grid, Filter } from 'lucide-react';
import { photoCategories, Photo } from '../data/photos';

interface PhotoGalleryProps {
  searchTerm: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ searchTerm }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const currentPhotos = photoCategories.find(cat => cat.id === selectedCategory)?.photos || [];
  
  const filteredPhotos = currentPhotos.filter(photo =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    photo.photographer.toLowerCase().includes(searchTerm.toLowerCase())
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

  // Placeholder image generator
  const getPlaceholderImage = (photo: Photo, size: 'thumbnail' | 'full' = 'thumbnail') => {
    const width = size === 'thumbnail' ? 400 : 1200;
    const height = size === 'thumbnail' ? 400 : 800;
    const colors = ['4F46E5', '059669', 'DC2626', 'D97706', '7C3AED', 'DB2777'];
    const color = colors[parseInt(photo.id.slice(-1), 36) % colors.length];
    
    return `https://via.placeholder.com/${width}x${height}/${color}/FFFFFF?text=${encodeURIComponent(photo.title)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Photo Collections</h2>
            <p className="text-gray-600">Discover stunning photography organized by category</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Grid className="h-4 w-4" />
              <span>{filteredPhotos.length} photos</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Filter className="h-5 w-5 text-gray-400 mt-2" />
          {photoCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.photos.length})
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={getPlaceholderImage(photo, 'thumbnail')}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
              <p className="text-sm text-gray-200 mb-2">by {photo.photographer}</p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {photo.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
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

            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                {photo.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Grid className="h-12 w-12 text-gray-400" />
          </div>
          <p className="text-gray-500 text-lg mb-2">No photos found</p>
          <p className="text-gray-400">Try adjusting your search or category filter</p>
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
              src={getPlaceholderImage(selectedPhoto, 'full')}
              alt={selectedPhoto.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h3>
              <p className="text-gray-200 mb-2">Photography by {selectedPhoto.photographer}</p>
              <div className="flex flex-wrap gap-2">
                {selectedPhoto.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/20 text-white text-sm rounded-full"
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

export default PhotoGallery;