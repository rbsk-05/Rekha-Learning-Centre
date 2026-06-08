import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="d-flex flex-column justify-content-center bg-primary-custom text-center position-relative" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px', overflow: 'hidden' }}>
      
      {/* Background SVG Swastika Element */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <motion.svg 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewBox="0 0 100 100" 
          style={{
            width: '100%',
            maxWidth: '650px',
            filter: 'drop-shadow(0px 0px 12px rgba(212,175,55,1))'
          }}
        >
          <g stroke="var(--accent-color)" strokeWidth="16" fill="none" strokeLinecap="square">
            {/* Vertical Bar */}
            <path d="M 50 10 L 50 90" />
            {/* Horizontal Bar */}
            <path d="M 10 50 L 90 50" />
            
            {/* Top Right Hook */}
            <path d="M 50 10 L 90 10" />
            {/* Bottom Right Hook */}
            <path d="M 90 50 L 90 90" />
            
            {/* Bottom Left Hook */}
            <path d="M 50 90 L 10 90" />
            {/* Top Left Hook */}
            <path d="M 10 50 L 10 10" />
          </g>
        </motion.svg>
      </div>
      
      <Container style={{ zIndex: 1, position: 'relative' }}>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="d-flex flex-column align-items-center">
            
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="display-3 fw-bold mb-2 text-light text-sweep-hover"
              style={{ letterSpacing: '-1px', textShadow: '0 4px 15px rgba(0,0,0,0.6)' }}
            >
              Rekha Learning Center
            </motion.h1>
            
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="h4 mb-4 text-accent-custom fw-normal"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
            >
              Over 10+ Years of Excellence & Trust in Education
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="d-flex gap-3 justify-content-center flex-wrap"
            >
              <div>
                <Button href="/#contact" variant="none" className="btn-custom btn-lg rounded-pill px-5 shadow border-0">
                  Enroll Now
                </Button>
              </div>
              <div>
                <Button href="/#courses" variant="outline-light" className="btn-lg px-4 rounded-pill fw-bold border-2 bg-transparent text-white">
                  Learn More
                </Button>
              </div>
            </motion.div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
