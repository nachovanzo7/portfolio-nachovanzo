import React from "react";
import "./styles/home.css";
import { forwardRef } from 'react';

const Home = forwardRef(({ darkMode }, ref) => {
  return (
    <section className="home-section" ref={ref}>

      <div style={{ paddingBottom: "100px" }}>

        <div className="title">
          <h2 style={{ color: "orange" }}>INTRODUCTION</h2>
        </div>
        <h3 className="short-border" style={{ color: darkMode ? "#ded8d3" : 'black', borderBottom: darkMode ? "white" : "black" }}>
          FULL-STACK DEVELOPER
        </h3>

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
