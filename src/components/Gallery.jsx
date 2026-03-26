import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getHomeGalleryImages } from '../utils/imageMapper';
import ImageCard from './common/ImageCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 15 } }
};

const Gallery = () => {
  const images = getHomeGalleryImages();

  return (
    <section id="gallery" className="section-padding">
      <Container>
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-6 fw-bold text-light text-sweep-hover">Our Gallery</h2>
          <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)' }}></div>
          <p className="text-muted mt-3 mb-0">Glimpses of activities at Rekha Learning Center</p>
        </motion.div>

        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           variants={containerVariants}
        >
          <Row className="g-4">
            {images.map(img => (
              <Col key={img.id} xs={12} sm={6} md={4} as={motion.div} variants={itemVariants}>
                <ImageCard url={img.url} caption={img.caption} height="300px" />
              </Col>
            ))}
          </Row>
        </motion.div>
        
        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/gallery" style={{ textDecoration: 'none' }}>
            <motion.button 
              className="btn-custom px-5 py-3 rounded-pill border-0"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 0px 15px 5px rgba(212, 175, 55, 0.4)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Gallery & Events
            </motion.button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Gallery;
