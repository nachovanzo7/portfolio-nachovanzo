// src/components/sections/WorksSection.jsx
import React, { forwardRef } from 'react';


const Works = forwardRef(({ darkMode }, ref) => {
  return (
    <section style={{ padding: '2rem', color: 'white', paddingLeft: '60px' }} ref={ref}>
      <div style={{ paddingBottom: "20px", paddingTop: "100px" }}>
          <h2 style={{ color: "orange" }}>WORKS</h2>
        </div>
        <h3 style={{ color: darkMode ? "#ded8d3" : 'black' }} className="short-border">
          MY PROJECTS
        </h3>
    </section>
  );
});

export default Works;
