import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import LearningMethod from '../components/LearningMethod';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingBackground from '../components/common/FloatingBackground';

const Home = () => {
  return (
    <>
      <Navigation />
      <main style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingBackground />
        <Hero />
        <About />
        <Courses />
        <LearningMethod />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
