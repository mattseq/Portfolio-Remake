import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'minecraft', label: 'Minecraft Mods' },
    { id: 'other', label: 'Other' }
  ];

  const projects = [
    {
      id: 1,
      title: "My Portfolio",
      category: "web",
      status: "complete",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      description: "A modern, interactive personal website showcasing my projects, skills, and journey as a developer. Features smooth animations, responsive design, and an intuitive user experience.",
      fact: "Built from scratch with modern design principles!",
      link: "#",
      linkText: "You're here!",
      isInternal: true
    },
    {
      id: 2,
      title: "Ping Mod",
      category: "minecraft",
      status: "complete",
      tags: ["Minecraft", "Java", "Forge", "Multiplayer"],
      description: "A lightweight Minecraft mod that lets you ping locations in-game, making teamwork and coordination effortless. Features customizable ping colors, sounds, and visual effects.",
      fact: "Inspired by modern multiplayer games like Apex Legends!",
      link: "https://www.curseforge.com/minecraft/mc-mods/ping-mod",
      linkText: "View on CurseForge",
      isInternal: false
    },
    {
      id: 3,
      title: "Echoes of Time",
      category: "minecraft",
      status: "complete",
      tags: ["Minecraft", "Java", "Forge", "Lore"],
      description: "A lore-rich Minecraft mod for 1.20+ introducing time-bending relics and new Ancient City mysteries. Features a comprehensive time rewinding system and unique gameplay mechanics.",
      fact: "Features a comprehensive time rewinding system!",
      link: "https://modrinth.com/mod/echoes-of-time",
      linkText: "View on Modrinth",
      isInternal: false
    },
    {
      id: 4,
      title: "AI Chat Bookmarklet",
      category: "web",
      status: "complete",
      tags: ["JavaScript", "API", "Bookmarklet", "AI"],
      description: "An AI chatbot bookmarklet using Hack Club's API that creates a unique personality every time it's launched. Perfect for quick AI interactions without leaving your current page.",
      fact: "Different AI personality each time you use it!",
      link: "https://github.com/mattseq/AI-Chat-Bookmarklet",
      linkText: "View on GitHub",
      isInternal: false
    },
    {
      id: 5,
      title: "Speech Bubbles",
      category: "minecraft",
      status: "wip",
      tags: ["Minecraft", "Java", "Speech-to-Text", "Vosk"],
      description: "A Minecraft mod that adds speech bubbles above players. Uses Vosk Speech-to-Text models to translate real-time speech into text, making communication more immersive.",
      fact: "Real-time voice-to-text in Minecraft!",
      link: "#",
      linkText: "Coming Soon",
      isInternal: true
    },
    {
      id: 6,
      title: "Inhabitants",
      category: "minecraft",
      status: "wip",
      tags: ["Minecraft", "Java", "Collaborative", "AI"],
      description: "A collaborative Minecraft mod that adds various new and unique creatures to the game, each with their own new game mechanics and behaviors. Expanding Minecraft's ecosystem with intelligent AI-driven entities.",
      fact: "Expanding Minecraft's ecosystem with unique creatures!",
      link: "#",
      linkText: "Coming Soon",
      isInternal: true
    },
    {
      id: 7,
      title: "Neural Network from Scratch",
      category: "ai",
      status: "concept",
      tags: ["Python", "AI", "Machine Learning", "Mathematics"],
      description: "A complete implementation of neural networks from the ground up, including backpropagation, gradient descent, and various activation functions. Educational project to understand AI fundamentals.",
      fact: "Building AI without external libraries!",
      link: "#",
      linkText: "Concept Phase",
      isInternal: true
    },
    {
      id: 8,
      title: "Heartbeat",
      category: "minecraft",
      status: "concept",
      tags: ["Minecraft", "Java", "Immersion", "Audio"],
      description: "A mod that adds immersive effects seamlessly into Minecraft. Effects include: screenshake, heavy breathing, screen pulse, trembling, and of course, a heartbeat. Making Minecraft more immersive and engaging.",
      fact: "Making Minecraft more immersive!",
      link: "#",
      linkText: "Concept Phase",
      isInternal: true
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );



  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        {/* Project Filters */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ 
                scale: activeFilter === filter.id ? 1 : 1.05,
                y: activeFilter === filter.id ? 0 : -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Project List */}
        <motion.div
          className="project-list"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.1 }
                }}
              >
                <div 
                  className={`project-status status-${project.status}`}
                >
                  {project.status === 'complete' ? 'Complete' : 
                   project.status === 'wip' ? 'WIP' : 'Concept'}
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p>
                    {project.description}
                    <br />
                    <span className="project-fact">{project.fact}</span>
                  </p>
                  <motion.a
                    href={project.link}
                    className="project-link"
                    target={project.isInternal ? undefined : "_blank"}
                    rel={project.isInternal ? undefined : "noopener noreferrer"}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    style={{
                      color: project.status === 'wip' ? '#ffc107' : 
                             project.status === 'concept' ? '#8a2be2' : undefined
                    }}
                  >
                    {project.linkText}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 