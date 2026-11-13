import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import GallerySection from '../components/common/GallerySection';
import { getCategorizedImages } from '../utils/imageMapper';
import FloatingBackground from '../components/common/FloatingBackground';

const GalleryPage = () => {
  const categories = getCategorizedImages();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-main)', minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
        <FloatingBackground />
        <Container className="py-5">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="display-5 fw-bold text-primary-custom mb-3">Full Event Gallery</h1>
            <div className="section-accent-line mx-auto mb-3"></div>
            <p className="text-muted fs-5">Memories and celebrations at Rekha Learning Centre</p>
          </motion.div>

          <GallerySection title="Special Days Celebrated" images={categories.specialDays} />
          <GallerySection title="Children's Day & Celebrations" images={categories.celebrations} />
          <GallerySection title="Rewards & Gifts" images={categories.gifts} />
          <GallerySection title="Outings with Students" images={categories.outings} />
          <GallerySection title="Tuition Pictures" images={categories.tuitionPictures} />
          
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
