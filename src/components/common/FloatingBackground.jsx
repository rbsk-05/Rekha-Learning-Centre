import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  FaGraduationCap, FaBookOpen, FaLightbulb, FaAtom, 
  FaPencilAlt, FaCalculator, FaGlobe, FaPalette, 
  FaCompass, FaCertificate, FaStar, FaAward, 
  FaHeart, FaPaperPlane
} from 'react-icons/fa';

// Subtle, well-spaced educational doodles distributed across scroll sections
const doodles = [
  // Section 1: Hero area
  { icon: <FaGraduationCap size={40} />, top: '4%', left: '3.5%', color: 'var(--primary-color)', opacity: 0.08, duration: 11, delay: 0 },
  { icon: <FaLightbulb size={34} />, top: '9%', right: '3.5%', color: 'var(--accent-color)', opacity: 0.085, duration: 12, delay: 1.5 },

  // Section 2: About area
  { icon: <FaBookOpen size={38} />, top: '19%', left: '3%', color: 'var(--secondary-color)', opacity: 0.08, duration: 13, delay: 0.8 },
  { icon: <FaGlobe size={36} />, top: '25%', right: '4%', color: 'var(--leaf-green)', opacity: 0.075, duration: 10, delay: 2.0 },

  // Section 3: Courses area
  { icon: <FaPencilAlt size={32} />, top: '34%', left: '3.5%', color: 'var(--accent-color)', opacity: 0.08, duration: 12, delay: 1.1 },
  { icon: <FaCalculator size={34} />, top: '41%', right: '3%', color: 'var(--primary-color)', opacity: 0.08, duration: 14, delay: 0.4 },

  // Section 4: Methodology area
  { icon: <FaCompass size={36} />, top: '50%', left: '3%', color: 'var(--leaf-green)', opacity: 0.075, duration: 11, delay: 1.8 },
  { icon: <FaAtom size={38} />, top: '57%', right: '4%', color: 'var(--secondary-color)', opacity: 0.08, duration: 13, delay: 0.7 },

  // Section 5: Gallery area
  { icon: <FaPalette size={36} />, top: '66%', left: '3.5%', color: 'var(--accent-color)', opacity: 0.08, duration: 10, delay: 2.2 },
  { icon: <FaStar size={32} />, top: '72%', right: '3.5%', color: 'var(--primary-color)', opacity: 0.085, duration: 12, delay: 1.0 },

  // Section 6: Testimonials area
  { icon: <FaHeart size={30} />, top: '80%', left: '3%', color: 'var(--secondary-color)', opacity: 0.075, duration: 14, delay: 0.5 },
  { icon: <FaCertificate size={36} />, top: '86%', right: '4%', color: 'var(--leaf-green)', opacity: 0.08, duration: 11, delay: 1.7 },

  // Section 7: Contact area
  { icon: <FaPaperPlane size={32} />, top: '92%', left: '3.5%', color: 'var(--primary-color)', opacity: 0.08, duration: 12, delay: 2.5 },
  { icon: <FaAward size={36} />, top: '97%', right: '3%', color: 'var(--accent-color)', opacity: 0.085, duration: 13, delay: 0.9 }
];

// Interactive individual doodle with cursor proximity repulsion and grab/push physics
const InteractiveDoodle = ({ item }) => {
  const doodleRef = useRef(null);

  // Motion values for repulsion push from mouse proximity
  const mousePushX = useMotionValue(0);
  const mousePushY = useMotionValue(0);
  const mouseRotate = useMotionValue(0);

  // Spring physics for natural elastic response and rebound
  const springConfig = { stiffness: 220, damping: 20 };
  const smoothX = useSpring(mousePushX, springConfig);
  const smoothY = useSpring(mousePushY, springConfig);
  const smoothRotate = useSpring(mouseRotate, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!doodleRef.current) return;
      
      const rect = doodleRef.current.getBoundingClientRect();
      
      // Skip calculations if doodle is currently outside the viewport
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;
      
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const dist = Math.hypot(deltaX, deltaY);
      
      const interactionRadius = 130; // Radius where cursor repels / pushes the doodle
      
      if (dist < interactionRadius && dist > 0) {
        // Calculate repulsion strength (pushes stronger when closer)
        const intensity = (1 - dist / interactionRadius);
        const maxPush = 55; // Up to 55px push
        const pushDist = intensity * maxPush;
        const angle = Math.atan2(deltaY, deltaX);
        
        // Push in opposite direction from cursor
        mousePushX.set(-Math.cos(angle) * pushDist);
        mousePushY.set(-Math.sin(angle) * pushDist);
        mouseRotate.set(-Math.sin(angle) * 18);
      } else {
        // Smoothly return to center when mouse leaves proximity
        mousePushX.set(0);
        mousePushY.set(0);
        mouseRotate.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mousePushX, mousePushY, mouseRotate]);

  return (
    <motion.div
      ref={doodleRef}
      style={{
        position: 'absolute',
        top: item.top,
        left: item.left,
        right: item.right,
        x: smoothX,
        y: smoothY,
        rotate: smoothRotate,
        color: item.color,
        opacity: item.opacity,
        pointerEvents: 'auto', // Allows hover, repulsion, and drag
        cursor: 'grab',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        touchAction: 'none'
      }}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.35}
      dragTransition={{ bounceStiffness: 280, bounceDamping: 18 }}
      whileHover={{ 
        scale: 1.25, 
        opacity: 0.28,
        transition: { duration: 0.2 } 
      }}
      whileDrag={{ 
        scale: 1.4, 
        opacity: 0.45,
        cursor: 'grabbing',
        transition: { duration: 0.1 } 
      }}
    >
      {/* Inner ambient gentle float so doodle continues its living rhythm */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          rotate: [0, 4, -4, 0]
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
    </motion.div>
  );
};

const FloatingBackground = () => {
  return (
    <div 
      aria-hidden="true"
      className="floating-doodles-layer"
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1, 
        overflow: 'hidden', 
        pointerEvents: 'none' 
      }}
    >
      {doodles.map((item, idx) => (
        <InteractiveDoodle key={idx} item={item} />
      ))}
    </div>
  );
};

export default FloatingBackground;
