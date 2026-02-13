import React, { useEffect, useRef } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { gsap } from "gsap";
import { useFadeInUp, useFloating } from "../GsapAnimations";

const Hero = ({ heroRef }) => {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const glowRef = useFloating(4, 15);

  useEffect(() => {
    // Hero entrance timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      headingRef.current,
      { 
        y: 100, 
        opacity: 0,
        scale: 0.9,
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.5,
      }
    )
    .fromTo(
      subtitleRef.current,
      { 
        y: 60, 
        opacity: 0,
      },
      { 
        y: 0, 
        opacity: 1,
        duration: 1,
      },
      '-=0.7'
    )
    .fromTo(
      buttonRef.current,
      { 
        y: 40, 
        opacity: 0,
        scale: 0.8,
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 0.8,
      },
      '-=0.5'
    );

    // Continuous glow pulse on heading
    gsap.to(headingRef.current, {
      textShadow: '0 0 30px rgba(0, 240, 255, 0.8), 0 0 60px rgba(168, 85, 247, 0.4)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Floating animation on emoji
    const emojiSpans = headingRef.current.querySelectorAll('.emoji');
    emojiSpans.forEach((span) => {
      gsap.to(span, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <Box
      ref={heroRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Floating glow orbs */}
      <Box
        ref={glowRef}
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: { xs: 250, md: 500 },
          height: { xs: 250, md: 500 },
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-30px)' },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          ref={headingRef}
          variant="h1"
          sx={{
            fontFamily: '"Orbitron", sans-serif',
            fontWeight: 900,
            fontSize: { xs: '2.5rem', sm: '4rem', md: '5.5rem', lg: '7rem' },
            mb: 3,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ffffff 0%, #00f0ff 50%, #a855f7 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
            '& .emoji': {
              display: 'inline-block',
            },
          }}
        >
          Hi, I'm Soham <span className="emoji">👋</span>
        </Typography>

        <Typography 
          ref={subtitleRef}
          variant="h5" 
          sx={{ 
            color: '#cbd5e1',
            fontWeight: 500,
            fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' },
            mb: 5,
            maxWidth: '800px',
            lineHeight: 1.4,
            '& span': {
              background: 'linear-gradient(135deg, #00f0ff, #a855f7)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            },
          }}
        >
          <span>Full Stack Developer</span> | <span>AI Automation Builder</span> | <span>App Developer</span>
        </Typography>

        <Button
          ref={buttonRef}
          variant="contained"
          sx={{
            fontSize: { xs: '1rem', sm: '1.15rem' },
            padding: { xs: '14px 32px', sm: '16px 48px' },
            fontWeight: 700,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)',
            boxShadow: '0 8px 32px rgba(0, 240, 255, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shine 3s infinite',
            },
            '@keyframes shine': {
              '0%': { left: '-50%' },
              '100%': { left: '150%' },
            },
            '&:hover': {
              background: 'linear-gradient(135deg, #5ffbff 0%, #c084fc 100%)',
              boxShadow: '0 12px 48px rgba(0, 240, 255, 0.5), 0 0 80px rgba(168, 85, 247, 0.3)',
              transform: 'translateY(-4px) scale(1.02)',
            },
            '&:active': {
              transform: 'translateY(-2px) scale(0.98)',
            },
          }}
        >
          View My Work
        </Button>

        {/* Decorative code brackets */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 10, md: 50 },
            left: { xs: -20, md: 50 },
            fontSize: { xs: '4rem', md: '8rem' },
            color: 'rgba(0, 240, 255, 0.1)',
            fontFamily: 'monospace',
            fontWeight: 700,
            pointerEvents: 'none',
            animation: 'pulse 4s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { opacity: 0.1 },
              '50%': { opacity: 0.2 },
            },
          }}
        >
          {'</>'}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;