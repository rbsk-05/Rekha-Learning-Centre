import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div className="h-100">
      <Card 
        className="text-center hover-card p-4 h-100 rounded-4 bg-white" 
        style={{ 
          border: '1px solid var(--border-light)'
        }}
      >
        <Card.Body className="d-flex flex-column">
          <FaQuoteLeft size={24} className="text-secondary-custom mb-3 opacity-75 mx-auto" />
          <Card.Text className="fs-6 fst-italic mb-4 text-dark flex-grow-1" style={{ lineHeight: '1.7', opacity: 0.85 }}>
            "{testimonial.content}"
          </Card.Text>
          <div className="mb-3" style={{ color: 'var(--accent-color)' }}>
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <FaStar key={i} size={15} className="mx-1" />
            ))}
          </div>
          <h6 className="fw-bold mb-1 text-primary-custom">{testimonial.name}</h6>
          <small className="text-muted">{testimonial.type === 'parent' ? 'Parent' : 'Student'}</small>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
