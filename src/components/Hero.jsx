import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import swastikImg from '../assets/swastik.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="d-flex flex-column justify-content-center text-center position-relative" 
      style={{ 
        minHeight: '85vh', 
        paddingTop: '140px', 
        paddingBottom: '80px', 
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #f8fafd 0%, #ffffff 100%)'
      }}
    >
      <Container style={{ zIndex: 1, position: 'relative' }}>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="d-flex flex-column align-items-center">

            {/* Hero Main Heading: Singular Deep Royal Navy, dotless i, and crisp clean swastik dot */}
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
                href="/#contact" 
                className="btn-custom"
              >
                Enroll Now
              </Button>
              <Button 
                href="/#courses" 
                className="btn-outline-custom"
              >
                Explore Courses
              </Button>
            </motion.div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
