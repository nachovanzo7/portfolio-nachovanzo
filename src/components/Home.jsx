import React from "react";
import '../pages/styles/layout.css';
import profileImage from '../assets/profile.jpg'

import { forwardRef } from 'react';

const Home = forwardRef(({ darkMode }, ref) => {
  return (
    <section className="home-section" ref={ref} style={{padding: '2rem'}}>

      <div>

        <div className="title">
          <h2 style={{ color: "orange" }}>INTRODUCTION</h2>
        </div>
        <h3 className="short-border" style={{ color: darkMode ? "#ded8d3" : 'black'}}>
          FULL-STACK DEVELOPER
        </h3>

        <div
            style={{
              backgroundColor: darkMode ? "#1d1b19" : "#fffcf7",
            }}
          >
            
            <div className="home-image">
              <img
              className="image"
                src={profileImage}
                alt="Profile"
                style={{
                  width: `200px`,
                  height: `200px`,
                  borderRadius: "10%",
                  boxShadow: darkMode
                    ? "0 0 20px rgba(255, 200, 0, 0.3)"
                    : "0 0 20px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              />

            </div>
          </div>

        <p className="text-home"style={{ color: darkMode ? "#c4bcb3" : "black" }}>
          I'm Nacho, a curious software developer with experience in graphic
          design and user experience. <br></br>I'm passionate about creating
          innovative solutions that make people's lives easier and more
          enjoyable.
        </p>

      </div>

    </section>
  );
});

export default Home;
