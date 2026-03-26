import React from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({ url, caption, height = '300px' }) => {
  return (
    <motion.div 
      className="rounded overflow-hidden shadow-sm position-relative h-100 w-100"
      style={{ minHeight: height, backgroundColor: 'rgba(255,255,255,0.05)' }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 15px 30px rgba(0,0,0,0.5)"
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <img
        className="w-100 h-100"
        src={url}
        alt={caption || 'Rekha Learning Center Gallery Event'}
        style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
        loading="lazy"
      />
      {caption && (
        <motion.div 
          className="position-absolute bottom-0 start-0 w-100 p-3" 
          style={{ background: 'linear-gradient(to top, rgba(0,0,30,0.95), transparent 150%)', opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-white fw-medium">{caption}</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ImageCard;
