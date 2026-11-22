import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer 
      className="text-light pt-5 pb-4"
      style={{ 
        backgroundColor: 'var(--primary-color)',
        borderTop: '3px solid var(--secondary-color)'
      }}
    >
      <Container className="px-md-5">
        <Row className="gy-4 mb-4 justify-content-between">
          
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center mb-3">
              <img 
                src={logoImg} 
                alt="Rekha Learning Centre Logo" 
                className="footer-logo-img me-3" 
              />
              <div>
                <span className="fs-4 fw-bold text-white d-block lh-sm">Rekha Learning Centre</span>
                <small className="text-accent-custom fw-semibold">Excellence & Trust in Education</small>
              </div>
            </div>
            <p className="text-white-50 small" style={{ lineHeight: '1.8' }}>
              Your Child’s Second Home for Learning. We are committed to academic excellence through concept clarity, personal attention, and strong moral values.
            </p>
          </Col>
          
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3 text-white text-uppercase tracking-wide small">Quick Links</h6>
            <div className="d-flex flex-column gap-2">
              <a href={`${import.meta.env.BASE_URL}#home`} className="footer-link">Home</a>
              <a href={`${import.meta.env.BASE_URL}#about`} className="footer-link">About Us</a>
              <a href={`${import.meta.env.BASE_URL}#courses`} className="footer-link">Courses Offered</a>
              <a href={`${import.meta.env.BASE_URL}#methodology`} className="footer-link">Learning Methodology</a>
              <a href={`${import.meta.env.BASE_URL}gallery`} className="footer-link">Full Event Gallery</a>
              <a href={`${import.meta.env.BASE_URL}#contact`} className="footer-link">Contact Us</a>
            </div>
          </Col>

          <Col lg={4} md={12}>
            <h6 className="fw-bold mb-3 text-white text-uppercase tracking-wide small">Contact Info</h6>
            <div className="d-flex align-items-start mb-2">
              <FaMapMarkerAlt className="text-secondary-custom me-3 mt-1" size={16} />
              <p className="mb-0 text-white-50 small">
                New 31/2, Old No 15/2,<br/>
                Lakshmipuram Rd, Vadapalani,<br/>
                Tamil Nadu 600026
              </p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaPhoneAlt className="text-accent-custom me-3" size={16} />
              <p className="mb-0 text-white-50 small">+91 8248748595</p>
            </div>
            <div className="d-flex align-items-center">
              <FaEnvelope className="text-secondary-custom me-3" size={16} />
              <p className="mb-0 text-white-50 small">rrekhamurugan@gmail.com</p>
            </div>
          </Col>

        </Row>

        <hr className="mt-4 mb-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <div className="text-center text-white-50 small">
          &copy; {new Date().getFullYear()} Rekha Learning Centre. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
