import React, { forwardRef } from "react";
import { motion } from 'framer-motion';
import '../pages/styles/layout.css';

// Import all icons at once
const icons = {
  css: require("../assets/logos-tech/css.svg").default,
  html: require("../assets/logos-tech/html.svg").default,
  js: require("../assets/logos-tech/javascript.svg").default,
  react: require("../assets/logos-tech/react.svg").default,
  mongo: require("../assets/logos-tech/mongo.svg").default,
  git: require("../assets/logos-tech/git.svg").default,
  github: require("../assets/logos-tech/github-b.svg").default,
  github2: require("../assets/logos-tech/github-w.svg").default,
  postgres: require("../assets/logos-tech/postgres.svg").default,
  python: require("../assets/logos-tech/python.svg").default,
  docker: require("../assets/logos-tech/docker.svg").default,
  typescript: require("../assets/logos-tech/typescript.svg").default,
  tailwind: require("../assets/logos-tech/tailwind.svg").default,
  java: require("../assets/logos-tech/java.svg").default,
  spring: require("../assets/logos-tech/spring.svg").default,
  django: require("../assets/logos-tech/django.svg").default,
  figma: require("../assets/logos-tech/figma.svg").default,
  vscode: require("../assets/logos-tech/vscode.svg").default,
};

const hoverVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 }
  }
};

const MotionTechIcon = ({ src, alt, title, darkMode }) => (
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
          darkMode={darkMode}
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
        [icons.python, "Python"],
        [icons.django, "Django"],
        [icons.java, "Java"],
        [icons.spring, "Spring"],
        [icons.mongo, "MongoDB"],
        [icons.postgres, "PostgreSQL"]
      ]
    },
    {
      title: "Frontend",
      icons: [
        [icons.react, "React"],
        [icons.js, "JavaScript"],
        [icons.typescript, "TypeScript"],
        [icons.html, "HTML5"],
        [icons.css, "CSS3"],
        [icons.tailwind, "Tailwind"]
      ]
    },
    {
      title: "Environment & Tools",
      icons: [
        [icons.git, "Git"],
        [darkMode ? icons.github2 : icons.github, "GitHub"],
        [icons.docker, "Docker"],
        [icons.figma, "Figma"],
        [icons.vscode, "VSCode"]
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