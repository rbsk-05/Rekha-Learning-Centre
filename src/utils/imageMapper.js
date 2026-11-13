// Centralized image mapping and storytelling metadata for Rekha Learning Centre

export const OCCASIONS_DATA = [
  {
    id: 'all',
    title: 'All Memories',
    shortTitle: 'All',
    icon: 'FaImages',
    badge: '10+ Years of Memories',
    tagline: 'A Mosaic of Learning, Joy, and Childhood Bonding',
    story: 'At Rekha Learning Centre, academic excellence is built on a foundation of happiness, emotional trust, and shared adventures. Over the past decade, we have created an environment where students do not just study—they flourish, explore the world, make lifelong friendships, and create memories they will treasure forever.',
    highlights: ['Holistic Development', 'Lifelong Friendships', 'Happy Minds']
  },
  {
    id: 'beach',
    title: 'Beach Adventures',
    shortTitle: 'Beach',
    icon: 'FaUmbrellaBeach',
    badge: 'Open Air & Freedom',
    tagline: 'Freedom, Sea Breeze, and Unbreakable Team Camaraderie',
    story: 'Education expands beyond classroom walls. Our trips to the Marina and Chennai beaches provide students with open space to run along the waves, build sand castles, play team games, and recharge their minds. Away from exam pressures, children develop deep bonds with their teachers and peers, learning empathy, teamwork, and social joy.',
    highlights: ['Stress Relief', 'Outdoor Team Games', 'Fresh Mindset']
  },
  {
    id: 'childrens_day',
    title: 'Children’s Day Celebrations',
    shortTitle: 'Children’s Day',
    icon: 'FaChild',
    badge: 'Celebrating Every Child',
    tagline: 'Cakes, Balloons, Laughter, and Boundless Smiles',
    story: 'Children’s Day is our biggest annual celebration. The centre transforms into a wonderland of colors, balloons, music, party treats, and games. Every child is celebrated as a unique individual with their own talents. It is a day of pure joy where every child feels valued, loved, and deeply cherished.',
    highlights: ['Individual Recognition', 'Cultural Games', 'Joyous Atmosphere']
  },
  {
    id: 'planetarium',
    title: 'Birla Planetarium Space Expedition',
    shortTitle: 'Planetarium',
    icon: 'FaRocket',
    badge: 'Scientific Wonder',
    tagline: 'Igniting Cosmic Curiosity and Passion for Astronomy',
    story: 'Science comes alive when students witness the universe first-hand. Our guided educational expedition to the Birla Planetarium exposes young minds to galaxies, constellations, and the wonders of astrophysics. We connect textbook physics and mathematics to real-world cosmic wonder, cultivating critical thinking and lifelong curiosity in STEM.',
    highlights: ['Experiential STEM Learning', 'Cosmic Wonder', 'Scientific Curiosity']
  },
  {
    id: 'movie',
    title: 'Cinema & Movie Outings',
    shortTitle: 'Movie Days',
    icon: 'FaFilm',
    badge: 'Work Hard, Celebrate Harder',
    tagline: 'Rewarding Hard Work with Group Cinema Magic',
    story: 'We instill in our students that hard work and academic discipline bring rewarding experiences. After months of focused mock tests and exams, taking students to the cinema theatre for a blockbuster movie is a tradition they look forward to all term. It teaches them the balance between diligence and well-earned celebrations.',
    highlights: ['Goal-Driven Rewards', 'Shared Excitement', 'Positive Motivation']
  },
  {
    id: 'classroom',
    title: 'Classroom Life & Academic Focus',
    shortTitle: 'Classroom',
    icon: 'FaBookOpen',
    badge: 'Concept Mastery',
    tagline: 'Patient Mentorship, Handwriting Focus, and Clear Concepts',
    story: 'Behind all the celebrations lies our unwavering commitment to academic clarity. In our quiet, distraction-free coaching rooms, teachers sit alongside students, answering every query with patience. We guide daily handwriting practice, review test papers, and ensure foundational concepts are thoroughly mastered.',
    highlights: ['Individual Attention', 'Handwriting Practice', 'Doubt Clearing']
  },
  {
    id: 'gifts',
    title: 'Rewards, Awards & Gift Distribution',
    shortTitle: 'Gifts & Awards',
    icon: 'FaGift',
    badge: 'Encouraging Excellence',
    tagline: 'Honoring Consistent Effort and Celebrating Every Milestone',
    story: 'At Rekha Learning Centre, no effort goes unnoticed. We regularly distribute customized stationery kits, books, encouragement gifts, and academic awards to acknowledge not just top marks, but consistent improvement, dedication, and exemplary manners. This builds unwavering self-esteem in every young learner.',
    highlights: ['Praise for Improvement', 'Quality Stationery Kits', 'Confidence Boosting']
  },
  {
    id: 'special_moments',
    title: 'Heartfelt Milestones & Traditions',
    shortTitle: 'Special Moments',
    icon: 'FaHeart',
    badge: 'Our Journey Together',
    tagline: 'From Our First Student to Historic Celebrations',
    story: 'Over 10+ years, Rekha Learning Centre has witnessed historic moments: our very first enrolled student who started this dream, heartwarming teacher birthday surprises planned by caring students, Teacher’s Day tributes, and festive Diwali rangolis. These personal moments show why parents trust us as their child’s second home.',
    highlights: ['10+ Year Heritage', 'Family Atmosphere', 'Mutual Gratitude']
  },
  {
    id: 'restaurant',
    title: 'Feasts & Group Dining',
    shortTitle: 'Dining Treats',
    icon: 'FaUtensils',
    badge: 'Dining Like Family',
    tagline: 'Sharing Meals, Practicing Manners, and Building Bonds',
    story: 'Sharing a table and breaking bread together creates a profound sense of family. Our group restaurant outings teach dining etiquette, gratitude for food, and warm conversational skills. Seeing shy students open up and laugh across a restaurant table is one of the most rewarding sights for our teachers.',
    highlights: ['Social Etiquette', 'Family Bonding', 'Warmth & Belonging']
  },
  {
    id: 'mall',
    title: 'Mall & Interactive Play Outings',
    shortTitle: 'Mall Visits',
    icon: 'FaShoppingBag',
    badge: 'Modern Recreation',
    tagline: 'Exploring, Shopping, and Interactive Fun',
    story: 'Weekend mall outings provide our students with safe, structured, and modern leisure. Whether exploring interactive game zones, window shopping, or having dessert together, these trips teach independence, financial awareness, and cooperative decision-making in real-world public spaces.',
    highlights: ['Social Independence', 'Interactive Play', 'Safe Supervision']
  },
  {
    id: 'videos',
    title: 'Live Video Reels',
    shortTitle: 'Video Reels',
    icon: 'FaPlayCircle',
    badge: 'Live Moments',
    tagline: 'Watch the Laughter, Waves, and Energy in Real Time',
    story: 'Photographs capture a moment, but videos capture the spirit. Watch live footage from our seaside outings and festive celebrations to experience the genuine happiness, high energy, and infectious laughter that fills Rekha Learning Centre.',
    highlights: ['Real Student Laughter', 'Ocean Waves', 'Authentic Energy']
  }
];

// Priority rank for sorting media in the "All" tab:
// Beach first -> Children's Day second -> Planetarium & Movies -> Classroom in the middle -> Gifts -> Milestones -> Dining -> Mall -> Videos
const CATEGORY_PRIORITY = {
  beach: 1,
  childrens_day: 2,
  planetarium: 3,
  movie: 4,
  classroom: 5,        // Classroom placed in the middle
  gifts: 6,
  special_moments: 7,
  restaurant: 8,
  mall: 9,
  videos: 10
};

// Dynamic imports across all image and video formats
const imageModules = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,svg,webp,avif,PNG,JPG,JPEG}', {
  eager: true,
  import: 'default'
});

const videoModules = import.meta.glob('/src/assets/images/**/*.{mp4,webm,mov,MP4}', {
  eager: true,
  import: 'default'
});

// Helper to determine the category ID from the file path
function categorizePath(path) {
  const p = path.toLowerCase();
  
  if (p.endsWith('.mp4') || p.endsWith('.webm') || p.endsWith('.mov') || p.includes('/video/')) {
    return 'videos';
  }
  if (p.includes('/4_beach/') || p.includes('beach')) return 'beach';
  if (p.includes('/5_children') || p.includes('children')) return 'childrens_day';
  if (p.includes('/3_birla') || p.includes('planetarium') || p.includes('birla')) return 'planetarium';
  if (p.includes('/0_movie/') || p.includes('movie')) return 'movie';
  if (p.includes('/b-roll/')) return 'classroom';
  if (p.includes('/7_gifts/') || p.includes('gift')) return 'gifts';
  if (p.includes('/6_special') || p.includes('birthday') || p.includes('first_student') || p.includes('teacher') || p.includes('raksha')) return 'special_moments';
  if (p.includes('/2_res/') || p.includes('res')) return 'restaurant';
  if (p.includes('/1_mall/') || p.includes('mall')) return 'mall';
  
  return 'special_moments';
}

// Generate human-friendly descriptive titles
function generateTitle(filename, category) {
  const base = filename.substring(0, filename.lastIndexOf('.')) || filename;
  const lower = base.toLowerCase();

  // Contextual title overrides based on recognized files
  if (lower.includes('birla')) return 'Birla Planetarium Space Expedition';
  if (lower.includes('first_student')) return 'Our Very First Student Heritage';
  if (lower.includes('birthday')) return 'Heartfelt Birthday Celebration with Students';
  if (lower.includes('teacher')) return 'Teacher’s Day Gratitude & Respect';
  if (lower.includes('raksha')) return 'Raksha Bandhan Celebration';
  if (lower.includes('movie')) return 'Cinema Treat & Hard Work Reward';
  if (lower.includes('mall')) return 'Shopping Mall Fun & Games Outing';
  if (lower.includes('res')) return 'Group Feast & Table Dining Together';
  if (lower.includes('diwali')) return 'Diwali Festivities & Sparklers';
  if (lower.includes('beach')) return 'Beach Waves & Team Games';

  const defaultTitles = {
    beach: 'Coastal Beach Adventure',
    childrens_day: 'Children’s Day Joy & Smiles',
    planetarium: 'Astronomy & Science Discovery',
    movie: 'Cinema Treat & Entertainment',
    classroom: 'Focused Learning & Mentorship',
    gifts: 'Academic Achievement & Reward',
    special_moments: 'Special Celebration Milestone',
    restaurant: 'Family Dining & Feast',
    mall: 'Mall Visit & Fun Day',
    videos: 'Live Tuition Centre Memory'
  };

  return defaultTitles[category] || 'Cherished Learning Centre Moment';
}

// Extract and organize all media
export const getAllGalleryMedia = () => {
  const mediaList = [];

  // Process Images
  Object.entries(imageModules).forEach(([path, url]) => {
    const filename = path.split('/').pop();
    const category = categorizePath(path);
    const title = generateTitle(filename, category);

    mediaList.push({
      url,
      path,
      filename,
      category,
      title,
      isVideo: false
    });
  });

  // Process Videos
  Object.entries(videoModules).forEach(([path, url]) => {
    const filename = path.split('/').pop();
    const category = 'videos';
    const title = generateTitle(filename, category);

    mediaList.push({
      url,
      path,
      filename,
      category,
      title,
      isVideo: true
    });
  });

  // Sort by category priority: Beach -> Children's Day -> Planetarium & Movies -> Classroom in Middle -> Gifts -> Milestones -> Dining -> Mall -> Videos
  mediaList.sort((a, b) => {
    const prioA = CATEGORY_PRIORITY[a.category] ?? 99;
    const prioB = CATEGORY_PRIORITY[b.category] ?? 99;
    return prioA - prioB;
  });

  // Assign clean sequential IDs
  return mediaList.map((item, idx) => ({
    ...item,
    id: idx + 1
  }));
};

// Curated preview set for Homepage
export const getHomeGalleryImages = () => {
  const allMedia = getAllGalleryMedia().filter(m => !m.isVideo);

  // Pick diverse high-impact highlights across different occasions
  const findInCategory = (cat) => allMedia.find(m => m.category === cat)?.url;

  const picks = [
    { id: 1, url: findInCategory('beach') || allMedia[0]?.url, caption: 'Beach Outing & Outdoor Bonding' },
    { id: 2, url: findInCategory('childrens_day') || allMedia[1]?.url, caption: 'Children’s Day Celebration' },
    { id: 3, url: findInCategory('planetarium') || allMedia[2]?.url, caption: 'Birla Planetarium Space Trip' },
    { id: 4, url: findInCategory('gifts') || allMedia[3]?.url, caption: 'Rewards & Student Recognition' },
    { id: 5, url: findInCategory('special_moments') || allMedia[4]?.url, caption: 'Special Birthday Milestone' },
    { id: 6, url: findInCategory('movie') || allMedia[5]?.url, caption: 'Cinema Day & Hard Work Treat' },
  ];

  return picks.filter(p => p.url);
};

// Curated occasion cards for the Homepage Gallery section
export const getOccasionCards = () => {
  const allMedia = getAllGalleryMedia();
  
  // Featured signature celebrations & outing categories
  const featuredIds = [
    'beach',
    'childrens_day',
    'planetarium',
    'movie',
    'classroom',
    'gifts',
    'special_moments',
    'restaurant'
  ];

  return featuredIds.map(id => {
    const occ = OCCASIONS_DATA.find(o => o.id === id);
    const mediaForOcc = allMedia.filter(m => m.category === id && !m.isVideo);
    const coverItem = mediaForOcc[0] || allMedia.find(m => m.category === id);

    return {
      id,
      title: occ ? occ.shortTitle : id,
      fullTitle: occ ? occ.title : id,
      tagline: occ ? occ.tagline : 'Celebrations & learning moments',
      icon: occ ? occ.icon : 'FaImages',
      count: mediaForOcc.length,
      coverUrl: coverItem ? coverItem.url : '',
      badge: occ ? occ.badge : 'Memories'
    };
  }).filter(card => card.coverUrl);
};
