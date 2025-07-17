import React from 'react';
import { motion } from 'framer-motion';
import SkillIcon from './SkillIcons';

const skills = [
  { name: 'Python', icon: 'python' },
  { name: 'Java', icon: 'java' },
  { name: 'C++', icon: 'c++' },
  { name: 'React', icon: 'react' },
  { name: 'Vite', icon: 'vitejs' },
  { name: 'Framer Motion', icon: 'framer' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'HTML', icon: 'html5' },
  { name: 'CSS', icon: 'css3' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'JSON', icon: 'json' },
  { name: 'npm', icon: 'npm' },
  { name: 'Node.js', icon: 'nodejs' },
];

const Skills = () => {
  const row1Skills = skills.slice(0, 7);
  const row2Skills = skills.slice(7, 14);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
        </motion.div>
        <div className="skills-container">
          {/* Row 1 - Moving Left */}
          <div className="skills-row skills-row-1">
            <motion.div 
              className="skills-track"
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {/* Duplicate skills for seamless loop */}
              {[...row1Skills, ...row1Skills].map((skill, index) => (
                <motion.div
                  key={`row1-${skill.name}-${index}`}
                  className="skill-card"
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="skill-icon">
                    <SkillIcon name={skill.icon} />
                  </div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Moving Right (opposite direction) */}
          <div className="skills-row skills-row-2">
            <motion.div 
              className="skills-track"
              animate={{ x: [-1000, 0] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {/* Duplicate skills for seamless loop */}
              {[...row2Skills, ...row2Skills].map((skill, index) => (
                <motion.div
                  key={`row2-${skill.name}-${index}`}
                  className="skill-card"
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="skill-icon">
                    <SkillIcon name={skill.icon} />
                  </div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 