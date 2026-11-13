import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Container, Row, Col, Badge, Modal, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  FaImages, FaUmbrellaBeach, FaRocket, FaFilm, FaChild, 
  FaGift, FaHeart, FaUtensils, FaShoppingBag, FaBookOpen, 
  FaPlayCircle, FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight,
  FaCheckCircle, FaSearch, FaExpand
} from 'react-icons/fa';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FloatingBackground from '../components/common/FloatingBackground';
import { OCCASIONS_DATA, getAllGalleryMedia } from '../utils/imageMapper';

// Icon resolver for category pills
const getOccasionIcon = (iconName, size = 18) => {
  switch (iconName) {
    case 'FaUmbrellaBeach': return <FaUmbrellaBeach size={size} />;
    case 'FaRocket': return <FaRocket size={size} />;
    case 'FaFilm': return <FaFilm size={size} />;
    case 'FaChild': return <FaChild size={size} />;
    case 'FaGift': return <FaGift size={size} />;
    case 'FaHeart': return <FaHeart size={size} />;
    case 'FaUtensils': return <FaUtensils size={size} />;
    case 'FaShoppingBag': return <FaShoppingBag size={size} />;
    case 'FaBookOpen': return <FaBookOpen size={size} />;
    case 'FaPlayCircle': return <FaPlayCircle size={size} />;
    default: return <FaImages size={size} />;
  }
};

const GalleryPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(
    initialCategory && OCCASIONS_DATA.some(o => o.id === initialCategory) 
      ? initialCategory 
      : 'all'
  );
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [allMedia, setAllMedia] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setAllMedia(getAllGalleryMedia());
    const cat = searchParams.get('category');
    if (cat && OCCASIONS_DATA.some(o => o.id === cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  // Filtered media by active category
  const filteredMedia = useMemo(() => {
    if (activeCategory === 'all') {
      return allMedia;
    }
    return allMedia.filter(item => item.category === activeCategory);
  }, [allMedia, activeCategory]);

  // Image-only list for the Lightbox modal traversal
  const lightboxImages = useMemo(() => {
    return filteredMedia.filter(item => !item.isVideo);
  }, [filteredMedia]);

  // Currently active occasion story metadata
  const currentOccasion = useMemo(() => {
    return OCCASIONS_DATA.find(occ => occ.id === activeCategory) || OCCASIONS_DATA[0];
  }, [activeCategory]);

  // Lightbox handlers
  const openLightbox = (imageItem) => {
    const idx = lightboxImages.findIndex(img => img.id === imageItem.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxImages.length - 1));
  }, [lightboxIndex, lightboxImages.length]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev < lightboxImages.length - 1 ? prev + 1 : 0));
  }, [lightboxIndex, lightboxImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, prevImage, nextImage]);

  // Calculate counts per category
  const counts = useMemo(() => {
    const map = { all: allMedia.length };
    allMedia.forEach(m => {
      map[m.category] = (map[m.category] || 0) + 1;
    });
    return map;
  }, [allMedia]);

  return (
    <>
      <Navigation />
      
      <main style={{ paddingTop: '110px', backgroundColor: '#ffffff', minHeight: '100vh', position: 'relative' }}>
        <FloatingBackground />

        {/* Storytelling Header */}
        <section className="py-5 border-bottom" style={{ background: 'linear-gradient(180deg, #f8fafd 0%, #ffffff 100%)' }}>
          <Container>
            <div className="text-center mx-auto" style={{ maxWidth: '840px' }}>
              
              <div className="d-block mb-3">
                <span 
                  className="badge rounded-pill px-3 py-2 text-uppercase tracking-wide fw-bold"
                  style={{ 
                    backgroundColor: 'rgba(174, 5, 88, 0.08)', 
                    color: 'var(--secondary-color)', 
                    border: '1px solid rgba(174, 5, 88, 0.2)',
                    fontSize: '0.8rem'
                  }}
                >
                  🌟 Life at Rekha Learning Centre
                </span>
              </div>

              <h1 className="display-5 fw-bold text-primary-custom mb-3" style={{ letterSpacing: '-0.5px' }}>
                Where Education Feels Like Family & Childhood Thrives
              </h1>

              {/* Trust Indicators / Experience Ticker */}
              <div className="d-flex flex-wrap justify-content-center gap-3 mt-4 pt-2">
                <div className="px-3 py-2 rounded-pill bg-white border shadow-sm d-flex align-items-center gap-2">
                  <span className="text-secondary-custom fw-bold">10+</span>
                  <span className="small text-muted">Years of Excellence</span>
                </div>
                <div className="px-3 py-2 rounded-pill bg-white border shadow-sm d-flex align-items-center gap-2">
                  <span className="text-accent-custom fw-bold">9+</span>
                  <span className="small text-muted">Curated Outing Occasions</span>
                </div>
                <div className="px-3 py-2 rounded-pill bg-white border shadow-sm d-flex align-items-center gap-2">
                  <span className="text-green-custom fw-bold">{allMedia.length}</span>
                  <span className="small text-muted">Real Captured Moments</span>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* Interactive Occasion Traversal Navigation */}
        <section className="py-4 border-bottom sticky-top bg-white" style={{ zIndex: 10, boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <Container>
            <div className="d-flex align-items-center gap-2 overflow-x-auto py-2 no-scrollbar" style={{ scrollbarWidth: 'none', whiteSpace: 'nowrap' }}>
              {OCCASIONS_DATA.map((occ) => {
                const isActive = activeCategory === occ.id;
                const count = counts[occ.id] || 0;
                
                return (
                  <button
                    key={occ.id}
                    onClick={() => setActiveCategory(occ.id)}
                    className="btn rounded-pill d-inline-flex align-items-center gap-2 px-3 py-2 text-nowrap border-0 shadow-none"
                    style={{
                      backgroundColor: isActive ? 'var(--secondary-color)' : '#f1f5f9',
                      color: isActive ? '#ffffff' : '#334155',
                      fontWeight: isActive ? '700' : '500',
                      fontSize: '0.9rem',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <span style={{ color: isActive ? '#ffffff' : 'var(--primary-color)' }}>
                      {getOccasionIcon(occ.icon, 15)}
                    </span>
                    <span>{occ.shortTitle}</span>
                    <span 
                      className="badge rounded-pill small"
                      style={{ 
                        backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : '#e2e8f0', 
                        color: isActive ? '#ffffff' : '#64748b',
                        fontSize: '0.72rem',
                        padding: '4px 7px'
                      }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Narrative Spotlight Banner for Active Occasion */}
        <section className="py-5" style={{ backgroundColor: '#f8fafc' }}>
          <Container>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentOccasion.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="bg-white p-4 p-md-5 rounded-4 border shadow-sm"
                style={{ borderColor: 'var(--border-light)' }}
              >
                <Row className="align-items-center g-4">
                  <Col lg={8}>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="p-2 rounded-circle bg-light text-secondary-custom d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
                        {getOccasionIcon(currentOccasion.icon, 20)}
                      </span>
                      <span className="fw-bold text-uppercase small text-secondary-custom tracking-wide">
                        {currentOccasion.badge}
                      </span>
                    </div>

                    <h2 className="display-6 fw-bold text-primary-custom mb-3">
                      {currentOccasion.title}
                    </h2>
                    
                    <h5 className="fw-medium text-dark mb-3 opacity-90" style={{ lineHeight: '1.5' }}>
                      "{currentOccasion.tagline}"
                    </h5>

                    <p className="text-muted mb-4 fs-6" style={{ lineHeight: '1.8' }}>
                      {currentOccasion.story}
                    </p>

                    <div className="d-flex flex-wrap gap-2">
                      {currentOccasion.highlights.map((h, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-pill small fw-semibold d-inline-flex align-items-center gap-1 bg-light border"
                          style={{ color: 'var(--primary-color)', borderColor: 'var(--border-light)' }}
                        >
                          <FaCheckCircle className="text-green-custom" size={12} /> {h}
                        </span>
                      ))}
                    </div>
                  </Col>

                  <Col lg={4} className="text-center border-start-lg ps-lg-4 d-none d-lg-block">
                    <div className="p-4 rounded-4" style={{ backgroundColor: '#f8fafc', border: '1px dashed var(--border-light)' }}>
                      <div className="display-4 fw-bold text-secondary-custom mb-1">
                        {counts[currentOccasion.id] || filteredMedia.length}
                      </div>
                      <div className="text-dark fw-bold mb-2">Captured Moments</div>
                      <p className="small text-muted mb-0">
                        Every photograph tells a story of care, genuine mentorship, and memorable growth.
                      </p>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            </AnimatePresence>
          </Container>
        </section>

        {/* Media Grid Section */}
        <section className="py-5 bg-white">
          <Container>
            
            {filteredMedia.length === 0 ? (
              <div className="text-center py-5">
                <FaImages size={48} className="text-muted opacity-50 mb-3" />
                <h4 className="text-dark fw-bold">No items found in this section</h4>
                <p className="text-muted">Select another category to view memories.</p>
              </div>
            ) : (
              <Row className="g-4">
                {filteredMedia.map((item, idx) => (
                  <Col key={item.id} xs={12} sm={6} lg={4}>
                    {item.isVideo ? (
                      /* Video Card */
                      <motion.div 
                        className="bg-white rounded-4 overflow-hidden border shadow-sm h-100 d-flex flex-column"
                        style={{ borderColor: 'var(--border-light)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                      >
                        <div className="position-relative" style={{ backgroundColor: '#000', height: '240px' }}>
                          <video 
                            src={item.url} 
                            controls 
                            playsInline 
                            preload="metadata"
                            className="w-100 h-100"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className="p-3 mt-auto">
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <span className="badge rounded-pill bg-light text-secondary-custom small border">
                              <FaPlayCircle className="me-1" /> Live Video
                            </span>
                            <small className="text-muted">Clip #{idx + 1}</small>
                          </div>
                          <h6 className="fw-bold text-dark mb-0 mt-2">{item.title}</h6>
                        </div>
                      </motion.div>
                    ) : (
                      /* Photo Card with Lightbox Trigger */
                      <motion.div 
                        className="rounded-4 overflow-hidden border shadow-sm position-relative cursor-pointer h-100"
                        style={{ 
                          borderColor: 'var(--border-light)', 
                          backgroundColor: '#f8fafc',
                          height: '280px',
                          cursor: 'pointer'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                        whileHover={{ y: -5, boxShadow: '0 12px 25px rgba(3, 35, 91, 0.08)' }}
                        onClick={() => openLightbox(item)}
                      >
                        <img 
                          src={item.url} 
                          alt={item.title} 
                          className="w-100 h-100"
                          style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay with Caption & Zoom Prompt */}
                        <div 
                          className="position-absolute top-0 start-0 w-100 h-100 p-3 d-flex flex-column justify-content-between text-white"
                          style={{ 
                            background: 'linear-gradient(180deg, rgba(3, 35, 91, 0.4) 0%, transparent 40%, rgba(3, 35, 91, 0.88) 100%)',
                            opacity: 0,
                            transition: 'opacity 0.25s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                          onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="badge bg-white text-dark small rounded-pill px-2 py-1 shadow-sm">
                              {OCCASIONS_DATA.find(o => o.id === item.category)?.shortTitle || 'Tuition Life'}
                            </span>
                            <span className="p-2 rounded-circle bg-white text-dark d-flex align-items-center justify-content-center shadow-sm" style={{ width: '32px', height: '32px' }}>
                              <FaExpand size={12} />
                            </span>
                          </div>

                          <div>
                            <h6 className="fw-bold mb-1 text-white">{item.title}</h6>
                            <small className="text-white-50">Click to view in high definition</small>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </Col>
                ))}
              </Row>
            )}

            {/* Bottom Invitation to Enroll */}
            <div className="mt-5 pt-4 text-center">
              <div 
                className="p-4 p-md-5 rounded-4 border text-center mx-auto"
                style={{ 
                  maxWidth: '750px',
                  backgroundColor: '#f8fafc',
                  borderColor: 'var(--border-light)'
                }}
              >
                <h3 className="fw-bold text-primary-custom mb-3">
                  Want Your Child to Experience This Supportive Growth?
                </h3>
                <p className="text-muted mb-4">
                  Join Rekha Learning Centre for coaching from 2nd to 10th standard (CBSE, ICSE & State Board). Give your child academic strength, moral grounding, and joyful memories.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Button href="/#contact" className="btn-custom">
                    Enroll Today
                  </Button>
                  <Button href="/#courses" className="btn-outline-custom">
                    Browse Courses Offered
                  </Button>
                </div>
              </div>
            </div>

          </Container>
        </section>

        {/* Fullscreen Mesmerizing Lightbox Modal */}
        <Modal 
          show={lightboxIndex !== null} 
          onHide={closeLightbox}
          centered 
          size="xl"
          fullscreen="md-down"
          contentClassName="border-0 bg-transparent shadow-none"
        >
          <div 
            className="position-relative w-100 h-100 p-2 p-md-4 rounded-4"
            style={{ 
              backgroundColor: 'rgba(2, 23, 61, 0.95)', 
              backdropFilter: 'blur(16px)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)'
            }}
          >
            {/* Lightbox Header Bar */}
            <div className="d-flex justify-content-between align-items-center mb-3 px-2">
              <div className="d-flex align-items-center gap-2">
                <span className="badge rounded-pill bg-light text-dark px-3 py-2 fw-bold">
                  {lightboxIndex !== null && (OCCASIONS_DATA.find(o => o.id === lightboxImages[lightboxIndex]?.category)?.shortTitle || 'Moment')}
                </span>
                <span className="text-white-50 small">
                  {lightboxIndex !== null ? `${lightboxIndex + 1} of ${lightboxImages.length}` : ''}
                </span>
              </div>

              <button 
                onClick={closeLightbox}
                className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center border-0 shadow-sm"
                style={{ width: '40px', height: '40px' }}
                aria-label="Close Lightbox"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Main Stage & Navigation Arrows */}
            <div className="position-relative d-flex align-items-center justify-content-center" style={{ minHeight: '65vh', maxHeight: '78vh' }}>
              
              {/* Previous Button */}
              <button 
                onClick={prevImage}
                className="btn btn-light rounded-circle position-absolute start-0 ms-2 ms-md-4 z-3 d-flex align-items-center justify-content-center shadow-lg border-0"
                style={{ width: '48px', height: '48px', opacity: 0.9 }}
                aria-label="Previous Image"
              >
                <FaChevronLeft size={18} />
              </button>

              {/* Main Image */}
              {lightboxIndex !== null && lightboxImages[lightboxIndex] && (
                <motion.img 
                  key={lightboxImages[lightboxIndex].id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  src={lightboxImages[lightboxIndex].url}
                  alt={lightboxImages[lightboxIndex].title}
                  className="rounded-3 shadow-lg"
                  style={{ 
                    maxHeight: '72vh', 
                    maxWidth: '100%', 
                    objectFit: 'contain' 
                  }}
                />
              )}

              {/* Next Button */}
              <button 
                onClick={nextImage}
                className="btn btn-light rounded-circle position-absolute end-0 me-2 me-md-4 z-3 d-flex align-items-center justify-content-center shadow-lg border-0"
                style={{ width: '48px', height: '48px', opacity: 0.9 }}
                aria-label="Next Image"
              >
                <FaChevronRight size={18} />
              </button>
            </div>

            {/* Lightbox Caption Footer */}
            {lightboxIndex !== null && lightboxImages[lightboxIndex] && (
              <div className="text-center mt-3 pt-2 border-top border-secondary border-opacity-25 px-3">
                <h5 className="fw-bold text-white mb-1">
                  {lightboxImages[lightboxIndex].title}
                </h5>
                <p className="text-white-50 small mb-0">
                  Rekha Learning Centre Memory Collection • Use Left / Right arrow keys to navigate
                </p>
              </div>
            )}

          </div>
        </Modal>

      </main>

      <Footer />
    </>
  );
};

export default GalleryPage;
