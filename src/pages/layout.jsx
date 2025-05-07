import React, { useRef, useState, useEffect } from "react";
import Dock from "../components/Dock.jsx";
import {
  BriefcaseBusiness,
  Code,
  CircleUserRound,
  Moon,
  Sun,
  Shell,
} from "lucide-react";
import Body from "../components/body.jsx";
import "./styles/layout.css";
import ClickSpark from "../components/ClickSpark";
import profileImage from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import SocialMedia from "../components/socialmedia.jsx";
import { NowPlaying } from "../components/NowPlaying";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(700);
  const [animationKey, setAnimationKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Nuevo estado para controlar la animación
  const scrollableRef = useRef(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const technologiesRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNowPlayingUpdate = (playingStatus) => {
    setIsPlaying(playingStatus);
  };

  const items = [
    {
      icon: <Shell size={18} color={darkMode ? "#ffff" : "black"} />,
      label: "Introduction",
      onClick: () => scrollToRef(homeRef),
    },
    {
      icon: <CircleUserRound size={18} color={darkMode ? "#ffff" : "black"} />,
      label: "Biography",
      onClick: () => scrollToRef(aboutRef),
    },
    {
      icon: (
        <BriefcaseBusiness size={18} color={darkMode ? "#ffff" : "black"} />
      ),
      label: "My Projects",
      onClick: () => scrollToRef(worksRef),
    },
    {
      icon: <Code size={18} color={darkMode ? "#ffff" : "black"} />,
      label: "Technologies",
      onClick: () => scrollToRef(technologiesRef),
    },
    {
      icon: darkMode ? (
        <Moon size={18} color="white" />
      ) : (
        <Sun size={18} color="black" />
      ),
      label: "Theme",
      onClick: toggleDarkMode,
    },
  ];

  const handleScroll = () => {
    const scrollTop = scrollableRef.current.scrollTop;
    const maxScroll = 500;
    const minWidth = 500;
    const maxWidth = 700;
    const scale = 1 - Math.min(scrollTop, maxScroll) / maxScroll;
    const newWidth = minWidth + scale * (maxWidth - minWidth);
    setSidebarWidth(newWidth);
  };

  const imageSize = Math.min(400, sidebarWidth * 0.6);
  const textSize = Math.min(4, sidebarWidth * 0.004);
  const textColor = darkMode ? "#ded8d3" : "#202020";

  return (
    <ClickSpark
      sparkColor="#ffc800"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div
        className="layout"
        style={{
          position: "relative",
          height: "100vh",
          backgroundColor: darkMode ? "#1d1b19" : "#fffcf7",
          fontFamily: "Quicksand",
        }}
      >
        <div style={{ display: "flex", height: "100%", justifyContent: "center" }}>
          <div
            className="section-left"
            ref={scrollableRef}
            onScroll={handleScroll}
            style={{
              marginRight: sidebarWidth,
              backgroundColor: darkMode ? "#1d1b19" : "#fffcf7",
            }}
          >
            <Body
              darkMode={darkMode}
              homeRef={homeRef}
              aboutRef={aboutRef}
              worksRef={worksRef}
              technologiesRef={technologiesRef}
            />
          </div>

          <div
            className="section-right"
            style={{
              width: sidebarWidth,
              backgroundColor: darkMode ? "#1d1b19" : "#fffcf7",
              borderLeft: darkMode ? "#888 solid 0.5px" : "#ddd solid 0.5px",
            }}
          >
            <div
              className="div-image"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                style={{
                  width: `${imageSize}px`,
                  height: `${imageSize}px`,
                  objectFit: "cover",
                  borderRadius: "10%",
                  border: `3px solid ${darkMode ? "#ffc800" : "#333"}`,
                  boxShadow: darkMode
                    ? "0 0 20px rgba(255, 200, 0, 0.3)"
                    : "0 0 20px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  margin: "20px",
                }}
              />
              
              <TypeAnimation
                key={animationKey}
                sequence={[
                  "Nacho Vanzo",
                  2000,
                  "Web Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                ]}
                wrapper="span"
                speed={30}
                deletionSpeed={40}
                style={{
                  fontSize: `${textSize}rem`,
                  color: textColor,
                  display: "block",
                  textAlign: "center",
                  fontWeight: "bold",
                  transition: "color 0.3s ease",
                }}
                repeat={Infinity}
                cursor={true}
                cursorStyle={darkMode ? "|" : "_"}
              />

              <SocialMedia darkMode={darkMode} />

            </div>
          </div>
          <div className="now-playing-wrapper">
                <NowPlaying />
              </div>
        </div>
        <div className="dock">
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
            darkMode={darkMode}
          />
        </div>
      </div>
    </ClickSpark>
  );
};

export default Layout;