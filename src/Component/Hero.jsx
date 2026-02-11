import React, { useEffect, useRef } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ heroRef }) => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
      })
        .from(
          subtitleRef.current,
          {
            y: 80,
            opacity: 0,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          buttonRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            scale: 0.8,
          },
          "-=0.6"
        );

      // Parallax scroll effect for the entire hero
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: heroRef?.current || containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        y: 200,
        opacity: 0.3,
      });

      // Background color transition on scroll
      gsap.to(backgroundRef.current, {
        scrollTrigger: {
          trigger: heroRef?.current || containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        background: "linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%)",
      });

      // Individual text animations on scroll
      gsap.to(headingRef.current, {
        scrollTrigger: {
          trigger: heroRef?.current || containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
        scale: 0.95,
      });

      gsap.to(subtitleRef.current, {
        scrollTrigger: {
          trigger: heroRef?.current || containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
        y: -80,
        opacity: 0.5,
      });

      // Button hover animation
      const button = buttonRef.current;
      
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          boxShadow: "0 10px 40px rgba(99, 102, 241, 0.4)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          boxShadow: "0 4px 20px rgba(99, 102, 241, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, [heroRef]);

  return (
    <Box
      ref={(el) => {
        if (heroRef) heroRef.current = el;
        backgroundRef.current = el;
      }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#0a0e27",
        color: "white",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 80% 20%, rgba(0, 217, 255, 0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container
        maxWidth="md"
        ref={containerRef}
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          ref={headingRef}
          variant="h2"
          sx={{
            fontFamily: '"Orbitron", sans-serif',
            mb: { xs: 2, sm: 3 },
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "4rem" },
            fontWeight: 700,
            lineHeight: 1.2,
            textShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
            willChange: "transform",
          }}
        >
          Hi, I'm Soham 👋
        </Typography>

        <Typography
          ref={subtitleRef}
          variant="h5"
          sx={{
            color: "#94a3b8",
            mb: { xs: 3, sm: 4 },
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            lineHeight: 1.6,
            maxWidth: "600px",
            willChange: "transform",
          }}
        >
          Full Stack Developer | AI Automation Builder | App Developer
        </Typography>

        <Button
          ref={buttonRef}
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)",
            padding: { xs: "12px 24px", sm: "14px 32px", md: "16px 40px" },
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            fontWeight: 600,
            borderRadius: "8px",
            textTransform: "none",
            boxShadow: "0 4px 20px rgba(99, 102, 241, 0.2)",
            willChange: "transform",
            transition: "none",
            "&:hover": {
              background: "linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)",
            },
            "&:active": {
              transform: "scale(0.98)",
            },
          }}
        >
          View My Work
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;