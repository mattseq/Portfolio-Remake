import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '../assets/pfp.png';

const Hero = () => {
  const staticPart = "Software Developer &";
  const dynamicParts = ["Minecraft Modder", "AI Enthusiast", "Frontend Specialist", "Community Builder", "Game Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dynamicParts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="accent">Matt</span>
            </motion.h1>

            <motion.p
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ minHeight: 32 }}
            >
              {staticPart}{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={dynamicParts[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="tagline-dynamic"
                >
                  {dynamicParts[index]}
                </motion.span>
              </AnimatePresence>
            </motion.p>

            <motion.p
              className="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building everything from AI systems to game mods that thousands of players use daily. 
              Always exploring new technologies and pushing creative boundaries.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="hero-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="hero-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="profile-pic"
              whileHover={{
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <img src={profilePic} alt="Matthew Sequeira" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 