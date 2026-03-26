// Fallback placeholders if the local /images directory mapping fails or is empty.
const fallbacks = {
  outings: ['https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=600&q=80'],
  celebrations: ['https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'],
  gifts: ['https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80'],
  specialDays: ['https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80']
};

export const getCategorizedImages = () => {
  const categories = {
    outings: [],
    celebrations: [],
    gifts: [],
    specialDays: [],
    tuitionPictures: []
  };

  try {
    // Attempt dynamic import. Vite will error at runtime if the directory doesn't exist, we use a global try-catch equivalent by verifying the import works.
    const imageFiles = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,svg,webp,avif}', { eager: true, import: 'default' });
    
    // We only process if keys exist
    if (Object.keys(imageFiles).length === 0) throw new Error("Empty images directory");

    Object.entries(imageFiles).forEach(([path, url]) => {
      const filename = path.split('/').pop().toLowerCase();
      
      if (filename.startsWith('o')) categories.outings.push(url);
      else if (filename.startsWith('c')) categories.celebrations.push(url);
      else if (filename.startsWith('g')) categories.gifts.push(url);
      else if (filename.startsWith('s')) categories.specialDays.push(url);
      else categories.tuitionPictures.push(url); // Unknown map to tuition pictures
    });
    
  } catch (error) {
    // Feed fallbacks if the physical images dir mapping has issues or is entirely missing
    console.warn("Loading fallback images because local /src/assets/images parsing failed:", error);
    return { ...fallbacks, tuitionPictures: [] };
  }

  return categories;
};

export const getHomeGalleryImages = () => {
  const allCategorized = getCategorizedImages();
  
  // Specific instruction: exactly 6 images (2 Outings, 2 Celebrations, 1 Gift, 1 Special Event)
  const homeImages = [
    ...(allCategorized.outings.length > 0 ? allCategorized.outings.slice(0, 2) : fallbacks.outings.slice(0, 2)),
    ...(allCategorized.celebrations.length > 0 ? allCategorized.celebrations.slice(0, 2) : fallbacks.celebrations.slice(0, 2)),
    ...(allCategorized.gifts.length > 0 ? allCategorized.gifts.slice(0, 1) : fallbacks.gifts.slice(0, 1)),
    ...(allCategorized.specialDays.length > 0 ? allCategorized.specialDays.slice(0, 1) : fallbacks.specialDays.slice(0, 1))
  ];
  
  return homeImages.map((url, idx) => {
    let caption = 'Tuition Moments';
    if (allCategorized.outings.includes(url) || fallbacks.outings.includes(url)) caption = 'Outing with Students';
    else if (allCategorized.celebrations.includes(url) || fallbacks.celebrations.includes(url)) caption = 'Celebration Event';
    else if (allCategorized.gifts.includes(url) || fallbacks.gifts.includes(url)) caption = 'Rewards & Gifts';
    else if (allCategorized.specialDays.includes(url) || fallbacks.specialDays.includes(url)) caption = 'Special Day';
    
    return { id: idx + 1, url, caption };
  });
};
