import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaBookOpen, FaLightbulb, FaAtom, 
  FaPencilAlt, FaCalculator, FaGlobe, FaFlask, 
  FaPalette, FaCompass, FaBrain, FaCertificate 
} from 'react-icons/fa';

const iconsList = [
  // Section 1: Hero area
  { icon: <FaGraduationCap size={45} />, top: '3%', left: '8%', delay: 0, duration: 10 },
  { icon: <FaBookOpen size={40} />, top: '6%', right: '10%', delay: 1.5, duration: 12 },
  { icon: <FaLightbulb size={35} />, top: '10%', left: '12%', delay: 0.5, duration: 9 },
  { icon: <FaAtom size={40} />, top: '14%', right: '8%', delay: 2, duration: 11 },
  
  // Section 2: About area
  { icon: <FaGlobe size={38} />, top: '22%', left: '6%', delay: 1, duration: 10 },
  { icon: <FaFlask size={35} />, top: '26%', right: '12%', delay: 0.5, duration: 11 },
  { icon: <FaPencilAlt size={32} />, top: '30%', left: '14%', delay: 2.5, duration: 9 },
  
  // Section 3: Courses area
  { icon: <FaCalculator size={35} />, top: '38%', right: '7%', delay: 1.2, duration: 12 },
  { icon: <FaPalette size={38} />, top: '44%', left: '8%', delay: 0.8, duration: 10 },
  { icon: <FaBookOpen size={40} />, top: '48%', right: '11%', delay: 1.8, duration: 11 },
  
  // Section 4: Methodology area
  { icon: <FaCompass size={36} />, top: '56%', left: '5%', delay: 2, duration: 10 },
  { icon: <FaGraduationCap size={42} />, top: '62%', right: '9%', delay: 0.3, duration: 12 },
  { icon: <FaAtom size={38} />, top: '66%', left: '10%', delay: 1.1, duration: 9 },
  
  // Section 5: Gallery area
  { icon: <FaBrain size={36} />, top: '74%', right: '12%', delay: 0.7, duration: 11 },
  { icon: <FaLightbulb size={35} />, top: '78%', left: '7%', delay: 1.5, duration: 10 },
  
  // Section 6: Testimonials & Contact
  { icon: <FaCertificate size={40} />, top: '85%', left: '11%', delay: 0.4, duration: 10 },
  { icon: <FaGlobe size={38} />, top: '95%', right: '10%', delay: 0.9, duration: 11 }
];

const FloatingBackground = () => {
  return (
    <div 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        overflow: 'hidden', 
        pointerEvents: 'none' 
      }}
    >
      {iconsList.map((item, idx) => (
        <motion.div
          key={idx}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            color: 'var(--primary-color)',
            opacity: 0.025,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          animate={{
            y: [0, -14, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBackground;
