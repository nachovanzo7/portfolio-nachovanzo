import React from "react";
import linkedin from '../assets/logos-tech/linkedin.svg';
import linkedinw from '../assets/logos-tech/linkedinw.svg';
import github from '../assets/logos-tech/github-b.svg';
import githubw from '../assets/logos-tech/github-white.svg';
import gmail from '../assets/logos-tech/gmail-b.svg';
import gmailw from '../assets/logos-tech/gmail.svg';
import '../pages/styles/layout.css';
import { motion } from 'framer-motion';

const SocialMedia = (({ darkMode } ) => {
    return (
        <div>
        <div className="tech-icons" style={{display: 'flex', paddingTop: '20px'}}>
            <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/ignaciovanzo/" target="_blank"><img src={darkMode ? linkedinw : linkedin} alt="LinkedIn" /></motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/nachovanzo7" style={{marginLeft: '20px', marginRight: '20px'}} target="_blank"><img src={darkMode ? githubw : github} alt="GitHub" /></motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nachovanzo17@gmail.com&su=&body=" target="_blank" style={{marginLeft: '9px'}}><img src={darkMode ? gmailw : gmail} alt="Gmail" /></motion.a>
        </div>
        </div>
    );
});

export default SocialMedia;