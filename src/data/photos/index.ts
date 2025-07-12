export interface Photo {
  id: string;
  filename: string;
  title: string;
  photographer: string;
  tags: string[];
  category: string;
}

// Nature Collection
export const naturePhotos: Photo[] = [
  {
    id: 'nature-1',
    filename: 'mountain-landscape.jpg',
    title: 'Mountain Landscape',
    photographer: 'James Wheeler',
    tags: ['landscape', 'mountain', 'nature', 'scenic'],
    category: 'nature'
  },
  {
    id: 'nature-2',
    filename: 'forest-path.jpg',
    title: 'Forest Path',
    photographer: 'Tobias Bjørkli',
    tags: ['forest', 'path', 'trees', 'green', 'nature'],
    category: 'nature'
  },
  {
    id: 'nature-3',
    filename: 'ocean-waves.jpg',
    title: 'Ocean Waves',
    photographer: 'Pixabay',
    tags: ['ocean', 'waves', 'blue', 'water', 'nature'],
    category: 'nature'
  },
  {
    id: 'nature-4',
    filename: 'desert-sunset.jpg',
    title: 'Desert Sunset',
    photographer: 'Simon Matzinger',
    tags: ['desert', 'sunset', 'orange', 'sand', 'nature'],
    category: 'nature'
  },
  {
    id: 'nature-5',
    filename: 'starry-night.jpg',
    title: 'Starry Night',
    photographer: 'Felix Mittermeier',
    tags: ['night', 'stars', 'sky', 'astronomy', 'nature'],
    category: 'nature'
  }
];

// Urban Collection
export const urbanPhotos: Photo[] = [
  {
    id: 'urban-1',
    filename: 'city-skyline.jpg',
    title: 'City Skyline',
    photographer: 'Pixabay',
    tags: ['city', 'skyline', 'urban', 'buildings'],
    category: 'urban'
  },
  {
    id: 'urban-2',
    filename: 'street-art.jpg',
    title: 'Street Art',
    photographer: 'Urban Explorer',
    tags: ['street', 'art', 'graffiti', 'urban', 'colorful'],
    category: 'urban'
  },
  {
    id: 'urban-3',
    filename: 'night-lights.jpg',
    title: 'Night Lights',
    photographer: 'City Photographer',
    tags: ['night', 'lights', 'urban', 'neon', 'city'],
    category: 'urban'
  },
  {
    id: 'urban-4',
    filename: 'architecture.jpg',
    title: 'Modern Architecture',
    photographer: 'Design Studio',
    tags: ['architecture', 'modern', 'building', 'design'],
    category: 'urban'
  }
];

// Portrait Collection
export const portraitPhotos: Photo[] = [
  {
    id: 'portrait-1',
    filename: 'woman-portrait.jpg',
    title: 'Portrait Study',
    photographer: 'Portrait Master',
    tags: ['portrait', 'woman', 'studio', 'professional'],
    category: 'portrait'
  },
  {
    id: 'portrait-2',
    filename: 'child-smile.jpg',
    title: 'Childhood Joy',
    photographer: 'Family Photographer',
    tags: ['child', 'smile', 'joy', 'portrait', 'happiness'],
    category: 'portrait'
  },
  {
    id: 'portrait-3',
    filename: 'elderly-wisdom.jpg',
    title: 'Wisdom Lines',
    photographer: 'Life Stories',
    tags: ['elderly', 'wisdom', 'portrait', 'character'],
    category: 'portrait'
  }
];

// Seasonal Collection
export const seasonalPhotos: Photo[] = [
  {
    id: 'seasonal-1',
    filename: 'autumn-leaves.jpg',
    title: 'Autumn Leaves',
    photographer: 'Seasonal Photographer',
    tags: ['autumn', 'leaves', 'colorful', 'season', 'fall'],
    category: 'seasonal'
  },
  {
    id: 'seasonal-2',
    filename: 'winter-snow.jpg',
    title: 'Winter Wonderland',
    photographer: 'Snow Photographer',
    tags: ['winter', 'snow', 'white', 'cold', 'season'],
    category: 'seasonal'
  },
  {
    id: 'seasonal-3',
    filename: 'spring-flowers.jpg',
    title: 'Spring Blossoms',
    photographer: 'Nature Lover',
    tags: ['spring', 'flowers', 'bloom', 'colorful', 'season'],
    category: 'seasonal'
  },
  {
    id: 'seasonal-4',
    filename: 'summer-beach.jpg',
    title: 'Summer Paradise',
    photographer: 'Beach Photographer',
    tags: ['summer', 'beach', 'tropical', 'paradise', 'season'],
    category: 'seasonal'
  }
];

// All photos combined
export const allPhotos: Photo[] = [
  ...naturePhotos,
  ...urbanPhotos,
  ...portraitPhotos,
  ...seasonalPhotos
];

export const photoCategories = [
  { id: 'all', name: 'All Photos', photos: allPhotos },
  { id: 'nature', name: 'Nature', photos: naturePhotos },
  { id: 'urban', name: 'Urban', photos: urbanPhotos },
  { id: 'portrait', name: 'Portrait', photos: portraitPhotos },
  { id: 'seasonal', name: 'Seasonal', photos: seasonalPhotos }
];