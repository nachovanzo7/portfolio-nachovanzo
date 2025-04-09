import React, { forwardRef } from "react";
import { motion } from 'framer-motion';
import '../pages/styles/layout.css';

// Import all icons directly
import css from "../assets/logos-tech/css.svg";
import html from "../assets/logos-tech/html.svg";
import js from "../assets/logos-tech/javascript.svg";
import react from "../assets/logos-tech/react.svg";
import mongo from "../assets/logos-tech/mongo.svg";
import git from "../assets/logos-tech/git.svg";
import githubB from "../assets/logos-tech/github-b.svg";
import githubW from "../assets/logos-tech/github-w.svg";
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

const hoverVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 }
  }
};

const MotionTechIcon = ({ src, alt, title }) => (
  <motion.div 
    variants={hoverVariants}
    whileHover="hover"
    whileTap={{ scale: 0.95 }}
    className="tech-icon"
  >
    <img src={src} alt={alt} title={title} />
  </motion.div>
);

const TechCategory = ({ title, icons, darkMode }) => (
  <div className={`${title.toLowerCase().replace(' & ', '-')}`}>
    <h4>{title}</h4>
    <div className="tech-icons">
      {icons.map(([icon, alt]) => (
        <MotionTechIcon 
          key={alt}
          src={icon}
          alt={alt}
          title={alt}
        />
      ))}
    </div>
  </div>
);

const Technologies = forwardRef(({ darkMode }, ref) => {
  const categories = [
    {
      title: "Backend",
      icons: [
        [python, "Python"],
        [django, "Django"],
        [java, "Java"],
        [spring, "Spring"],
        [mongo, "MongoDB"],
        [postgres, "PostgreSQL"]
      ]
    },
    {
      title: "Frontend",
      icons: [
        [react, "React"],
        [js, "JavaScript"],
        [typescript, "TypeScript"],
        [html, "HTML5"],
        [css, "CSS3"],
        [tailwind, "Tailwind"]
      ]
    },
    {
      title: "Environment & Tools",
      icons: [
        [git, "Git"],
        [darkMode ? githubW : githubB, "GitHub"],
        [docker, "Docker"],
        [figma, "Figma"],
        [vscode, "VSCode"]
      ]
    }
  ];

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

      <motion.div 
        className="tech-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category) => (
          <TechCategory
            key={category.title}
            title={category.title}
            icons={category.icons}
            darkMode={darkMode}
          />
        ))}
      </motion.div>
    </section>
  );
});

export default Technologies;