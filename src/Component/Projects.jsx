import {
  useFadeInUp,
  useStaggerChildren,
  useSlideInLeft,
  useScaleIn,
} from "../GsapAnimations";

import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const Projects = ({ projectsRef }) => {
  const myRef = useFadeInUp();
  const childrenRef = useStaggerChildren(0.1);

  const titleRef = useFadeInUp();
  const cardsRef = useStaggerChildren(0.15);

  return (
    <Box
      ref={projectsRef}
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        zIndex: 1,
      }}
    >
      <Card
        sx={{
          background: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 240, 255, 0.1)",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(0, 240, 255, 0.05), rgba(168, 85, 247, 0.05))",
            opacity: 0,
            transition: "opacity 0.4s",
          },
          "&:hover": {
            transform: "translateY(-12px) scale(1.02)",
            border: "1px solid rgba(0, 240, 255, 0.3)",
            boxShadow:
              "0 25px 70px rgba(0, 240, 255, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)",
            "&::before": {
              opacity: 1,
            },
          },
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <CardContent>
          <Typography variant="h5" color="white">
            Project Title
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Projects;
  