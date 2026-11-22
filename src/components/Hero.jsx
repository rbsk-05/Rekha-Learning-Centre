import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import swastikImg from '../assets/swastik.png';
import mentorImg from '../assets/mentor_v2_clean.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero-section d-flex flex-column justify-content-center align-items-center text-center position-relative"
    >
      {/* Centered Hero Content / Branding */}
      <Container style={{ zIndex: 3, position: 'relative' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} xl={7} className="d-flex flex-column align-items-center text-center">

            {/* Hero Main Heading: Singular Deep Royal Navy, dotless i, and crisp clean red swastik dot */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="display-4 fw-bold mb-3 hero-title"
              aria-label="Rekha Learning Centre"
            >
              Rekha Learn<span className="swastik-i-container">
                <span className="dotless-i">ı</span>
                <img 
                  src={swastikImg} 
                  className="swastik-dot-img" 
                  aria-hidden="true" 
                  alt="" 
                />
              </span>ng Centre
            </motion.h1>
            
            {/* Subtitle in Singular Crimson-Magenta */}
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="h4 mb-4 fw-semibold text-secondary-custom"
            >
              Over 10+ Years of Excellence & Trust in Education
            </motion.h3>
            
            {/* Clean Minimalist CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="d-flex gap-3 justify-content-center flex-wrap mt-2"
            >
              <Button 
                href="#contact" 
                className="btn-custom"
              >
                Enroll Now
              </Button>
              <Button 
                href="#courses" 
                className="btn-outline-custom"
              >
                Explore Courses
              </Button>
            </motion.div>
            
          </Col>
        </Row>
      </Container>

      {/* Brand Ambassador Poster Element - Fixed Right Side on Desktop */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="hero-ambassador-poster d-none d-lg-flex"
      >
        <div className="ambassador-frame">
          <img 
            src={mentorImg} 
            alt="Founder & Mentor" 
            className="ambassador-mentor-img" 
          />
          <div className="hero-ambassador-badge">
            <span className="ambassador-badge-text">Founder & Mentor</span>
          </div>
        </div>
      </motion.div>

      {/* Mobile Ambassador Display - Seamlessly placed below CTAs on phones & tablets */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hero-ambassador-mobile-wrap d-lg-none d-flex flex-column align-items-center"
        style={{ zIndex: 3 }}
      >
        <div className="ambassador-mobile-frame position-relative">
          <img 
            src={mentorImg} 
            alt="Founder & Mentor" 
            className="ambassador-mentor-img-mobile" 
          />
          <div className="hero-ambassador-badge ambassador-badge-mobile">
            <span className="ambassador-badge-text">Founder & Mentor</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
