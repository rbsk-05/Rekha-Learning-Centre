import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  FaImages, FaUmbrellaBeach, FaRocket, FaFilm, FaChild, 
  FaGift, FaHeart, FaUtensils, FaShoppingBag, FaBookOpen, 
  FaPlayCircle, FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight,
  FaSearch, FaExpand
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

  const BATCH_SIZE = 24;
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const loadMoreRef = useRef(null);

  // Reset visibleCount whenever category switches
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [activeCategory]);

  // Progressive batch loading when scrolling near the bottom for instantaneous tab switches
  useEffect(() => {
    if (visibleCount >= filteredMedia.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredMedia.length));
        }
      },
      { rootMargin: '350px' }
    );

    const el = loadMoreRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [visibleCount, filteredMedia.length]);

  const displayedMedia = useMemo(() => {
    return filteredMedia.slice(0, visibleCount);
  }, [filteredMedia, visibleCount]);

  // Image-only list for the Lightbox modal traversal
  const lightboxImages = useMemo(() => {
    return filteredMedia.filter(item => !item.isVideo);
  }, [filteredMedia]);

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

  // Lock body scroll while Lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  // Touch swipe support for mobile
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;
    
    // Swipe horizontal if deltaX > 40px and more horizontal than vertical
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        nextImage(); // Swiped left -> next image
      } else {
        prevImage(); // Swiped right -> prev image
      }
    } else if (diffY < -80 && Math.abs(diffY) > Math.abs(diffX)) {
      closeLightbox(); // Swiped down -> close
    }
  };

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
      
      <main style={{ paddingTop: '110px', backgroundColor: '#ffffff', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
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
              <Row className="g-3 g-md-4">
                {displayedMedia.map((item) => (
                  <Col key={item.id} xs={6} md={4} lg={3}>
                    {item.isVideo ? (
                      /* Video Card */
                      <div 
                        className="gallery-card position-relative overflow-hidden rounded-4 bg-black border shadow-sm h-100"
                        style={{ 
                          borderColor: 'var(--border-light)', 
                          aspectRatio: '4 / 3'
                        }}
                      >
                        <video 
                          src={item.url} 
                          controls 
                          playsInline 
                          preload="metadata"
                          className="w-100 h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ) : (
                      /* Photo Card - Clean, Tag-Free, Smooth & Fast */
                      <div 
                        className="gallery-card position-relative overflow-hidden rounded-4 bg-light border shadow-sm cursor-pointer h-100"
                        style={{ 
                          borderColor: 'var(--border-light)', 
                          aspectRatio: '4 / 3'
                        }}
                        onClick={() => openLightbox(item)}
                      >
                        <img 
                          src={item.thumbUrl || item.url} 
                          alt={item.title} 
                          className="gallery-card-img w-100 h-100"
                          style={{ objectFit: 'cover' }}
                          loading="lazy"
                          decoding="async"
                        />
                        
                        {/* Subtle expand hint on hover */}
                        <div className="gallery-card-hover-hint position-absolute bottom-0 end-0 m-2 pointer-events-none">
                          <span 
                            className="p-1 rounded-circle bg-white text-dark d-flex align-items-center justify-content-center shadow-sm"
                            style={{ width: '28px', height: '28px', opacity: 0.9 }}
                          >
                            <FaExpand size={12} />
                          </span>
                        </div>
                      </div>
                    )}
                  </Col>
                ))}
              </Row>
            )}

            {/* Progressive loading anchor */}
            {visibleCount < filteredMedia.length && (
              <div ref={loadMoreRef} style={{ height: '20px', width: '100%' }} />
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
                  <Button href={`${import.meta.env.BASE_URL}#contact`} className="btn-custom">
                    Enroll Today
                  </Button>
                  <Button href={`${import.meta.env.BASE_URL}#courses`} className="btn-outline-custom">
                    Browse Courses Offered
                  </Button>
                </div>
              </div>
            </div>

          </Container>
        </section>

        {/* Fullscreen Cinema Lightbox (No blue box, edge-to-edge viewer with Touch Swipe & PC buttons) */}
        {lightboxIndex !== null && lightboxImages[lightboxIndex] && (
          <div 
            className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-3 p-md-4"
            style={{ 
              zIndex: 10000, 
              backgroundColor: 'rgba(0, 0, 0, 0.94)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              userSelect: 'none'
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar: Counter & Close button */}
            <div className="d-flex justify-content-between align-items-center w-100" style={{ zIndex: 10002 }}>
              <span 
                className="badge rounded-pill px-3 py-2 fw-bold text-white shadow-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', fontSize: '0.82rem', backdropFilter: 'blur(8px)' }}
              >
                {lightboxIndex + 1} / {lightboxImages.length}
              </span>

              <button 
                onClick={closeLightbox}
                className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center border-0 shadow-sm"
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff'
                }}
                aria-label="Close Lightbox"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Central Stage: Left Button, Centered Swipeable Image, Right Button */}
            <div 
              className="position-relative d-flex align-items-center justify-content-center flex-grow-1 w-100 my-auto"
              style={{ overflow: 'hidden' }}
            >
              {/* Previous Button (PC) */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="lightbox-nav-btn position-absolute start-0 ms-2 ms-md-4 d-flex align-items-center justify-content-center rounded-circle border-0 shadow-lg"
                style={{ 
                  width: '52px', 
                  height: '52px', 
                  zIndex: 10002,
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
                aria-label="Previous Image"
              >
                <FaChevronLeft size={20} />
              </button>

              {/* Swipeable Main Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="d-flex align-items-center justify-content-center"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x < -40 || velocity.x < -300) {
                      nextImage();
                    } else if (offset.x > 40 || velocity.x > 300) {
                      prevImage();
                    }
                  }}
                  style={{ cursor: 'grab', touchAction: 'pan-y' }}
                >
                  <img 
                    src={lightboxImages[lightboxIndex].url}
                    alt={lightboxImages[lightboxIndex].title}
                    className="rounded-3 shadow-2xl"
                    style={{ 
                      maxHeight: '78vh', 
                      maxWidth: '88vw', 
                      objectFit: 'contain',
                      pointerEvents: 'auto',
                      userSelect: 'none'
                    }}
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next Button (PC) */}
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="lightbox-nav-btn position-absolute end-0 me-2 me-md-4 d-flex align-items-center justify-content-center rounded-circle border-0 shadow-lg"
                style={{ 
                  width: '52px', 
                  height: '52px', 
                  zIndex: 10002,
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
                aria-label="Next Image"
              >
                <FaChevronRight size={20} />
              </button>
            </div>



          </div>
        )}

      </main>

      <Footer />
    </>
  );
};

export default GalleryPage;
