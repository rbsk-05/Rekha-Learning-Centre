import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ImageCard from './ImageCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const GallerySection = ({ title, images }) => {
  if (!images || images.length === 0) return null;

  return (
    <motion.div 
      className="mb-5 pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h3 
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="fw-bold text-accent-custom mb-4 border-bottom border-light pb-2 d-inline-block p-0"
      >
        {title}
      </motion.h3>
      
      <Row className="g-4">
        {images.map((imgUrl, imgIdx) => (
          <Col key={imgIdx} xs={12} md={4} as={motion.div} variants={itemVariants}>
            <ImageCard url={imgUrl} caption={`${title} ${imgIdx + 1}`} height="250px" />
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default GallerySection;
