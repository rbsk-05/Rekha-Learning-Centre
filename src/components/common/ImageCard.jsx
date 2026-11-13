import React from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({ url, caption, height = '300px' }) => {
  return (
    <motion.div 
      className="rounded-4 overflow-hidden shadow-sm position-relative h-100 w-100 border"
      style={{ minHeight: height, backgroundColor: '#f1f5f9', borderColor: 'var(--border-light)' }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(3, 35, 91, 0.1)"
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <img
        className="w-100 h-100"
        src={url}
        alt={caption || 'Rekha Learning Centre Gallery Event'}
        style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
        loading="lazy"
      />
      {caption && (
        <motion.div 
          className="position-absolute bottom-0 start-0 w-100 p-3" 
          style={{ background: 'linear-gradient(to top, rgba(3, 35, 91, 0.85), transparent 120%)', opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-white fw-medium small">{caption}</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ImageCard;
