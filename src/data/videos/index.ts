export interface Video {
  id: string;
  filename: string;
  thumbnail: string;
  title: string;
  creator: string;
  duration: string;
  tags: string[];
  category: string;
  description: string;
}

// Documentary Collection
export const documentaryVideos: Video[] = [
  {
    id: 'doc-1',
    filename: 'nature-documentary.mp4',
    thumbnail: 'nature-doc-thumb.jpg',
    title: 'Wildlife Wonders',
    creator: 'Nature Films',
    duration: '15:34',
    tags: ['documentary', 'wildlife', 'nature', 'animals'],
    category: 'documentary',
    description: 'Explore the amazing world of wildlife in their natural habitat'
  },
  {
    id: 'doc-2',
    filename: 'ocean-depths.mp4',
    thumbnail: 'ocean-doc-thumb.jpg',
    title: 'Ocean Depths',
    creator: 'Blue Planet Productions',
    duration: '22:15',
    tags: ['documentary', 'ocean', 'marine', 'underwater'],
    category: 'documentary',
    description: 'Dive deep into the mysterious world beneath the waves'
  },
  {
    id: 'doc-3',
    filename: 'space-exploration.mp4',
    thumbnail: 'space-doc-thumb.jpg',
    title: 'Journey to the Stars',
    creator: 'Cosmic Studios',
    duration: '18:42',
    tags: ['documentary', 'space', 'astronomy', 'exploration'],
    category: 'documentary',
    description: 'A fascinating journey through our solar system and beyond'
  }
];

// Travel Collection
export const travelVideos: Video[] = [
  {
    id: 'travel-1',
    filename: 'mountain-adventure.mp4',
    thumbnail: 'mountain-travel-thumb.jpg',
    title: 'Mountain Adventure',
    creator: 'Adventure Seekers',
    duration: '8:23',
    tags: ['travel', 'mountain', 'adventure', 'hiking'],
    category: 'travel',
    description: 'Epic mountain climbing adventure in the Alps'
  },
  {
    id: 'travel-2',
    filename: 'city-tour.mp4',
    thumbnail: 'city-travel-thumb.jpg',
    title: 'European City Tour',
    creator: 'Urban Explorers',
    duration: '12:56',
    tags: ['travel', 'city', 'europe', 'culture'],
    category: 'travel',
    description: 'Discover the hidden gems of European cities'
  },
  {
    id: 'travel-3',
    filename: 'tropical-paradise.mp4',
    thumbnail: 'tropical-travel-thumb.jpg',
    title: 'Tropical Paradise',
    creator: 'Island Hoppers',
    duration: '10:17',
    tags: ['travel', 'tropical', 'beach', 'paradise'],
    category: 'travel',
    description: 'Explore pristine beaches and crystal clear waters'
  },
  {
    id: 'travel-4',
    filename: 'desert-expedition.mp4',
    thumbnail: 'desert-travel-thumb.jpg',
    title: 'Desert Expedition',
    creator: 'Desert Nomads',
    duration: '14:33',
    tags: ['travel', 'desert', 'expedition', 'adventure'],
    category: 'travel',
    description: 'Journey through vast desert landscapes and ancient cultures'
  }
];

// Lifestyle Collection
export const lifestyleVideos: Video[] = [
  {
    id: 'lifestyle-1',
    filename: 'morning-routine.mp4',
    thumbnail: 'morning-lifestyle-thumb.jpg',
    title: 'Perfect Morning Routine',
    creator: 'Wellness Guru',
    duration: '6:45',
    tags: ['lifestyle', 'morning', 'wellness', 'routine'],
    category: 'lifestyle',
    description: 'Start your day right with this energizing morning routine'
  },
  {
    id: 'lifestyle-2',
    filename: 'cooking-masterclass.mp4',
    thumbnail: 'cooking-lifestyle-thumb.jpg',
    title: 'Cooking Masterclass',
    creator: 'Chef Excellence',
    duration: '16:28',
    tags: ['lifestyle', 'cooking', 'food', 'recipe'],
    category: 'lifestyle',
    description: 'Learn to cook like a professional chef'
  },
  {
    id: 'lifestyle-3',
    filename: 'home-design.mp4',
    thumbnail: 'home-lifestyle-thumb.jpg',
    title: 'Home Design Tips',
    creator: 'Interior Designer',
    duration: '11:52',
    tags: ['lifestyle', 'home', 'design', 'interior'],
    category: 'lifestyle',
    description: 'Transform your living space with these design tips'
  }
];

// Art & Creative Collection
export const artVideos: Video[] = [
  {
    id: 'art-1',
    filename: 'painting-tutorial.mp4',
    thumbnail: 'painting-art-thumb.jpg',
    title: 'Watercolor Painting',
    creator: 'Art Master',
    duration: '25:14',
    tags: ['art', 'painting', 'watercolor', 'tutorial'],
    category: 'art',
    description: 'Learn watercolor painting techniques from a master artist'
  },
  {
    id: 'art-2',
    filename: 'sculpture-process.mp4',
    thumbnail: 'sculpture-art-thumb.jpg',
    title: 'Sculpture Creation',
    creator: 'Sculptor Pro',
    duration: '19:37',
    tags: ['art', 'sculpture', 'clay', 'creative'],
    category: 'art',
    description: 'Watch the mesmerizing process of creating a clay sculpture'
  },
  {
    id: 'art-3',
    filename: 'digital-art.mp4',
    thumbnail: 'digital-art-thumb.jpg',
    title: 'Digital Art Masterpiece',
    creator: 'Digital Artist',
    duration: '13:21',
    tags: ['art', 'digital', 'illustration', 'creative'],
    category: 'art',
    description: 'Create stunning digital artwork using modern tools'
  }
];

// All videos combined
export const allVideos: Video[] = [
  ...documentaryVideos,
  ...travelVideos,
  ...lifestyleVideos,
  ...artVideos
];

export const videoCategories = [
  { id: 'all', name: 'All Videos', videos: allVideos },
  { id: 'documentary', name: 'Documentary', videos: documentaryVideos },
  { id: 'travel', name: 'Travel', videos: travelVideos },
  { id: 'lifestyle', name: 'Lifestyle', videos: lifestyleVideos },
  { id: 'art', name: 'Art & Creative', videos: artVideos }
];