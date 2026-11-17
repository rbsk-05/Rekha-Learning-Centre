import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGift, FaWhatsapp, FaBookOpen, FaPhoneAlt, FaTree, FaSmile, FaCheckDouble, FaOm } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  { id: 1, title: 'Gifts and Rewards', text: 'We celebrate progress and recognize top performers with encouraging rewards.', icon: <FaGift size={28} />, color: 'var(--accent-color)' },
  { id: 2, title: 'WhatsApp Group', text: 'Instant updates, study materials, and quick parent communication.', icon: <FaWhatsapp size={28} />, color: 'var(--leaf-green)' },
  { id: 3, title: 'Dedicated Notebooks', text: 'Structured approach to maintaining ongoing lessons and periodic test notes.', icon: <FaBookOpen size={28} />, color: 'var(--primary-color)' },
  { id: 4, title: 'Parent Communication', text: 'Consistent updates assuring parents of their child’s academic growth.', icon: <FaPhoneAlt size={28} />, color: 'var(--secondary-color)' },
  { id: 5, title: 'Outing with Students', text: 'We organize recreational trips to balance education with joyful activities.', icon: <FaTree size={28} />, color: 'var(--leaf-green)' },
  { id: 6, title: 'Friendly Approach', text: 'A supportive, stress-free environment fostering natural curiosity.', icon: <FaSmile size={28} />, color: 'var(--accent-color)' },
  { id: 7, title: 'Discipline and Decency', text: 'Instilling strong moral values alongside academic rigor.', icon: <FaCheckDouble size={28} />, color: 'var(--primary-color)' },
  { id: 8, title: 'Mantra Teaching', text: 'Spiritual grounding focusing on concentration, clarity, and peace of mind.', icon: <FaOm size={28} />, color: 'var(--secondary-color)' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

const LearningMethod = () => {
  return (
    <section id="methodology" className="section-padding bg-subtle-section">
      <Container>
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="display-6 fw-bold text-primary-custom mb-3">Things We Differ By</h2>
          <div className="section-accent-line mx-auto mb-3"></div>
          <p className="text-muted mb-0">Our unique blend of academics, moral values, and personalized care</p>
        </motion.div>
        
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           variants={containerVariants}
        >
          <Row className="g-4">
            {features.map(feature => (
              <Col key={feature.id} md={6} lg={3} as={motion.div} variants={itemVariants}>
                <div className="d-flex flex-column align-items-center text-center p-4 hover-card h-100 bg-white">
                  <div 
                    className="p-3 rounded-circle mb-3 d-flex align-items-center justify-content-center"
                    style={{ 
                      backgroundColor: 'rgba(3, 35, 91, 0.04)',
                      color: feature.color,
                      width: '64px',
                      height: '64px'
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="fw-bold mb-2 text-dark d-flex align-items-center justify-content-center text-center" style={{ fontSize: '1.18rem', minHeight: '3.1rem', letterSpacing: '-0.2px' }}>
                    {feature.title}
                  </h4>
                  <p className="mb-0 text-muted flex-grow-1 text-center" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                    {feature.text}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default LearningMethod;
