import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';
import TestimonialCard from './common/TestimonialCard';

const testimonialsData = [
  { id: 1, type: 'parent', name: 'Priya Sharma', content: 'My daughter\'s math scores improved dramatically after joining Rekha Learning Center. The personal attention is unmatched!', rating: 5 },
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
    <section id="testimonials" className="section-padding bg-primary-custom" style={{ overflow: 'hidden' }}>
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
          <div className="text-center text-md-start mb-4 mb-md-0">
            <h2 className="display-6 fw-bold text-light text-sweep-hover">Success Stories</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)' }} className="mx-auto mx-md-0 mt-1"></div>
          </div>
          
          <div className="d-flex rounded-pill overflow-hidden border p-1" style={{ borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <button 
              className={`btn rounded-pill px-4 py-2 border-0 shadow-none ${filter === 'student' ? 'btn-custom' : 'text-light bg-transparent'}`} 
              onClick={() => setFilter('student')}
              style={{ fontWeight: filter === 'student' ? '600' : '400', transition: 'all 0.3s' }}
            >
              Students
            </button>
            <button 
              className={`btn rounded-pill px-4 py-2 border-0 shadow-none ${filter === 'parent' ? 'btn-custom' : 'text-light bg-transparent'}`} 
              onClick={() => setFilter('parent')}
              style={{ fontWeight: filter === 'parent' ? '600' : '400', transition: 'all 0.3s' }}
            >
              Parents
            </button>
          </div>
        </div>

        <div style={{ minHeight: '350px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Row className="g-4">
                {filteredData.map((testi) => (
                  <Col key={testi.id} md={6} lg={4}>
                    <TestimonialCard testimonial={testi} />
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
