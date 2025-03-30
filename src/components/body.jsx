// src/components/body.jsx
import React from 'react';
import About from './About.jsx';
import Home from './Home.jsx';
import Works from './Works.jsx';

const Body = ({ darkMode, homeRef, aboutRef, worksRef }) => {
  return (
    <>
      <section ref={homeRef}>
        <Home darkMode={darkMode}/>
      </section>
      <section ref={aboutRef}>
        <About darkMode={darkMode}/>
      </section>
      <section ref={worksRef}>
        <Works darkMode={darkMode}/>
      </section>
    </>
  );
};

export default Body;