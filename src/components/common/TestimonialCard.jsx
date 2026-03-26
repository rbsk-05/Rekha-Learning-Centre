import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      className="h-100"
    >
      <Card className="text-center border-0 shadow-sm p-4 h-100 rounded-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
        <Card.Body className="d-flex flex-column">
          <FaQuoteLeft size={30} className="text-accent-custom mb-3 opacity-50 mx-auto" />
          <Card.Text className="fs-6 fst-italic mb-4 text-light flex-grow-1" style={{ opacity: 0.85 }}>
            "{testimonial.content}"
          </Card.Text>
          <div className="mb-3 text-warning">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <FaStar key={i} size={15} className="mx-1" />
            ))}
          </div>
          <h6 className="fw-bold mb-1 text-accent-custom">{testimonial.name}</h6>
          <small className="text-light opacity-50">{testimonial.type === 'parent' ? 'Parent' : 'Student'}</small>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
