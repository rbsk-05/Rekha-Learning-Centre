import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaChalkboardTeacher, FaRegSmileBeam } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding bg-subtle-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="display-6 fw-bold text-primary-custom mb-3">About Us</h2>
            <div className="section-accent-line mb-4"></div>
            <p className="lead text-dark mb-4 fs-5" style={{ lineHeight: '1.7' }}>
              With over 10 years of experience, <strong className="text-secondary-custom">Rekha Learning Centre</strong> offers comprehensive coaching for 2nd to 10th standard students covering both CBSE and Matriculation syllabus. 
            </p>
            <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
              Our classes are conducted in a friendly, patient, and supportive environment where students can ask questions freely and learn at their own pace. We maintain a strong focus on concept clarity, consistent practice, and personal attention to ensure every child reaches their full academic potential.
            </p>
            
            <Row className="mt-4 g-3">
              <Col sm={4} className="text-center">
                <div className="p-3 bg-white rounded-3 shadow-sm border" style={{ borderColor: 'var(--border-light)' }}>
                  <FaGraduationCap size={34} className="text-accent-custom mb-2" />
                  <h6 className="fw-bold text-dark mb-1">2nd to 10th</h6>
                  <p className="small text-muted mb-0">Standard</p>
                </div>
              </Col>
              <Col sm={4} className="text-center">
                <div className="p-3 bg-white rounded-3 shadow-sm border" style={{ borderColor: 'var(--border-light)' }}>
                  <FaChalkboardTeacher size={34} className="text-secondary-custom mb-2" />
                  <h6 className="fw-bold text-dark mb-1">CBSE & Matric</h6>
                  <p className="small text-muted mb-0">Syllabus</p>
                </div>
              </Col>
              <Col sm={4} className="text-center">
                <div className="p-3 bg-white rounded-3 shadow-sm border" style={{ borderColor: 'var(--border-light)' }}>
                  <FaRegSmileBeam size={34} className="text-green-custom mb-2" />
                  <h6 className="fw-bold text-dark mb-1">Supportive</h6>
                  <p className="small text-muted mb-0">Environment</p>
                </div>
              </Col>
            </Row>
          </Col>
          
          <Col lg={6}>
            <div className="position-relative ps-lg-4">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students learning at Rekha Learning Centre" 
                className="img-fluid rounded-4 shadow-sm"
                style={{ objectFit: 'cover', height: '420px', width: '100%', border: '1px solid var(--border-light)' }}
              />
              <div 
                className="position-absolute p-4 rounded-4 shadow bg-white" 
                style={{ 
                  bottom: '-25px', 
                  left: '10px', 
                  borderLeft: '4px solid var(--secondary-color)',
                  maxWidth: '220px'
                }}
              >
                <div className="display-5 fw-bold text-primary-custom mb-0">100%</div>
                <div className="text-dark fw-semibold small">Focus on Concept Clarity</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
