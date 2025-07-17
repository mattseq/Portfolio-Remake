import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 80,
              density: { 
                enable: true, 
                value_area: 1000 
              }
            },
            color: { 
              value: ['#ff4757', '#667eea', '#764ba2'] 
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.6,
              random: true,
              anim: { 
                enable: true, 
                speed: 1, 
                opacity_min: 0.1, 
                sync: false 
              }
            },
            size: {
              value: 3,
              random: true,
              anim: { 
                enable: true, 
                speed: 2, 
                size_min: 0.3, 
                sync: false 
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ff4757',
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: 'none',
              random: false,
              straight: false,
              bounce: false,
              attract: { 
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="particles-js" style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    pointerEvents: 'none'
  }} />;
};

export default ParticlesBackground; 