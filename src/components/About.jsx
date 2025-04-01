import React from "react";
import { FileDown } from 'lucide-react';
import { forwardRef } from 'react';
import '../pages/styles/layout.css';
import IgnacioVanzoCV from '../assets/IgnacioVanzo-CV.pdf';

const About = forwardRef(({ darkMode }, ref) => {
  return (
    <section className="bio-section" style={{ padding: "2rem", color: "white"}} ref={ref}>

      <div  className="bio-container">

        <div style={{ paddingBottom: "20px", paddingTop: "100px" }}>
          <h2 style={{ color: "orange" }}>ABOUT ME</h2>
        </div>
        <h3 style={{ color: darkMode ? "#ded8d3" : 'black'}} className="short-border">
          BIOGRAPHY
        </h3>

        <p className="about-text" style={{ color: darkMode ? "#c4bcb3" : "black" }}>
          I'm from Uruguay, and I enjoy working with new people because that's how I learn and discover new ways of seeing the world.
        </p>

        <div style={{ 
          display: 'flex', 
          marginTop: '20px',
          gap: '20px',
          flexFlow: 'column'
        }}>

          <div style={{ 
            border: '1px solid', 
            padding: '30px', 
            flex: '1',
            borderColor: darkMode ? "#ded8d3" : 'black',
            fontSize: '22px'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: darkMode ? '1px solid white ' : '1px solid black '}}>
                  <td style={{ 
                    padding: '10px 0', 
                    color: darkMode ? "#ded8d3" : 'black',
                    fontWeight: 'bold'
                  }}>NAME</td>
                  <td style={{ 
                    padding: '10px 0', 
                    color: darkMode ? "#c4bcb3" : '#333'
                  }} className="name">IGNACIO VANZO</td>
                </tr>
                <tr style={{ borderBottom: darkMode ? '1px solid white ' : '1px solid black '}}>
                  <td style={{ 
                    padding: '10px 0', 
                    color: darkMode ? "#ded8d3" : 'black',
                    fontWeight: 'bold'
                  }} >AGE</td>
                  <td style={{ 
                    padding: '10px 0', 
                    color: darkMode ? "#c4bcb3" : '#333'
                  }} className="age">21</td>
                </tr>
                <tr>
                  <td style={{ 
                    padding: '10px 0', 
                    color: darkMode ? "#ded8d3" : 'black',
                    fontWeight: 'bold'
                  }}>ADDRESS</td>
                  <td style={{ 
                    padding: '10px 0', 
                    color: darkMode ? "#c4bcb3" : '#333'
                  }}
                  className="address">Montevideo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <a 
            href={IgnacioVanzoCV}
            download="Ignacio Vanzo - CV"
            style={{ 
              flex: '0.5',
              border: '1px solid',
              borderColor: darkMode ? "#ded8d3" : 'black',
              padding: '30px',
              backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer'
            }}
            className="download-cv"
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              fontSize: '22px'
            }}>
              <FileDown color={darkMode ? "#ded8d3" : "black"} />
              <span style={{ color: darkMode ? "#ded8d3" : 'black' }}>
                Download CV
              </span>
            </div>
          </a>

        </div>

      </div>

    </section>
  );
});

export default About;