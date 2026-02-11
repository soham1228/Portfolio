import React, { useRef } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";  
import About from "./Component/About";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";

const Portfolio = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
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
        isMobile={false}
        setMobileOpen={() => {}}
      />

      <Hero heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Skills skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />
    </>
  );
};

export default Portfolio;
