import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import GallerySection from '../components/common/GallerySection';
import { getCategorizedImages } from '../utils/imageMapper';

const GalleryPage = () => {
  const categories = getCategorizedImages();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '100px', backgroundColor: 'var(--primary-color)', minHeight: '80vh' }}>
        <Container className="py-5">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="display-4 fw-bold text-light text-sweep-hover">Full Event Gallery</h1>
            <div className="mx-auto" style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)' }}></div>
            <p className="text-muted mt-3 fs-5">Memories and celebrations at Rekha Learning Center</p>
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
