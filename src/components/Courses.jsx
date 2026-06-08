import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaBook, FaPenFancy, FaFont, FaComments, FaLanguage, FaUniversity, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';

const courses = [
  { id: 1, title: '2nd to 10th Standard', desc: 'Comprehensive coaching for foundational learning.', icon: <FaGraduationCap size={32} /> },
  { id: 2, title: 'All Subjects', desc: 'Expert guidance across everything in the curriculum.', icon: <FaChalkboardTeacher size={32} /> },
  { id: 3, title: 'Metric and CBSE', desc: 'Tailored test series and syllabus coverage for both boards.', icon: <FaBook size={32} /> },
  { id: 4, title: 'Handwriting', desc: 'Improve legibility and neatness with dedicated practice sheets.', icon: <FaPenFancy size={32} /> },
  { id: 5, title: 'Grammar', desc: 'Master the rules of English to build a strong communication baseline.', icon: <FaFont size={32} /> },
  { id: 6, title: 'Spoken English', desc: 'Interactive speaking sessions to build fluency and confidence.', icon: <FaComments size={32} /> },
  { id: 7, title: 'Hindi Basics', desc: 'Learn the fundamentals of Hindi reading, writing, and speaking.', icon: <FaLanguage size={32} /> },
  { id: 8, title: 'Entrance Coaching', desc: 'Rigorous preparation for various school entrance examinations.', icon: <FaUniversity size={32} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Courses = () => {
  return (
    <section id="courses" className="section-padding" style={{ backgroundColor: 'var(--primary-color)' }}>
      <Container>
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="display-6 fw-bold text-light text-sweep-hover">Courses Offered</h2>
          <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)' }}></div>
          <p className="text-muted mt-3 mb-0">Customized programs tailored to your child's academic needs</p>
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
                <div className="d-flex flex-column align-items-center text-center p-4 hover-card h-100" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                  <div className="text-accent-custom mb-3">
                    {course.icon}
                  </div>
                  <h5 className="fw-bold fs-6 mb-2 text-light">{course.title}</h5>
                  <p className="mb-0 text-light opacity-75 small">{course.desc}</p>
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
