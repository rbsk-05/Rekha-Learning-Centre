import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGift, FaWhatsapp, FaBookOpen, FaPhoneAlt, FaTree, FaSmile, FaCheckDouble, FaOm } from 'react-icons/fa';

const features = [
  { id: 1, title: 'Gifts and Rewards', text: 'We celebrate progress and recognize top performers with encouraging rewards.', icon: <FaGift size={32} /> },
  { id: 2, title: 'WhatsApp Group', text: 'Instant updates, study materials, and quick communication.', icon: <FaWhatsapp size={32} /> },
  { id: 3, title: 'Dedicated Notebook & Test Note', text: 'Structured approach to maintaining ongoing lessons and periodic test results.', icon: <FaBookOpen size={32} /> },
  { id: 4, title: 'Parent Communication', text: 'Consistent updates assuring parents of their child’s academic growth.', icon: <FaPhoneAlt size={32} /> },
  { id: 5, title: 'Outing with Students', text: 'We organize recreational trips to balance education with fun.', icon: <FaTree size={32} /> },
  { id: 6, title: 'Friendly Approach', text: 'A supportive, stress-free environment for natural learning.', icon: <FaSmile size={32} /> },
  { id: 7, title: 'Discipline and Decency', text: 'Instilling strong moral values alongside regular academics.', icon: <FaCheckDouble size={32} /> },
  { id: 8, title: 'Mantra Teaching', text: 'Spiritual discipline focusing on focus, clarity, and peace of mind.', icon: <FaOm size={32} /> },
];

const LearningMethod = () => {
  return (
    <section id="methodology" className="section-padding bg-primary-custom text-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-sweep-hover">Things We Differ By</h2>
          <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)' }}></div>
          <p className="mt-3 text-light opacity-75">Our unique blend of academics and values</p>
        </div>
        
        <Row className="g-4">
          {features.map(feature => (
            <Col key={feature.id} md={6} lg={3}>
              <div className="d-flex flex-column align-items-center text-center p-4 hover-card h-100" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                <div className="text-accent-custom mb-3">
                  {feature.icon}
                </div>
                <h5 className="fw-bold fs-6 mb-2">{feature.title}</h5>
                <p className="mb-0 text-light opacity-75 small">{feature.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LearningMethod;
