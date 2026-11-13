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
        reply_to: formData.email
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
    <section id="contact" className="section-padding bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-primary-custom mb-3">Contact Us</h2>
          <div className="section-accent-line mx-auto mb-3"></div>
          <p className="text-muted mb-0">Get in touch to secure your child's academic future</p>
        </div>

        <Row className="g-4">
          <Col lg={5}>
            <div 
              className="h-100 p-4 p-md-5 rounded-4 shadow-sm text-white"
              style={{
                backgroundColor: 'var(--primary-color)'
              }}
            >
              <h4 className="fw-bold mb-4 text-white">Contact Information</h4>
              
              <div className="d-flex align-items-start mb-4">
                <FaMapMarkerAlt size={22} className="text-accent-custom me-3 mt-1" />
                <div>
                  <h6 className="fw-bold mb-1 text-white">Our Location</h6>
                  <p className="mb-0 text-white-50 small" style={{ lineHeight: '1.6' }}>
                    New 31/2, Old No 15/2,<br />
                    Lakshmipuram Rd, Vadapalani,<br />
                    Tamil Nadu 600026
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <FaPhoneAlt size={18} className="text-accent-custom me-3 mt-1" />
                <div>
                  <h6 className="fw-bold mb-1 text-white">Phone Number</h6>
                  <p className="mb-0 text-white-50 small">+91 8248748595</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-5">
                <FaEnvelope size={18} className="text-accent-custom me-3 mt-1" />
                <div>
                  <h6 className="fw-bold mb-1 text-white">Email Address</h6>
                  <p className="mb-0 text-white-50 small">rrekhamurugan@gmail.com</p>
                </div>
              </div>

              <a 
                href="tel:+918248748595"
                className="btn btn-custom w-100 d-flex align-items-center justify-content-center py-3 text-decoration-none"
              >
                <FaPhoneAlt size={16} className="me-2" /> Call Us Directly
              </a>
              
            </div>
          </Col>

          <Col lg={7}>
            <Card 
              className="border-0 shadow-sm p-4 p-md-5 rounded-4 h-100 bg-white border"
              style={{ borderColor: 'var(--border-light)' }}
            >
              <h4 className="fw-bold mb-4 text-dark">Send us a Message</h4>
              
              {status.message && (
                <Alert variant={status.type} onClose={() => setStatus({ type: '', message: '' })} dismissible>
                  {status.message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-medium text-dark small">Your Name *</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter full name" 
                        className="p-3" 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-medium text-dark small">Email Address *</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email" 
                        className="p-3" 
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium text-dark small">Message *</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    placeholder="How can we help your child?" 
                    className="p-3" 
                  />
                </Form.Group>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-custom w-100 py-3 d-flex align-items-center justify-content-center"
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
                </button>
              </Form>
            </Card>
          </Col>

          {/* Map */}
          <Col xs={12} className="mt-4">
            <div 
              className="rounded-4 overflow-hidden border shadow-sm" 
              style={{ 
                height: '380px', 
                backgroundColor: '#f1f5f9',
                borderColor: 'var(--border-light)'
              }}
            >
              <iframe 
                title="Rekha Learning Centre Location"
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
