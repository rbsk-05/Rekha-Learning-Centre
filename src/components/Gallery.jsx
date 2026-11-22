import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaUmbrellaBeach, FaChild, FaRocket, FaFilm, 
  FaBookOpen, FaGift, FaHeart, FaUtensils, 
  FaArrowRight, FaImages 
} from 'react-icons/fa';
import { getOccasionCards } from '../utils/imageMapper';

// Icon resolver for occasion cards
const getOccasionIcon = (iconName, size = 18) => {
  switch (iconName) {
    case 'FaUmbrellaBeach': return <FaUmbrellaBeach size={size} />;
    case 'FaRocket': return <FaRocket size={size} />;
    case 'FaFilm': return <FaFilm size={size} />;
    case 'FaChild': return <FaChild size={size} />;
    case 'FaGift': return <FaGift size={size} />;
    case 'FaHeart': return <FaHeart size={size} />;
    case 'FaUtensils': return <FaUtensils size={size} />;
    case 'FaBookOpen': return <FaBookOpen size={size} />;
    default: return <FaImages size={size} />;
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

const Gallery = () => {
  const cards = getOccasionCards();

  return (
    <section id="gallery" className="section-padding bg-white">
      <Container>
        
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="display-6 fw-bold text-primary-custom mb-3">Celebrations & Life at Our Centre</h2>
          <div className="section-accent-line mx-auto mb-3"></div>
          <p className="text-muted mb-0 fs-6 mx-auto" style={{ maxWidth: '680px' }}>
            A glimpse into the joy, milestones, and expeditions that make childhood at Rekha Learning Centre memorable.
          </p>
        </motion.div>

        {/* Occasion Cards Grid */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           variants={containerVariants}
        >
          <Row className="g-4">
            {cards.map((card) => (
              <Col key={card.id} xs={12} sm={6} lg={3} as={motion.div} variants={itemVariants}>
                <Link 
                  to={`/gallery?category=${card.id}`} 
                  className="text-decoration-none text-dark h-100 d-block"
                >
                  <motion.div 
                    className="hover-card bg-white h-100 d-flex flex-column rounded-4 overflow-hidden border shadow-sm"
                    style={{ borderColor: 'var(--border-light)' }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Cover Image Header */}
                    <div className="position-relative overflow-hidden" style={{ height: '185px', backgroundColor: '#f1f5f9' }}>
                      <img 
                        src={card.coverUrl} 
                        alt={card.title} 
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                        loading="lazy"
                      />

                      {/* Subtle photo indicator pill */}
                      <div className="position-absolute top-0 end-0 m-2">
                        <span 
                          className="badge rounded-pill px-2 py-1 d-flex align-items-center justify-content-center"
                          style={{ 
                            backgroundColor: 'rgba(0, 0, 0, 0.45)', 
                            backdropFilter: 'blur(6px)',
                            color: '#ffffff',
                            width: '28px',
                            height: '28px'
                          }}
                          title="View Album"
                        >
                          <FaImages size={12} />
                        </span>
                      </div>
                      
                      {/* Subtle Dark Gradient Overlay at Bottom */}
                      <div 
                        className="position-absolute bottom-0 start-0 w-100 p-2" 
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}
                      />
                    </div>

                    {/* Card Content Body */}
                    <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                      
                      {/* Top Row: Occasion Logo/Icon, Main Title & Arrow Indicator */}
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <span 
                            className="p-2 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                            style={{ 
                              backgroundColor: 'rgba(174, 5, 88, 0.08)', 
                              color: 'var(--secondary-color)',
                              width: '32px',
                              height: '32px'
                            }}
                          >
                            {getOccasionIcon(card.icon, 14)}
                          </span>
                          <h5 className="fw-bold text-dark mb-0 fs-6">
                            {card.title}
                          </h5>
                        </div>

                        {/* Inline compact arrow indicator */}
                        <span 
                          className="gallery-card-arrow-btn rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                          aria-label={`View ${card.title} memories`}
                        >
                          <FaArrowRight size={11} />
                        </span>
                      </div>

                      {/* Sub-text: Category Badge */}
                      <div className="small text-uppercase fw-bold text-secondary-custom tracking-wide mb-2" style={{ fontSize: '0.72rem' }}>
                        {card.badge}
                      </div>

                      {/* Description / Tagline */}
                      <p className="text-muted small mb-0 flex-grow-1" style={{ lineHeight: '1.5' }}>
                        {card.tagline}
                      </p>

                    </div>
                  </motion.div>
                </Link>
              </Col>
            ))}
          </Row>
        </motion.div>
        
        {/* Master Call-to-Action to Full Gallery */}
        <div className="text-center mt-5 pt-3">
          <Link to="/gallery" style={{ textDecoration: 'none' }}>
            <button className="btn btn-custom px-5 py-3 rounded-pill fw-bold shadow-sm">
              View Memories <FaArrowRight className="ms-2" size={13} />
            </button>
          </Link>
        </div>

      </Container>
    </section>
  );
};

export default Gallery;
