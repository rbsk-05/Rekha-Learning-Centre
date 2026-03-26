import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaChalkboardTeacher, FaRegSmileBeam } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold text-primary-custom mb-3">About Us</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', marginBottom: '2rem' }}></div>
            <p className="lead text-muted mb-4">
              With over 10 years of experience, Rekha Learning Center offers comprehensive coaching for 2nd to 10th standard students covering both CBSE and Matriculation syllabus. 
            </p>
            <p className="text-muted">
              Our classes are conducted in a friendly, patient, and supportive environment where students can ask questions freely and learn at their own pace. We maintain a strong focus on concept clarity, consistent practice, and personal attention to ensure every child reaches their full academic potential.
            </p>
            
            <Row className="mt-5">
              <Col sm={4} className="text-center mb-3 mb-sm-0">
                <FaGraduationCap size={40} className="text-accent-custom mb-3" />
                <h5 className="fw-bold">2nd to 10th</h5>
                <p className="small text-muted">Standard</p>
              </Col>
              <Col sm={4} className="text-center mb-3 mb-sm-0">
                <FaChalkboardTeacher size={40} className="text-accent-custom mb-3" />
                <h5 className="fw-bold">CBSE & Matric</h5>
                <p className="small text-muted">Syllabus</p>
              </Col>
              <Col sm={4} className="text-center">
                <FaRegSmileBeam size={40} className="text-accent-custom mb-3" />
                <h5 className="fw-bold">Supportive</h5>
                <p className="small text-muted">Environment</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students learning in a classroom" 
                className="img-fluid rounded shadow-lg hover-card"
                style={{ objectFit: 'cover', height: '450px', width: '100%' }}
              />
              <div 
                className="position-absolute bg-primary-custom p-4 rounded shadow-sm text-center" 
                style={{ bottom: '-30px', left: '-30px', border: '4px solid white' }}
              >
                <div className="display-4 fw-bold text-accent-custom mb-0">100%</div>
                <div className="text-light fw-medium">Focus on Clarity</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
