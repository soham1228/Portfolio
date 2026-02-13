import {
  useFadeInUp,
  useStaggerChildren,
  useSlideInLeft,
  useScaleIn,
} from "../GsapAnimations";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";  
const Contact = ({ contactRef }) => {
  const titleRef = useFadeInUp();
  const formRef = useScaleIn(0.2);
  const myRef = useFadeInUp();
  const childrenRef = useStaggerChildren(0.1);

  return (
    <Box
      ref={contactRef}
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        zIndex: 1,
      }}
    >
      <Card
        ref={formRef}
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          background: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 240, 255, 0.2)",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #00f0ff 0%, #a855f7 100%)",
            borderRadius: "24px 24px 0 0",
          },
        }}
      >
        {/* Existing form content */}
      </Card>
    </Box>
  );
};
export default Contact;
