import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ImageCard from './ImageCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

const GallerySection = ({ title, images }) => {
  if (!images || images.length === 0) return null;

  return (
    <motion.div 
      className="mb-5 pb-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h3 
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="fw-bold text-primary-custom mb-4 pb-2 d-inline-block border-bottom"
        style={{ borderColor: 'var(--secondary-color)', borderWidth: '2px' }}
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
