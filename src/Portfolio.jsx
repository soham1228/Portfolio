import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Portfolio = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    // Close mobile drawer after navigation
    setMobileOpen(false);
  };

  const navItems = [
    { label: "Home", ref: heroRef },
    { label: "About", ref: aboutRef },
    { label: "Projects", ref: projectsRef },
    { label: "Skills", ref: skillsRef },
    { label: "Contact", ref: contactRef },
  ];

  return (
    <>
      <Navbar
        navItems={navItems}
        scrollToSection={scrollToSection}
        isMobile={isMobile}
        setMobileOpen={setMobileOpen}
      />

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            background: "#0a0e27",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box
            sx={{
              fontFamily: '"Orbitron", sans-serif',
              fontSize: "1.2rem",
              background: "linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Menu
          </Box>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(item.ref)}
                sx={{
                  "&:hover": {
                    background: "rgba(0, 217, 255, 0.1)",
                    borderLeft: "3px solid #00d9ff",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Hero heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Skills skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </>
  );
};

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        zIndex: 1000,
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
        width: 50,
        height: 50,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(0, 217, 255, 0.4)",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 30px rgba(0, 217, 255, 0.6)",
        },
      }}
    >
      <Box
        sx={{
          width: 0,
          height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderBottom: "12px solid #fff",
        }}
      />
    </Box>
  );
};

export default Portfolio;