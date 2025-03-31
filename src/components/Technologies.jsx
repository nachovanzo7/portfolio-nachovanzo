import React, { forwardRef } from "react";
import css from "../assets/logos-tech/css.svg";
import html from "../assets/logos-tech/html.svg";
import js from "../assets/logos-tech/javascript.svg";
import react from "../assets/logos-tech/react.svg";
import mongo from "../assets/logos-tech/mongo.svg";
import git from "../assets/logos-tech/git.svg";
import github from "../assets/logos-tech/github-b.svg";
import github2 from "../assets/logos-tech/github-w.svg";
import postgres from "../assets/logos-tech/postgres.svg";
import python from "../assets/logos-tech/python.svg";
import docker from "../assets/logos-tech/docker.svg";
import typescript from "../assets/logos-tech/typescript.svg";
import tailwind from "../assets/logos-tech/tailwind.svg";
import java from "../assets/logos-tech/java.svg";
import spring from "../assets/logos-tech/spring.svg";
import django from "../assets/logos-tech/django.svg";
import figma from "../assets/logos-tech/figma.svg";
import vscode from "../assets/logos-tech/vscode.svg";

import '../pages/styles/layout.css'

const Technologies = forwardRef(({ darkMode }, ref) => {
  return (
    <section
      className="technologies-section"
      ref={ref}
      style={{
        padding: "2rem",
        backgroundColor: darkMode ? "#1d1b19" : "#fffcf7",
        color: darkMode ? "white" : "black",
      }}
    >
      <div className="short-border">
        <h2 style={{ color: "orange" }}>TECHNOLOGIES</h2>
      </div>

      <div className="tech-grid">
        {/* Backend */}
        <div className="backend">
          <h4>Backend</h4>
          <div className="tech-icons">
            <img src={python} alt="Python" title="Python" />
            <img src={django} alt="Django" title="Django" />
            <img src={java} alt="Java" title="Java" />
            <img src={spring} alt="Spring" title="Spring" />
            <img src={mongo} alt="MongoDB" title="MongoDB" />
            <img src={postgres} alt="PostgreSQL" title="PostgreSQL" />
          </div>
        </div>

        {/* Frontend */}
        <div className="frontend">
          <h4>Frontend</h4>
          <div className="tech-icons">
            <img src={react} alt="React" title="React" />
            <img src={js} alt="JavaScript" title="JavaScript" />
            <img src={typescript} alt="TypeScript" title="TypeScript" />
            <img src={html} alt="HTML5" title="HTML" />
            <img src={css} alt="CSS3" title="CSS" />
            <img src={tailwind} alt="Tailwind" title="Tailwind" />
          </div>
        </div>

        {/* Environment & Tools */}
        <div className="env-tools">
          <h4>Environment & Tools</h4>
          <div className="tech-icons">
            <img src={git} alt="Git" title="Git" />
            <img src={darkMode ? github : github2} alt="GitHub" title="GitHub" />
            <img src={docker} alt="Docker" title="Docker" />
            <img src={figma} alt="Figma" title="Figma" />
            <img src={vscode} alt="VSCode" title="VSCode" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Technologies;
