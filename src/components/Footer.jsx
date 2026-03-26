import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="text-light pt-5 pb-4"
      style={{ 
        backgroundColor: 'var(--primary-color)',
        borderTop: '2px solid rgba(212, 175, 55, 0.3)', // subtle gold separator
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.4)'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <Container className="px-md-5">
        <Row className="gy-4 mb-4 justify-content-between">
          
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center mb-4">
              <FaGraduationCap size={32} className="text-accent-custom me-3" />
              <span className="fs-3 fw-bold text-white text-sweep-hover">Rekha Learning Center</span>
            </div>
            <p className="text-light opacity-75" style={{ lineHeight: '1.8' }}>
              Your Child’s Second Home for Learning. We are committed to academic excellence through concept clarity, personal attention, and strong moral values.
            </p>
          </Col>
          
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4 text-accent-custom text-uppercase tracking-wide">Quick Links</h5>
            <div className="d-flex flex-column gap-3">
              <a href="/#home" className="footer-link">Home</a>
              <a href="/#courses" className="footer-link">Courses Offered</a>
              <a href="/#methodology" className="footer-link">Learning Methodology</a>
              <a href="/gallery" className="footer-link">Full Event Gallery</a>
              <a href="/#contact" className="footer-link">Contact Us</a>
            </div>
          </Col>

          <Col lg={4} md={12}>
            <h5 className="fw-bold mb-4 text-accent-custom text-uppercase tracking-wide">Contact Info</h5>
            <div className="d-flex align-items-start mb-3">
              <FaMapMarkerAlt className="text-accent-custom me-3 mt-1" size={18} />
              <p className="mb-0 text-light opacity-75">
                New 31/2, Old No 15/2,<br/>
                Lakshmipuram Rd, Vadapalani,<br/>
                Tamil Nadu 600026
              </p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaPhoneAlt className="text-accent-custom me-3" size={18} />
              <p className="mb-0 text-light opacity-75">+91 8248748595</p>
            </div>
            <div className="d-flex align-items-center">
              <FaEnvelope className="text-accent-custom me-3" size={18} />
              <p className="mb-0 text-light opacity-75">rrekhamurugan@gmail.com</p>
            </div>
          </Col>

        </Row>

        <hr className="border-secondary mt-5 mb-4 opacity-50" />
        
        <div className="text-center text-light opacity-50">
          <small>&copy; {new Date().getFullYear()} Rekha Learning Center. All Rights Reserved.</small>
        </div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
