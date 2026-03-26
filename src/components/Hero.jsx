import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section id="home" className="d-flex flex-column justify-content-center bg-primary-custom text-center position-relative" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px' }}>
      {/* Background Image Placeholder */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0
        }}
      ></div>
      
      <Container style={{ zIndex: 1, position: 'relative' }}>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="d-flex flex-column align-items-center">
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="display-3 fw-bold mb-2 text-light text-sweep-hover"
              style={{ letterSpacing: '-1px' }}
            >
              Rekha Learning Center
            </motion.h1>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="h4 mb-4 text-accent-custom fw-normal"
            >
              Over 10+ Years of Excellence & Trust in Education
            </motion.h3>
            

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="d-flex gap-3 justify-content-center flex-wrap"
            >
              <motion.div whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px 5px rgba(212, 175, 55, 0.4)" }} transition={{ type: 'spring', stiffness: 300 }}>
                <Button href="/#contact" variant="none" className="btn-custom btn-lg rounded-pill px-5 shadow border-0">
                  Enroll Now
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)" }} transition={{ type: 'spring', stiffness: 300 }}>
                <Button href="/#courses" variant="outline-light" className="btn-lg px-4 rounded-pill fw-bold border-2">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
