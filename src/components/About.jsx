import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const stats = [
    { number: "8+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "5+", label: "Technologies" },
    { number: "∞", label: "Learning" }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <motion.p
              className="about-intro"
              variants={itemVariants}
            >
              I'm a passionate software developer with a love for creating innovative solutions and immersive experiences. My journey in technology started with a curiosity about how things work, which led me to explore various programming languages and frameworks.
            </motion.p>
            
            <motion.div className="about-details" variants={itemVariants}>
              <motion.div
                className="about-item"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3>🎯 My Mission</h3>
                <p>To create technology that not only solves problems but also brings joy and enhances human experiences. Whether it's a website, a game mod, or an AI application, I believe in building with purpose and passion.</p>
              </motion.div>
              
              <motion.div
                className="about-item"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3>🚀 What I Do</h3>
                <p>I specialize in full-stack web development, AI/ML applications, and Minecraft modding. My work spans from interactive websites to complex game modifications that add new dimensions to player experiences.</p>
              </motion.div>
              
              <motion.div
                className="about-item"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3>💡 My Approach</h3>
                <p>I believe in clean, maintainable code and user-centered design. Every project I work on is an opportunity to learn something new and push the boundaries of what's possible.</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div className="about-stats" variants={itemVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="stat-number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 