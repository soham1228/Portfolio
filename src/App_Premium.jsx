import React from "react";
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { premiumTheme } from "./theme";
import AnimatedBackground from "./AnimatedBackground";
import Portfolio from "./Portfolio";

// Enhanced global styles for premium look
const globalStyles = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  body: {
    margin: 0,
    padding: 0,
    overflowX: "hidden",
    fontFamily: '"Space Grotesk", "Inter", sans-serif',
  },
  // Smooth transitions for all interactive elements
  "a, button": {
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  // Remove default link styling
  a: {
    textDecoration: "none",
    color: "inherit",
  },
  // Selection color
  "::selection": {
    background: "rgba(0, 240, 255, 0.3)",
    color: "#ffffff",
  },
  "::-moz-selection": {
    background: "rgba(0, 240, 255, 0.3)",
    color: "#ffffff",
  },
};

function App() {
  return (
    <ThemeProvider theme={premiumTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <AnimatedBackground />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;