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
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

const Gallery = () => {
  const images = getHomeGalleryImages();

  return (
    <section id="gallery" className="section-padding bg-white">
      <Container>
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="display-6 fw-bold text-primary-custom mb-3">Our Gallery</h2>
          <div className="section-accent-line mx-auto mb-3"></div>
          <p className="text-muted mb-0">Glimpses of activities and celebrations at Rekha Learning Centre</p>
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
                <ImageCard url={img.url} caption={img.caption} height="280px" />
              </Col>
            ))}
          </Row>
        </motion.div>
        
        <div className="text-center mt-5">
          <Link to="/gallery" style={{ textDecoration: 'none' }}>
            <button className="btn btn-custom">
              View Full Gallery & Events
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
