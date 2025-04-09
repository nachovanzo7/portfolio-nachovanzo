import React, { forwardRef, useState } from 'react';
import RCDport from '../assets/RCD-port.png';
import '../pages/styles/layout.css';
import { motion } from 'framer-motion';
import play from '../assets/logos-tech/play.svg';

const hoverVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
  }
}

const Works = forwardRef(({ darkMode }, ref) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section 
      style={{ 
        padding: '2rem', 
        color: darkMode ? 'white' : 'black',
        backgroundColor: darkMode ? '#1d1b19' : '#fffcf7',
        transition: "all 0.3s ease"
      }} 
      className='section-works'
      ref={ref}
    >
      <div style={{ paddingBottom: "20px", paddingTop: "100px" }} className='works-title'>
        <h2 style={{ color: "orange" }}>WORKS</h2>
      </div>
      <h3 style={{ 
        color: darkMode ? "#ded8d3" : 'black', 
      }} className="short-border">
        MY PROJECTS
      </h3>

      <div className='projects'>
        <div className='rcd-proyect'>
          <div className="project-info">
            <h2>RCD Management</h2>
            <h4>January 2025 - March 2025</h4>
            <p className='rcd-text' style={{ color: darkMode ? "#c4bcb3" : "black" }}>
              Internal management system developed for RCD Reciclaje, designed to ensure process traceability, optimize data collection, and automate monthly reporting.
            </p>
          </div>
          <motion.div
            variants={hoverVariants}
            whileHover="hover"
            style={{ position: 'relative' }}
          >
            <a 
              href="https://www.youtube.com/watch?v=JZjB7MftTjs&ab_channel=RCDDemo" 
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img src={RCDport} alt="Captura del proyecto RCD Management" />
              {isHovering && (
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: darkMode ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
                  color: darkMode ? 'white' : 'black',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  zIndex: 10
                }}>
                  View demo
                </div>
              )}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Works;