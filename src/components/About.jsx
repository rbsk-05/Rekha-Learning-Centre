import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaChalkboardTeacher, FaRegSmileBeam } from 'react-icons/fa';
import aboutImg from "../assets/images/people/5_CHILDREN'S_DAY/s25.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-subtle-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="display-6 fw-bold text-primary-custom mb-3 text-center text-lg-start">About Us</h2>
            <div className="section-accent-line mb-4 mx-auto ms-lg-0 me-lg-auto"></div>
            <p className="lead text-dark mb-4 fs-5" style={{ lineHeight: '1.7' }}>
              With over 11 years of experience, <strong className="text-secondary-custom">Rekha Learning Centre</strong> offers comprehensive coaching for 2nd to 10th standard students covering CBSE, ICSE, and State Board syllabi. 
            </p>
            <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
              Our classes are conducted in a friendly, patient, and supportive environment where students can ask questions freely and learn at their own pace. We maintain a strong focus on concept clarity, consistent practice, and personal attention to ensure every child reaches their full academic potential.
            </p>
            
            <Row className="mt-4 g-3">
              <Col sm={4} className="text-center">
                <div className="p-3 bg-white rounded-3 shadow-sm border h-100 d-flex flex-column justify-content-center align-items-center" style={{ borderColor: 'var(--border-light)' }}>
                  <FaGraduationCap size={34} className="text-accent-custom mb-2" />
                  <h6 className="fw-bold text-dark mb-1">2nd to 10th</h6>
                  <p className="small text-muted mb-0">Standard</p>
                </div>
              </Col>
              <Col sm={4} className="text-center">
                <div className="p-3 bg-white rounded-3 shadow-sm border h-100 d-flex flex-column justify-content-center align-items-center" style={{ borderColor: 'var(--border-light)' }}>
                  <FaChalkboardTeacher size={34} className="text-secondary-custom mb-2" />
                  <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.95rem' }}>CBSE, ICSE & State</h6>
                  <p className="small text-muted mb-0">Syllabus</p>
                </div>
              </Col>
              <Col sm={4} className="text-center">
                <div className="p-3 bg-white rounded-3 shadow-sm border h-100 d-flex flex-column justify-content-center align-items-center" style={{ borderColor: 'var(--border-light)' }}>
                  <FaRegSmileBeam size={34} className="text-green-custom mb-2" />
                  <h6 className="fw-bold text-dark mb-1">Supportive</h6>
                  <p className="small text-muted mb-0">Environment</p>
                </div>
              </Col>
            </Row>
          </Col>
          
          <Col lg={6}>
            <div className="ps-lg-4">
              <div className="overflow-hidden rounded-4 shadow-sm bg-white border" style={{ borderColor: 'var(--border-light)' }}>
                <img 
                  src={aboutImg} 
                  alt="Students and community at Rekha Learning Centre" 
                  className="img-fluid w-100 d-block"
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Callout placed cleanly below photo to ensure all students are 100% visible and uncropped */}
              <div 
                className="mt-3 p-3 px-4 rounded-4 shadow-sm bg-white border d-flex align-items-center gap-3" 
                style={{ 
                  borderLeft: '5px solid var(--secondary-color)',
                  borderColor: 'var(--border-light)'
                }}
              >
                <div className="display-6 fw-bold text-primary-custom mb-0 lh-1">100%</div>
                <div>
                  <div className="text-dark fw-bold small">Focus on Concept Clarity</div>
                  <div className="text-muted small" style={{ fontSize: '0.82rem' }}>Every child learns with confidence and personal guidance</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
