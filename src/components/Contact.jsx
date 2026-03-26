import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Alert, Spinner } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'danger', message: 'Please fill out all required fields.' });
      return;
    }
    
    // Basic email regex mapping
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus({ type: 'danger', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'rrekhamurugan@gmail.com',
        reply_to: formData.email // Direct reply logic
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("EmailJS Delivery Exception:", error);
      setStatus({ type: 'danger', message: 'Failed to send. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-primary-custom text-sweep-hover">Contact Us</h2>
          <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)' }}></div>
          <p className="text-muted mt-3 mb-0">Get in touch to secure your child's future</p>
        </div>

        <Row className="g-5">
          <Col lg={5}>
            <Card className="border-0 shadow-sm h-100 p-4 bg-primary-custom text-light rounded-4">
              <h3 className="fw-bold mb-4">Contact Information</h3>
              
              <div className="d-flex align-items-start mb-4">
                <FaMapMarkerAlt size={24} className="text-accent-custom me-3 mt-1" />
                <div>
                  <h5 className="fw-bold mb-1">Our Location</h5>
                  <p className="mb-0 text-light opacity-75">
                    New 31/2, Old No 15/2,<br />
                    Lakshmipuram Rd, Vadapalani,<br />
                    Tamil Nadu 600026
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <FaPhoneAlt size={20} className="text-accent-custom me-3 mt-1" />
                <div>
                  <h5 className="fw-bold mb-1">Phone Number</h5>
                  <p className="mb-0 text-light opacity-75">+91 8248748595</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-5">
                <FaEnvelope size={20} className="text-accent-custom me-3 mt-1" />
                <div>
                  <h5 className="fw-bold mb-1">Email Address</h5>
                  <p className="mb-0 text-light opacity-75">rrekhamurugan@gmail.com</p>
                </div>
              </div>

              <motion.a 
                href="tel:+918248748595"
                className="btn btn-custom w-100 d-flex align-items-center justify-content-center py-3 text-decoration-none rounded-pill"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(212, 175, 55, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <FaPhoneAlt size={18} className="me-2" /> Call Us Directly
              </motion.a>
              
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow-sm p-4 rounded-4 h-100">
              <h3 className="fw-bold mb-4 text-primary-custom">Send us a Message</h3>
              
              {status.message && (
                <Alert variant={status.type} onClose={() => setStatus({ type: '', message: '' })} dismissible>
                  {status.message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-medium">Your Name *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name" 
                        className="p-2" 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-medium">Email Address *</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email" 
                        className="p-2" 
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Message *</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    placeholder="How can we help your child?" 
                    className="p-2" 
                  />
                </Form.Group>
                
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-custom w-100 rounded-pill py-3 d-flex align-items-center justify-content-center border-0 fw-bold fs-6"
                  whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 5px 15px rgba(212, 175, 55, 0.4)" } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaEnvelope className="me-2" /> Send Message
                    </>
                  )}
                </motion.button>
              </Form>
            </Card>
          </Col>

          {/* Map Placeholder */}
          <Col xs={12} className="mt-5">
            <div className="rounded-4 overflow-hidden shadow-sm shadow-lg" style={{ height: '400px', backgroundColor: '#e9ecef' }}>
              <iframe 
                title="Rekha Learning Center Location"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Rekha%20tuition%20centre,%20New%2031/2,%20oldno%2015/2,%20Lakshmipuram%20Rd,%20Vadapalani,%20Tamil%20Nadu%20600026+(Rekha%20Tuition%20Centre)&t=&z=15&ie=UTF8&iwloc=B&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
