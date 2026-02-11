import React, { useRef, useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Chip,
  Fab,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Send as SendIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@mui/icons-material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00d9ff' },
    background: { default: '#0a0e27', paper: '#131729' },
    text: { primary: '#ffffff', secondary: '#94a3b8' },
  },
  typography: {
    fontFamily: '"Sora", sans-serif',
    h1: { fontFamily: '"Orbitron", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Orbitron", sans-serif', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: 'none', fontWeight: 600 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'linear-gradient(135deg, rgba(19, 23, 41, 0.9) 0%, rgba(19, 23, 41, 0.7) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.1)',
        },
      },
    },
  },
});

const TestPortfolio = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Voice Assistant with Android Automation',
      description: 'AI-powered voice assistant using Python, Appium, and Flask.',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop',
      tags: ['Python', 'Appium', 'Flask', 'AI'],
    },
    {
      title: 'AI Hand Gesture Control',
      description: 'Raspberry Pi prototype using OpenCV. Google Hackathon finalist.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      tags: ['Raspberry Pi', 'OpenCV', 'AI'],
    },
    {
      title: 'Cross-Platform App',
      description: 'Full-stack platform with React Native and React web.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      tags: ['React Native', 'React', 'Node.js'],
    },
    {
      title: 'TheWallOfDreams E-commerce',
      description: 'WordPress e-commerce with SEO optimization.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      tags: ['WordPress', 'E-commerce', 'SEO'],
    },
    {
      title: 'Trading App',
      description: 'Trading application with API integration.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      tags: ['API', 'React', 'Analytics'],
    },
    {
      title: 'Management Platform',
      description: 'Live management and analysis platform.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['API', 'Analytics', 'Web Dev'],
    },
  ];

  const skills = [
    { name: 'Python Programming', level: 90 },
    { name: 'React & React Native', level: 88 },
    { name: 'Node.js & APIs', level: 85 },
    { name: 'UI/UX Design', level: 87 },
    { name: 'WordPress & PHP', level: 82 },
    { name: 'Flutter', level: 80 },
    { name: 'AI & NLP', level: 85 },
    { name: 'SQL & Data', level: 83 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        {/* Navigation */}
        <AppBar position="fixed" sx={{ background: 'rgba(10, 14, 39, 0.9)', backdropFilter: 'blur(10px)' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: '"Orbitron", sans-serif' }}>
              Soham Shukla
            </Typography>
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button color="inherit" onClick={() => scrollToSection(heroRef)}>Home</Button>
                <Button color="inherit" onClick={() => scrollToSection(aboutRef)}>About</Button>
                <Button color="inherit" onClick={() => scrollToSection(projectsRef)}>Projects</Button>
                <Button color="inherit" onClick={() => scrollToSection(skillsRef)}>Skills</Button>
                <Button color="inherit" onClick={() => scrollToSection(contactRef)}>Contact</Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>

        {/* Hero */}
        <Box ref={heroRef} sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' }, mb: 2, background: 'linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Soham Shukla
              </Typography>
              <Typography variant="h5" sx={{ mb: 2, color: '#ffffff', fontWeight: 600 }}>
                Software Developer & Creative Technologist
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#94a3b8', maxWidth: '800px', mx: 'auto' }}>
                Passionate about building intelligent solutions through code and design.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button variant="contained" size="large" onClick={() => scrollToSection(projectsRef)} sx={{ px: 4, py: 1.5, background: 'linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)' }}>
                  View My Work
                </Button>
                <Button variant="outlined" size="large" onClick={() => scrollToSection(contactRef)} sx={{ px: 4, py: 1.5, borderColor: '#00d9ff', color: '#00d9ff' }}>
                  Get In Touch
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* About */}
        <Box ref={aboutRef} sx={{ py: 12, background: '#1a1f3a' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' } }}>
              About Me
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ color: '#00d9ff', mb: 2 }}>
                      Who I Am
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#94a3b8', lineHeight: 1.8 }}>
                      A passionate Software Developer from Vadodara, Gujarat. I transform ideas into production-ready applications. Currently pursuing B.Tech in Computer Science from Neotech Institute of Technology (GTU).
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ color: '#00d9ff', mb: 2 }}>
                      🏆 Achievements
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Typography sx={{ color: '#94a3b8' }}>🏆 2x Gold Medalist in College Science Fest</Typography>
                      <Typography sx={{ color: '#94a3b8' }}>🚀 Google x Nudge Hackathon Pre-Finals</Typography>
                      <Typography sx={{ color: '#94a3b8' }}>💡 AI Voice Assistant in Production</Typography>
                      <Typography sx={{ color: '#94a3b8' }}>🎨 Active E-commerce Materials</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Projects */}
        <Box ref={projectsRef} sx={{ py: 12, background: '#0a0e27' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' } }}>
              Featured Projects
            </Typography>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia component="img" height="200" image={project.image} alt={project.title} />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom>{project.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2 }}>{project.description}</Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.tags.map((tag, i) => (
                          <Chip key={i} label={tag} size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.2)', color: '#4dffff' }} />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Skills */}
        <Box ref={skillsRef} sx={{ py: 12, background: '#1a1f3a' }}>
          <Container maxWidth="lg">
            <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' } }}>
              Skills & Technologies
            </Typography>
            <Grid container spacing={4}>
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6" sx={{ flexGrow: 1 }}>{skill.name}</Typography>
                      <Typography variant="body2" sx={{ color: '#00d9ff', fontWeight: 'bold' }}>{skill.level}%</Typography>
                    </Box>
                    <Box sx={{ height: 8, bgcolor: 'rgba(99, 102, 241, 0.1)', borderRadius: 4 }}>
                      <Box sx={{ height: '100%', width: `${skill.level}%`, background: 'linear-gradient(90deg, #00d9ff 0%, #6366f1 100%)', borderRadius: 4 }} />
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Contact */}
        <Box ref={contactRef} sx={{ py: 12, background: '#0a0e27' }}>
          <Container maxWidth="md">
            <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' } }}>
              Get In Touch
            </Typography>
            <Card sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#00d9ff' }}>📧 Email</Typography>
                  <Typography sx={{ color: '#94a3b8' }}>shuklasoham2812@gmail.com</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#00d9ff' }}>📱 Phone</Typography>
                  <Typography sx={{ color: '#94a3b8' }}>+91 7990741519</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#00d9ff' }}>📍 Location</Typography>
                  <Typography sx={{ color: '#94a3b8' }}>Vadodara, Gujarat, India</Typography>
                </Box>
              </Box>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField fullWidth label="Name" variant="outlined" required />
                <TextField fullWidth label="Email" type="email" variant="outlined" required />
                <TextField fullWidth label="Subject" variant="outlined" required />
                <TextField fullWidth label="Message" multiline rows={6} variant="outlined" required />
                <Button variant="contained" size="large" endIcon={<SendIcon />} sx={{ py: 1.5, background: 'linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)' }}>
                  Send Message
                </Button>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
                <IconButton href="https://github.com/sohamshukla" target="_blank" sx={{ color: '#94a3b8', '&:hover': { color: '#00d9ff' } }}>
                  <GitHubIcon />
                </IconButton>
                <IconButton href="https://linkedin.com/in/sohamshukla" target="_blank" sx={{ color: '#94a3b8', '&:hover': { color: '#00d9ff' } }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton href="https://twitter.com/sohamshukla" target="_blank" sx={{ color: '#94a3b8', '&:hover': { color: '#00d9ff' } }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton href="mailto:shuklasoham2812@gmail.com" sx={{ color: '#94a3b8', '&:hover': { color: '#00d9ff' } }}>
                  <EmailIcon />
                </IconButton>
              </Box>
            </Card>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ py: 4, textAlign: 'center', borderTop: '1px solid rgba(99, 102, 241, 0.2)', background: '#0a0e27' }}>
          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
            © 2024 Soham Shukla. Built with React & Material-UI ✨
          </Typography>
          <Typography variant="caption" sx={{ color: '#94a3b8', mt: 1, display: 'block' }}>
            Languages: English • Hindi • Gujarati
          </Typography>
        </Box>

        {/* Scroll to Top */}
        {showScrollTop && (
          <Fab color="primary" size="medium" onClick={scrollToTop} sx={{ position: 'fixed', bottom: 32, right: 32, background: 'linear-gradient(135deg, #00d9ff 0%, #6366f1 100%)' }}>
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default TestPortfolio;