import React from "react";
import '../pages/styles/layout.css';
import profileImage from '../assets/profile.jpg'
import linkedin from '../assets/logos-tech/linkedin.svg'
import linkedin2 from '../assets/logos-tech/linkedinw.svg'
import github from '../assets/logos-tech/github-b.svg'
import github2 from '../assets/logos-tech/github-white.svg'
import gmail from '../assets/logos-tech/gmail.svg'
import gmailb from '../assets/logos-tech/gmail-b.svg'

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
            className="home-image"
          >
            
            <div className="home-image" style={{flexDirection: 'column' }}>
              <img
              className="image"
                src={profileImage}
                alt="Profile"
                style={{
                  width: `200px`,
                  height: `200px`,
                  borderRadius: "10%",
                  marginTop: "20px",
                  marginBottom: "20px",
                  alignSelf: "center",
                }}
              />

                <div className='div-icons' style={{justifySelf: 'center', color: darkMode ? 'white' : 'black'}}>
                  <div className="tech-icons" style={{justifySelf: 'center' }}> 
                  <a href="https://www.linkedin.com/in/ignaciovanzo/" target="_blank" style={{justifySelf:'center'}}>
                    <img src={ darkMode ? linkedin2 : linkedin} alt="LinkedIn" style={{width: '46px'}}/>
                    </a>
                    <a href="https://github.com/nachovanzo7" target="_blank" style={{justifySelf:'center'}}>
                    <img src={ darkMode ? github2 : github} alt="GitHub" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nachovanzo17@gmail.com&su=&body=" target="_blank" style={{justifySelf:'center'}}>
                    <img src={ darkMode ? gmail : gmailb} alt="Gmail" style={{width: '40px', marginLeft: '10px'}}/>
                    </a>
                  </div>
                </div>
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
