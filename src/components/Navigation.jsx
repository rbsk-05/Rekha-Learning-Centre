import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Increase opacity when user scrolls significantly from top
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-glass ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="/#home" className="fw-bold d-flex align-items-center">
          <span style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>Rekha Learning Center</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-medium">
            <Nav.Link href="/#home" className="px-3">Home</Nav.Link>
            <Nav.Link href="/#courses" className="px-3">Courses</Nav.Link>
            <Nav.Link href="/#methodology" className="px-3">Learning Method</Nav.Link>
            <Nav.Link href="/#gallery" className="px-3">Gallery</Nav.Link>
            <Nav.Link href="/#testimonials" className="px-3">Testimonials</Nav.Link>
            <Nav.Link href="/#contact" className="px-3">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
