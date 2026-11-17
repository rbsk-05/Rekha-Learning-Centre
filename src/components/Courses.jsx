import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaBook, FaPenFancy, FaFont, FaComments, FaLanguage, FaUniversity, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';

const courses = [
  { id: 1, title: '2nd to 10th Standard', desc: 'Comprehensive coaching for foundational learning.', icon: <FaGraduationCap size={28} />, color: 'var(--primary-color)' },
  { id: 2, title: 'All Subjects', desc: 'Expert guidance across everything in the curriculum.', icon: <FaChalkboardTeacher size={28} />, color: 'var(--secondary-color)' },
  { id: 3, title: 'CBSE, ICSE & State Board', desc: 'Tailored test series and syllabus coverage across all boards.', icon: <FaBook size={28} />, color: 'var(--primary-color)' },
  { id: 4, title: 'Handwriting', desc: 'Improve legibility and neatness with dedicated practice sheets.', icon: <FaPenFancy size={28} />, color: 'var(--leaf-green)' },
  { id: 5, title: 'Grammar', desc: 'Master the rules of English to build a strong communication baseline.', icon: <FaFont size={28} />, color: 'var(--secondary-color)' },
  { id: 6, title: 'Spoken English', desc: 'Interactive speaking sessions to build fluency and confidence.', icon: <FaComments size={28} />, color: 'var(--accent-color)' },
  { id: 7, title: 'Hindi Basics', desc: 'Learn the fundamentals of Hindi reading, writing, and speaking.', icon: <FaLanguage size={28} />, color: 'var(--leaf-green)' },
  { id: 8, title: 'Entrance Coaching', desc: 'Rigorous preparation for various school entrance examinations.', icon: <FaUniversity size={28} />, color: 'var(--secondary-color)' },
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

const Courses = () => {
  return (
    <section id="courses" className="section-padding bg-white">
      <Container>
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="display-6 fw-bold text-primary-custom mb-3">Courses Offered</h2>
          <div className="section-accent-line mx-auto mb-3"></div>
          <p className="text-muted mb-0">Customized programs tailored to your child's academic needs</p>
        </motion.div>

        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           variants={containerVariants}
        >
          <Row className="g-4">
            {courses.map((course) => (
              <Col key={course.id} md={6} lg={3} as={motion.div} variants={itemVariants}>
                <div className="d-flex flex-column align-items-center text-center p-4 hover-card h-100">
                  <div 
                    className="p-3 rounded-circle mb-3 d-flex align-items-center justify-content-center"
                    style={{ 
                      backgroundColor: 'rgba(3, 35, 91, 0.04)',
                      color: course.color,
                      width: '64px',
                      height: '64px'
                    }}
                  >
                    {course.icon}
                  </div>
                  <h4 className="fw-bold mb-2 text-dark d-flex align-items-center justify-content-center text-center" style={{ fontSize: '1.18rem', minHeight: '3.1rem', letterSpacing: '-0.2px' }}>
                    {course.title}
                  </h4>
                  <p className="mb-0 text-muted flex-grow-1 text-center" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                    {course.desc}
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

export default Courses;
