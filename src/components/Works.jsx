import React, { forwardRef } from 'react';
import RCDport from '../assets/RCD-port.png';
import '../pages/styles/layout.css';

const Works = forwardRef(({ darkMode }, ref) => {
  return (
    <section 
      style={{ 
        padding: '2rem', 
        color: darkMode ? 'white' : 'black',
        paddingLeft: '60px',
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
            <p className='rcd-text' style={{ color: darkMode ? "#c4bcb3" : "black" }}>
            Internal management system developed for RCD Reciclaje, designed to ensure process traceability, optimize data collection, and automate monthly reporting.
            </p>
          </div>
          <img src={RCDport} alt="Captura del proyecto RCD Management" />
        </div>
      </div>
    </section>
  );
});

export default Works;