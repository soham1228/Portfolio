import React, { useRef, useState, useEffect } from 'react';
import {
  ThemeProvider, createTheme, CssBaseline, Box, Container, Typography, Button, Card, CardContent,
  CardMedia, Grid, TextField, AppBar, Toolbar, IconButton, Chip, Fab, useMediaQuery, Dialog,
  DialogTitle, DialogContent, DialogActions, Divider, Avatar, Paper,
} from '@mui/material';
import {
  Send as SendIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Twitter as TwitterIcon,
  Email as EmailIcon, KeyboardArrowUp as KeyboardArrowUpIcon, Close as CloseIcon,
  Language as WebIcon, Phone as PhoneIcon, LocationOn as LocationIcon,
} from '@mui/icons-material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#a78bfa', light: '#c4b5fd', dark: '#7c3aed' },
    secondary: { main: '#06b6d4', light: '#22d3ee', dark: '#0891b2' },
    background: { default: '#0a0e1a', paper: '#151b2e' },
    text: { primary: '#f1f5f9', secondary: '#94a3b8' },
  },
  typography: {
    fontFamily: '"Sora", sans-serif',
    h1: { fontFamily: '"Orbitron", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Orbitron", sans-serif', fontWeight: 600 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 12, textTransform: 'none', fontWeight: 600 } } },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: 'linear-gradient(145deg, rgba(21, 27, 46, 0.95) 0%, rgba(21, 27, 46, 0.8) 100%)',
          border: '1px solid rgba(167, 139, 250, 0.15)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': { 
            transform: 'translateY(-12px) scale(1.02)', 
            boxShadow: '0 25px 50px rgba(167, 139, 250, 0.35)',
            border: '1px solid rgba(167, 139, 250, 0.4)',
          },
        },
      },
    },
  },
});

const Portfolio = () => {
  const refs = { hero: useRef(null), about: useRef(null), projects: useRef(null), skills: useRef(null), contact: useRef(null) };
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  const projects = [
    {
      title: 'AI Voice Assistant Platform',
      category: 'AI & Automation',
      desc: 'Intelligent voice-controlled Android automation with multi-language NLP',
      fullDesc: 'Revolutionary AI voice assistant leveraging advanced NLP and machine learning for seamless Android automation. Features real-time speech recognition with 95% accuracy, context-aware command interpretation, and adaptive learning.',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop',
      tags: ['Python', 'TensorFlow', 'Appium', 'Flask', 'NLP', 'Redis'],
      tech: 'Python 3.9, TensorFlow 2.x, Appium, Flask, Google Speech API, Redis, Docker',
      features: ['95% speech accuracy', 'Multi-language support', 'Context-aware AI', 'Task automation', 'Custom wake words', 'Low latency <500ms'],
      impact: '40% productivity boost • 500+ users • 25% screen time reduction',
      stats: { users: '500+', accuracy: '95%', languages: '3' },
    },
    {
      title: 'Computer Vision Gesture Control',
      category: 'Computer Vision',
      desc: 'Raspberry Pi touchless interface using advanced hand tracking',
      fullDesc: 'Innovative gesture control system using Raspberry Pi and OpenCV for real-time hand detection. Features 21-point hand tracking, 10+ custom gestures, and IoT device integration via MQTT.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
      tags: ['OpenCV', 'Raspberry Pi', 'MediaPipe', 'Python', 'IoT', 'MQTT'],
      tech: 'Raspberry Pi 4, OpenCV 4.5, MediaPipe, TensorFlow Lite, NumPy, MQTT Protocol',
      features: ['21-point hand tracking', '10+ gestures', '30 FPS processing', 'IoT integration', 'Adaptive lighting', 'Multi-hand support'],
      impact: 'Google Hackathon finalist • 60% cost savings vs commercial',
      stats: { fps: '30', gestures: '10+', devices: '5+' },
    },
    {
      title: 'Full-Stack Social Platform',
      category: 'Web & Mobile',
      desc: 'Scalable social network with React Native and real-time features',
      fullDesc: 'Comprehensive social networking platform with mobile (React Native) and web (React) apps. Features real-time messaging, personalized feeds, stories, and advanced social interactions with 15K+ active users.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
      tags: ['React Native', 'React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
      tech: 'React Native, React, Node.js, Express, MongoDB, Redis, Socket.io, AWS S3, JWT',
      features: ['Real-time chat', 'Encrypted messaging', 'AI feed algorithm', '24hr stories', 'Push notifications', 'Media CDN'],
      impact: '15K users • 99.9% uptime • 50K+ daily interactions • <2s load',
      stats: { users: '15K+', uptime: '99.9%', interactions: '50K+/day' },
    },
    {
      title: 'E-Commerce Analytics Hub',
      category: 'E-Commerce',
      desc: 'WordPress e-commerce with advanced SEO and analytics',
      fullDesc: 'Feature-rich e-commerce platform with multi-vendor support, advanced product filtering, automated inventory, and comprehensive analytics. SEO-optimized achieving 95+ score and top 3 Google rankings.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      tags: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'SEO', 'Analytics'],
      tech: 'WordPress, WooCommerce, PHP, MySQL, Stripe API, Google Analytics, Yoast SEO',
      features: ['Multi-vendor marketplace', 'Advanced filtering', 'Auto inventory', 'Email marketing', 'SEO 95+ score', 'Analytics dashboard'],
      impact: '200% traffic increase • $50K+ monthly revenue • Top 3 ranking',
      stats: { traffic: '+200%', revenue: '$50K+', seo: '95+' },
    },
    {
      title: 'Crypto Trading Terminal',
      category: 'FinTech',
      desc: 'Real-time cryptocurrency trading with advanced charts',
      fullDesc: 'Professional crypto trading platform with WebSocket real-time data, 50+ technical indicators, portfolio tracking, and automated trading strategies across multiple exchanges.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
      tags: ['React', 'TypeScript', 'WebSocket', 'Redux', 'TradingView', 'PostgreSQL'],
      tech: 'React, TypeScript, Redux Toolkit, WebSocket, TradingView Charts, Node.js, PostgreSQL',
      features: ['Real-time WebSocket', '50+ indicators', 'Trading bots', 'Multi-exchange', 'Portfolio tracking', 'Price alerts'],
      impact: '5K traders • $2M+ daily volume • 0.1s latency • 99.95% uptime',
      stats: { traders: '5K+', volume: '$2M+', latency: '0.1s' },
    },
    {
      title: 'Business Intelligence Platform',
      category: 'Data Analytics',
      desc: 'Comprehensive BI platform with predictive analytics',
      fullDesc: 'Powerful BI solution aggregating multi-source data through ETL pipelines. Features interactive dashboards, predictive ML models, custom reports, and real-time data refresh processing 10M+ records daily.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['React', 'D3.js', 'Python', 'Pandas', 'FastAPI', 'PostgreSQL'],
      tech: 'React, D3.js, Chart.js, Python, Pandas, FastAPI, PostgreSQL, Apache Airflow, Docker',
      features: ['Interactive dashboards', 'Predictive ML', 'Custom reports', 'Multi-source ETL', 'RBAC security', 'Export PDF/Excel'],
      impact: '70% time saved • 10M+ records/day • 20hrs/week saved',
      stats: { records: '10M+', timeSaved: '70%', reports: '1000+' },
    },
    {
      title: 'SaaS Project Management Tool',
      category: 'Productivity',
      desc: 'Collaborative project management with Kanban and Gantt',
      fullDesc: 'Modern project management SaaS with Kanban boards, Gantt charts, time tracking, team collaboration, and real-time updates. Supports agile workflows and integrates with popular dev tools.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tags: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Redis', 'WebSocket'],
      tech: 'React, Node.js, GraphQL, Apollo, PostgreSQL, Redis, WebSocket, Stripe',
      features: ['Kanban & Gantt', 'Time tracking', 'Team chat', 'File sharing', 'API integrations', 'Custom workflows'],
      impact: '8K teams • 45% productivity gain • 100K+ tasks managed',
      stats: { teams: '8K+', productivity: '+45%', tasks: '100K+' },
    },
    {
      title: 'AI Image Generation API',
      category: 'AI & ML',
      desc: 'RESTful API for AI image generation and manipulation',
      fullDesc: 'Scalable API service for AI-powered image generation, style transfer, and manipulation. Built with Python microservices, GPU optimization, and CDN integration for fast delivery.',
      image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=500&fit=crop',
      tags: ['Python', 'FastAPI', 'Stable Diffusion', 'Redis', 'AWS', 'Docker'],
      tech: 'Python, FastAPI, Stable Diffusion, PyTorch, Redis, AWS Lambda, S3, CloudFront',
      features: ['Text-to-image', 'Style transfer', 'Image upscaling', 'Batch processing', 'GPU optimization', 'CDN delivery'],
      impact: '2M+ images generated • 3s avg generation • 99.8% uptime',
      stats: { images: '2M+', speed: '3s', uptime: '99.8%' },
    },
    {
      title: 'Healthcare Patient Portal',
      category: 'HealthTech',
      desc: 'HIPAA-compliant patient management system',
      fullDesc: 'Secure healthcare portal with appointment scheduling, telemedicine, EHR integration, and encrypted messaging. HIPAA-compliant with role-based access and audit logging.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Security', 'HIPAA'],
      tech: 'React, Node.js, PostgreSQL, WebRTC, Twilio, AWS, Encryption (AES-256), HIPAA',
      features: ['Appointment booking', 'Video consultations', 'EHR integration', 'Secure messaging', 'Prescription management', 'HIPAA compliance'],
      impact: '12K patients • 5K consultations/month • 98% satisfaction',
      stats: { patients: '12K+', consultations: '5K/mo', satisfaction: '98%' },
    },
  ];

  const skills = [
    { name: 'React & Next.js', level: 95, cat: 'Frontend', icon: '⚛️' },
    { name: 'Node.js & Express', level: 92, cat: 'Backend', icon: '🟢' },
    { name: 'Python & Django', level: 94, cat: 'Backend', icon: '🐍' },
    { name: 'TypeScript', level: 90, cat: 'Language', icon: '📘' },
    { name: 'MongoDB & PostgreSQL', level: 88, cat: 'Database', icon: '🗄️' },
    { name: 'AWS & Docker', level: 85, cat: 'DevOps', icon: '☁️' },
    { name: 'React Native', level: 89, cat: 'Mobile', icon: '📱' },
    { name: 'GraphQL & REST', level: 93, cat: 'API', icon: '🔌' },
  ];

  useEffect(() => {
    gsap.from('.hero-title', { opacity: 0, y: 120, duration: 1.2, delay: 0.3, ease: 'power4.out' });
    gsap.from('.hero-subtitle', { opacity: 0, y: 60, duration: 1, delay: 0.6, ease: 'power3.out' });
    gsap.from('.hero-desc', { opacity: 0, y: 40, duration: 1, delay: 0.9, ease: 'power3.out' });
    gsap.from('.hero-btn', { opacity: 0, y: 40, duration: 1, delay: 1.2, stagger: 0.2, ease: 'power3.out' });

    gsap.utils.toArray('.fade-up').forEach((el) => {
      gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 85%' }, opacity: 0, y: 80, duration: 1, ease: 'power3.out' });
    });

    gsap.utils.toArray('.stagger-card').forEach((card, i) => {
      gsap.from(card, { scrollTrigger: { trigger: card, start: 'top 88%' }, opacity: 0, y: 60, scale: 0.9, duration: 0.8, delay: i * 0.1, ease: 'back.out(1.7)' });
    });

    gsap.utils.toArray('.skill-bar').forEach((bar) => {
      gsap.to(bar, { scrollTrigger: { trigger: bar, start: 'top 85%' }, width: bar.dataset.width, duration: 2, ease: 'power2.out' });
    });

    gsap.to('.parallax-bg', { scrollTrigger: { trigger: '.parallax-bg', scrub: 1 }, y: 400, ease: 'none' });

    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <AppBar position="fixed" sx={{ background: 'rgba(10, 14, 26, 0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(167, 139, 250, 0.15)' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: '"Orbitron"', background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, fontSize: '1.5rem' }}>
              SS
            </Typography>
            {!isMobile && ['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
              <Button key={item} color="inherit" onClick={() => scrollTo(Object.values(refs)[i])} sx={{ mx: 0.5, '&:hover': { color: '#a78bfa', transform: 'translateY(-2px)' }, transition: 'all 0.3s' }}>
                {item}
              </Button>
            ))}
          </Toolbar>
        </AppBar>

        <Box ref={refs.hero} sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 50%, #0a0e1a 100%)', position: 'relative', overflow: 'hidden' }}>
          <Box className="parallax-bg" sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 50%, rgba(167, 139, 250, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)', zIndex: 0 }} />
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center', py: 10 }}>
              <Typography className="hero-title" variant="h1" sx={{ fontSize: { xs: '3rem', md: '6rem' }, mb: 2, background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1 }}>
                Soham Shukla
              </Typography>
              <Typography className="hero-subtitle" variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#f1f5f9', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Full Stack Developer & AI Engineer
              </Typography>
              <Typography className="hero-desc" variant="body1" sx={{ mb: 5, color: '#94a3b8', maxWidth: '650px', mx: 'auto', fontSize: '1.15rem', lineHeight: 1.8 }}>
                Crafting cutting-edge solutions with AI, web technologies, and creative innovation. 
                Transforming ideas into scalable, beautiful applications.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button className="hero-btn" variant="contained" onClick={() => scrollTo(refs.projects)} sx={{ px: 5, py: 2, fontSize: '1.1rem', background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)', boxShadow: '0 8px 32px rgba(167, 139, 250, 0.4)' }}>
                  Explore Projects
                </Button>
                <Button className="hero-btn" variant="outlined" onClick={() => scrollTo(refs.contact)} sx={{ px: 5, py: 2, fontSize: '1.1rem', borderColor: '#a78bfa', color: '#a78bfa', borderWidth: 2 }}>
                  Get In Touch
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box ref={refs.about} sx={{ py: 15, background: 'linear-gradient(180deg, #0a0e1a 0%, #151b2e 100%)' }}>
          <Container maxWidth="lg">
            <Typography className="fade-up" variant="h2" sx={{ mb: 8, textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              About Me
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Card className="fade-up" sx={{ p: 5, height: '100%' }}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#a78bfa', mb: 3 }}>Hi there! 👋</Typography>
                  <Typography variant="body1" paragraph sx={{ color: '#94a3b8', lineHeight: 2, fontSize: '1.05rem' }}>
                    I'm a passionate Full Stack Developer and AI enthusiast from Vadodara, Gujarat. With expertise spanning web development, 
                    mobile apps, AI/ML, and cloud technologies, I love building solutions that make a real impact.
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: '#94a3b8', lineHeight: 2, fontSize: '1.05rem' }}>
                    Currently pursuing B.Tech in Computer Science at Neotech Institute of Technology (GTU), I've worked on diverse projects 
                    from AI voice assistants to crypto trading platforms, always pushing the boundaries of what's possible.
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#94a3b8', lineHeight: 2, fontSize: '1.05rem' }}>
                    When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or mentoring fellow developers. 
                    Let's build something amazing together!
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="fade-up" sx={{ p: 4, mb: 3, background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1), rgba(6, 182, 212, 0.1))' }}>
                  <Typography variant="h6" sx={{ color: '#a78bfa', mb: 3 }}>🏆 Achievements</Typography>
                  {['🥇 2x Gold Medalist - Science Fest', '🚀 Google Hackathon Finalist', '💼 10+ Projects Launched', '⭐ 15K+ Users Impacted'].map((a, i) => (
                    <Typography key={i} variant="body2" sx={{ color: '#94a3b8', mb: 1.5, fontSize: '0.95rem' }}>{a}</Typography>
                  ))}
                </Card>
                <Paper className="fade-up" sx={{ p: 4, background: 'linear-gradient(135deg, #151b2e, #1a2038)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                  <Typography variant="h6" sx={{ color: '#06b6d4', mb: 2 }}>📫 Contact</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <EmailIcon sx={{ mr: 1.5, color: '#a78bfa', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.9rem' }}>shuklasoham2812@gmail.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <PhoneIcon sx={{ mr: 1.5, color: '#06b6d4', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.9rem' }}>+91 7990741519</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationIcon sx={{ mr: 1.5, color: '#a78bfa', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.9rem' }}>Vadodara, Gujarat, India</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box ref={refs.projects} sx={{ py: 15, background: 'linear-gradient(180deg, #151b2e 0%, #0a0e1a 100%)' }}>
          <Container maxWidth="xl">
            <Typography className="fade-up" variant="h2" sx={{ mb: 3, textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Featured Projects
            </Typography>
            <Typography className="fade-up" variant="body1" sx={{ mb: 8, textAlign: 'center', color: '#94a3b8', fontSize: '1.1rem' }}>
              Click on any project to explore detailed information 🚀
            </Typography>
            <Grid container spacing={4}>
              {projects.map((p, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card className="stagger-card" onClick={() => setSelectedProject(p)} sx={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia component="img" height="240" image={p.image} alt={p.title} sx={{ transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.1)' } }} />
                      <Chip label={p.category} size="small" sx={{ position: 'absolute', top: 16, right: 16, bgcolor: 'rgba(167, 139, 250, 0.95)', color: '#fff', fontWeight: 600, backdropFilter: 'blur(10px)' }} />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontSize: '1.4rem', fontWeight: 700, mb: 1.5 }}>{p.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2.5, lineHeight: 1.7 }}>{p.desc}</Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                        {p.tags.slice(0, 4).map((t, j) => (
                          <Chip key={j} label={t} size="small" sx={{ bgcolor: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee', fontSize: '0.75rem', fontWeight: 600 }} />
                        ))}
                        {p.tags.length > 4 && <Chip label={`+${p.tags.length - 4}`} size="small" sx={{ bgcolor: 'rgba(167, 139, 250, 0.15)', color: '#c4b5fd' }} />}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} maxWidth="md" fullWidth PaperProps={{ sx: { background: '#151b2e', border: '1px solid rgba(167, 139, 250, 0.2)', borderRadius: 4, maxHeight: '90vh' } }}>
          {selectedProject && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', pb: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" sx={{ color: '#a78bfa', mb: 1, fontWeight: 700 }}>{selectedProject.title}</Typography>
                  <Chip label={selectedProject.category} sx={{ bgcolor: 'rgba(6, 182, 212, 0.2)', color: '#22d3ee', fontWeight: 600 }} />
                </Box>
                <IconButton onClick={() => setSelectedProject(null)} sx={{ color: '#94a3b8' }}><CloseIcon /></IconButton>
              </DialogTitle>
              <DialogContent sx={{ pt: 2 }}>
                <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', borderRadius: '16px', marginBottom: '24px' }} />
                <Typography variant="h6" sx={{ color: '#06b6d4', mb: 2 }}>📋 Overview</Typography>
                <Typography paragraph sx={{ color: '#94a3b8', lineHeight: 1.8, mb: 3 }}>{selectedProject.fullDesc}</Typography>
                
                <Divider sx={{ my: 3, borderColor: 'rgba(167, 139, 250, 0.2)' }} />
                
                <Typography variant="h6" sx={{ color: '#06b6d4', mb: 2 }}>🛠️ Tech Stack</Typography>
                <Typography sx={{ color: '#94a3b8', mb: 3 }}>{selectedProject.tech}</Typography>
                
                <Typography variant="h6" sx={{ color: '#06b6d4', mb: 2 }}>✨ Key Features</Typography>
                <Grid container spacing={1} sx={{ mb: 3 }}>
                  {selectedProject.features.map((f, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Box sx={{ display: 'flex', alignItems: 'center', p: 1.5, bgcolor: 'rgba(167, 139, 250, 0.05)', borderRadius: 2, border: '1px solid rgba(167, 139, 250, 0.1)' }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#06b6d4', mr: 1.5 }} />
                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>{f}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                
                <Typography variant="h6" sx={{ color: '#06b6d4', mb: 2 }}>📊 Impact & Results</Typography>
                <Box sx={{ p: 3, background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1), rgba(6, 182, 212, 0.1))', borderRadius: 3, mb: 3 }}>
                  <Typography variant="h6" sx={{ color: '#a78bfa', mb: 2 }}>{selectedProject.impact}</Typography>
                  <Grid container spacing={2}>
                    {Object.entries(selectedProject.stats).map(([key, val]) => (
                      <Grid item xs={4} key={key} sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ color: '#06b6d4', fontWeight: 700 }}>{val}</Typography>
                        <Typography variant="caption" sx={{ color: '#94a3b8', textTransform: 'uppercase' }}>{key}</Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.tags.map((t, i) => (
                    <Chip key={i} label={t} sx={{ bgcolor: 'rgba(167, 139, 250, 0.2)', color: '#c4b5fd', fontWeight: 600 }} />
                  ))}
                </Box>
              </DialogContent>
              <DialogActions sx={{ borderTop: '1px solid rgba(167, 139, 250, 0.2)', p: 3 }}>
                <Button onClick={() => setSelectedProject(null)} variant="outlined" sx={{ borderColor: '#a78bfa', color: '#a78bfa', px: 4 }}>Close</Button>
                <Button href="https://github.com/sohamshukla" target="_blank" variant="contained" startIcon={<GitHubIcon />} sx={{ background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)', px: 4 }}>
                  View Code
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        <Box ref={refs.skills} sx={{ py: 15, background: 'linear-gradient(180deg, #0a0e1a 0%, #151b2e 100%)' }}>
          <Container maxWidth="lg">
            <Typography className="fade-up" variant="h2" sx={{ mb: 8, textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Skills & Expertise
            </Typography>
            <Grid container spacing={4}>
              {skills.map((s, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Card className="stagger-card" sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                    <Typography sx={{ fontSize: '3rem', mb: 2 }}>{s.icon}</Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>{s.name}</Typography>
                    <Chip label={s.cat} size="small" sx={{ mb: 2, bgcolor: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h4" sx={{ color: '#a78bfa', fontWeight: 700 }}>{s.level}</Typography>
                      <Typography variant="h6" sx={{ color: '#94a3b8', ml: 0.5 }}>%</Typography>
                    </Box>
                    <Box sx={{ height: 10, bgcolor: 'rgba(167, 139, 250, 0.1)', borderRadius: 5, overflow: 'hidden' }}>
                      <Box className="skill-bar" data-width={`${s.level}%`} sx={{ height: '100%', width: 0, background: 'linear-gradient(90deg, #a78bfa 0%, #06b6d4 100%)', borderRadius: 5 }} />
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box ref={refs.contact} sx={{ py: 15, background: 'linear-gradient(180deg, #151b2e 0%, #0a0e1a 100%)' }}>
          <Container maxWidth="md">
            <Typography className="fade-up" variant="h2" sx={{ mb: 3, textAlign: 'center', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Let's Create Together
            </Typography>
            <Typography className="fade-up" variant="body1" sx={{ mb: 8, textAlign: 'center', color: '#94a3b8', fontSize: '1.1rem' }}>
              Have an exciting project? Let's discuss how we can bring it to life!
            </Typography>
            <Card className="fade-up" sx={{ p: 5 }}>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField fullWidth label="Your Name" required />
                <TextField fullWidth label="Email Address" type="email" required />
                <TextField fullWidth label="Subject" required />
                <TextField fullWidth label="Your Message" multiline rows={6} required />
                <Button variant="contained" size="large" endIcon={<SendIcon />} sx={{ py: 2, fontSize: '1.1rem', background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)', boxShadow: '0 8px 32px rgba(167, 139, 250, 0.4)' }}>
                  Send Message
                </Button>
              </Box>
              <Divider sx={{ my: 4, borderColor: 'rgba(167, 139, 250, 0.2)' }} />
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                {[
                  { icon: <GitHubIcon />, url: 'https://github.com/sohamshukla' },
                  { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/sohamshukla' },
                  { icon: <TwitterIcon />, url: 'https://twitter.com/sohamshukla' },
                  { icon: <EmailIcon />, url: 'mailto:shuklasoham2812@gmail.com' }
                ].map((social, i) => (
                  <IconButton key={i} href={social.url} target="_blank" sx={{ bgcolor: 'rgba(167, 139, 250, 0.1)', '&:hover': { bgcolor: 'rgba(167, 139, 250, 0.2)', transform: 'translateY(-4px)' }, transition: 'all 0.3s' }}>
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Card>
          </Container>
        </Box>

        <Box sx={{ py: 5, textAlign: 'center', borderTop: '1px solid rgba(167, 139, 250, 0.15)', background: '#0a0e1a' }}>
          <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1 }}>
            © 2024 Soham Shukla. Crafted with 💜 using React, Material-UI & GSAP
          </Typography>
          <Typography variant="caption" sx={{ color: '#94a3b8' }}>
            Available for freelance • Open to opportunities
          </Typography>
        </Box>

        {showScrollTop && (
          <Fab onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} sx={{ position: 'fixed', bottom: 32, right: 32, background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)', boxShadow: '0 8px 32px rgba(167, 139, 250, 0.5)', '&:hover': { transform: 'translateY(-5px) scale(1.1)' }, transition: 'all 0.3s' }}>
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;