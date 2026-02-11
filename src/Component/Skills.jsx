import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ skillsRef }) => {
  const titleRef = useRef(null);
  const skillCardsRef = useRef([]);
  const progressBarsRef = useRef([]);
  const techStackRef = useRef(null);
  const techCategoriesRef = useRef([]);

  const skills = [
    { name: 'Python Programming', level: 90 },
    { name: 'React & React Native', level: 88 },
    { name: 'Node.js & APIs', level: 85 },
    { name: 'UI/UX Design', level: 87 },
    { name: 'WordPress & PHP', level: 82 },
    { name: 'Flutter', level: 80 },
    { name: 'AI & NLP', level: 85 },
    { name: 'SQL & Data Handling', level: 83 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Skill cards stagger animation
      skillCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
            y: 80,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
          });
        }
      });

      // Animated progress bars
      progressBarsRef.current.forEach((bar, index) => {
        if (bar) {
          // Start from 0 width
          gsap.set(bar, { width: '0%' });
          
          // Animate to actual width when in view
          gsap.to(bar, {
            scrollTrigger: {
              trigger: bar,
              start: 'top 80%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
            width: `${skills[index].level}%`,
            duration: 1.5,
            delay: index * 0.05,
            ease: 'power2.out',
          });

          // Pulsing glow effect on the progress bar
          gsap.to(bar, {
            scrollTrigger: {
              trigger: bar,
              start: 'top 80%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      });

      // Tech Stack card animation
      gsap.from(techStackRef.current, {
        scrollTrigger: {
          trigger: techStackRef.current,
          start: 'top 85%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'back.out(1.2)',
      });

      // Tech categories stagger
      gsap.from(techCategoriesRef.current, {
        scrollTrigger: {
          trigger: techStackRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // Parallax effect on skill cards
      skillCardsRef.current.forEach((card, index) => {
        if (card) {
          const yOffset = index % 2 === 0 ? -20 : 20;
          gsap.to(card, {
            scrollTrigger: {
              trigger: skillsRef?.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
            y: yOffset,
          });
        }
      });
    }, skillsRef);

    return () => ctx.revert();
  }, [skillsRef, skills]);

  return (
    <Box 
      ref={skillsRef} 
      sx={{ 
        py: 12, 
        background: '#1a1f3a',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '15%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          ref={titleRef}
          variant="h2" 
          sx={{ 
            mb: 6, 
            textAlign: 'center', 
            fontSize: { xs: '2rem', md: '3rem' },
            fontFamily: '"Orbitron", sans-serif',
            background: 'linear-gradient(135deg, #fff 0%, #6366f1 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
          }}
        >
          Skills & Technologies
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card 
                ref={(el) => (skillCardsRef.current[index] = el)}
                sx={{ 
                  p: 3,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #00d9ff 0%, #6366f1 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 50px rgba(0, 217, 255, 0.2)',
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      flexGrow: 1,
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: { xs: '1rem', sm: '1.15rem' },
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#00d9ff', 
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      fontFamily: '"Orbitron", sans-serif',
                    }}
                  >
                    {skill.level}%
                  </Typography>
                </Box>
                <Box sx={{ 
                  position: 'relative', 
                  height: 10, 
                  bgcolor: 'rgba(99, 102, 241, 0.15)', 
                  borderRadius: 5,
                  overflow: 'hidden',
                }}>
                  <Box
                    ref={(el) => (progressBarsRef.current[index] = el)}
                    sx={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: '0%', // Will be animated
                      background: 'linear-gradient(90deg, #00d9ff 0%, #6366f1 100%)',
                      borderRadius: 5,
                      transition: 'box-shadow 0.3s ease',
                    }}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Tech Stack */}
        <Box sx={{ mt: 8 }}>
          <Card 
            ref={techStackRef}
            sx={{ 
              p: { xs: 3, sm: 4 },
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, #00d9ff 0%, #6366f1 50%, #00d9ff 100%)',
              },
            }}
          >
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                color: '#00d9ff', 
                mb: 4,
                fontWeight: 700,
                fontSize: { xs: '1.5rem', sm: '1.75rem' },
              }}
            >
              🛠️ Tech Stack
            </Typography>
            <Grid container spacing={3}>
              {[
                {
                  title: 'Languages & Frameworks',
                  content: 'Python • JavaScript • ReactJS • React Native • Flutter • Node.js • PHP • HTML & CSS • SQL',
                  icon: '💻',
                },
                {
                  title: 'Tools & Technologies',
                  content: 'Git • GitHub • Postman • Figma • Android Studio • Appium • Selenium • MUI • Flask',
                  icon: '🔧',
                },
                {
                  title: 'Design Tools',
                  content: 'Canva • Adobe Photoshop • Photopea • Midjourney • Figma',
                  icon: '🎨',
                },
              ].map((category, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    ref={(el) => (techCategoriesRef.current[index] = el)}
                    sx={{
                      p: 3,
                      borderRadius: '12px',
                      background: 'rgba(0, 217, 255, 0.05)',
                      border: '1px solid rgba(0, 217, 255, 0.1)',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(0, 217, 255, 0.1)',
                        transform: 'translateY(-5px)',
                        border: '1px solid rgba(0, 217, 255, 0.3)',
                        boxShadow: '0 10px 30px rgba(0, 217, 255, 0.2)',
                      },
                    }}
                  >
                    <Typography 
                      variant="subtitle1" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 'bold',
                        color: '#fff',
                        mb: 2,
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                      }}
                    >
                      {category.icon} {category.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#94a3b8',
                        lineHeight: 1.8,
                        fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      }}
                    >
                      {category.content}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;