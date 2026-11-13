import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';
import TestimonialCard from './common/TestimonialCard';

const testimonialsData = [
  { id: 1, type: 'parent', name: 'Priya Sharma', content: 'My daughter\'s math scores improved dramatically after joining Rekha Learning Centre. The personal attention is unmatched!', rating: 5 },
  { id: 2, type: 'student', name: 'Rahul V.', content: 'The teachers explain concepts so clearly. The regular mock tests really helped me overcome my exam fear.', rating: 5 },
  { id: 3, type: 'parent', name: 'Anita Kumar', content: 'Excellent coaching center with dedicated staff. The WhatsApp updates keep me informed of my child\'s progress.', rating: 4 },
  { id: 4, type: 'student', name: 'Sneha R.', content: 'The friendly approach makes learning enjoyable rather than stressful. Best tuition center!', rating: 5 },
  { id: 5, type: 'student', name: 'Karthik N.', content: 'Spoken English classes helped me build so much confidence for school presentations.', rating: 5 },
  { id: 6, type: 'parent', name: 'Murali K.', content: 'Disciplined environment. The focus on handwriting and grammar from an early age is commendable.', rating: 5 },
];

const Testimonials = () => {
  const [filter, setFilter] = useState('student');

  const filteredData = testimonialsData.filter(t => t.type === filter);

  return (
    <section id="testimonials" className="section-padding bg-subtle-section" style={{ overflow: 'hidden' }}>
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
          <motion.div 
            className="text-center text-md-start mb-4 mb-md-0"
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="display-6 fw-bold text-primary-custom mb-3">Success Stories</h2>
            <div className="section-accent-line mx-auto mx-md-0"></div>
          </motion.div>
          
          <div 
            className="d-flex rounded-pill border p-1 bg-white shadow-sm" 
            style={{ borderColor: 'var(--border-light)' }}
          >
            <button 
              className={`btn rounded-pill px-4 py-2 border-0 shadow-none ${filter === 'student' ? 'btn-custom' : 'text-muted bg-transparent'}`} 
              onClick={() => setFilter('student')}
              style={{ 
                fontWeight: '600', 
                fontSize: '0.9rem',
                transition: 'all 0.25s' 
              }}
            >
              Students
            </button>
            <button 
              className={`btn rounded-pill px-4 py-2 border-0 shadow-none ${filter === 'parent' ? 'btn-custom' : 'text-muted bg-transparent'}`} 
              onClick={() => setFilter('parent')}
              style={{ 
                fontWeight: '600', 
                fontSize: '0.9rem',
                transition: 'all 0.25s' 
              }}
            >
              Parents
            </button>
          </div>
        </div>

        <div style={{ minHeight: '320px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Row className="g-4">
                {filteredData.map(testimonial => (
                  <Col key={testimonial.id} md={6} lg={4}>
                    <TestimonialCard testimonial={testimonial} />
                  </Col>
                ))}
              </Row>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
