import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoImg from '../assets/logo.png';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setScrolled(true);
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
        <Navbar.Brand href={`${import.meta.env.BASE_URL}#home`} className="d-flex align-items-center text-decoration-none">
          <div className="brand-logo-container">
            <img 
              src={logoImg} 
              alt="Rekha Learning Centre Logo" 
              className="brand-logo-img" 
            />
            <div className="d-flex flex-column text-start">
              <span className="brand-title">Rekha Learning Centre</span>
              <span className="brand-subtitle">Excellence & Trust in Education</span>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" style={{ backgroundColor: 'rgba(3, 35, 91, 0.05)' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-medium align-items-center py-2 py-lg-0">
            <Nav.Link href={`${import.meta.env.BASE_URL}#home`}>Home</Nav.Link>
            <Nav.Link href={`${import.meta.env.BASE_URL}#about`}>About</Nav.Link>
            <Nav.Link href={`${import.meta.env.BASE_URL}#courses`}>Courses</Nav.Link>
            <Nav.Link href={`${import.meta.env.BASE_URL}#methodology`}>Learning Method</Nav.Link>
            <Nav.Link href={`${import.meta.env.BASE_URL}#gallery`}>Memories</Nav.Link>
            <Nav.Link href={`${import.meta.env.BASE_URL}#contact`} className="ms-lg-2">
              <span className="btn btn-custom py-2 px-3 fs-6 d-inline-block">Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
