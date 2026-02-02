import { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { motion } from 'framer-motion';
import axios from 'axios';
import darkTheme from './theme';
import EmailForm from './components/EmailForm';
import EmailResponse from './components/EmailResponse';
import ErrorNotification from './components/ErrorNotification';
import AnimatedBackground from './components/AnimatedBackground';
import BASE_URL from './config/api';

const MotionBox = motion(Box);

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!emailContent.trim()) {
      setError('Please enter email content');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${BASE_URL}/api/email/generate`, {
        emailContent,
        tone,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const reply = typeof response.data === 'string'
        ? response.data
        : response.data.message || JSON.stringify(response.data);

      setGeneratedReply(reply);
    } catch (err) {
      let errorMessage = 'Failed to generate reply. Please try again.';

      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.status === 503) {
        errorMessage = 'Backend service unavailable. Please try again later.';
      } else if (err.request && !err.response) {
        errorMessage = 'Network error. Please check your connection and backend availability.';
      } else if (err.message) {
        errorMessage = err.message;
      }

      setError(errorMessage);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AnimatedBackground />
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        style={{
          minHeight: '100vh',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Container maxWidth="md" sx={{ py: 6 }}>
          <MotionBox
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            sx={{ mb: 6, textAlign: 'center' }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 2,
                background: 'linear-gradient(135deg, #818cf8 0%, #c4b5fd 50%, #a78bfa 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              ✨ Smart Email Assistant
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#cbd5e1',
                maxWidth: '500px',
                mx: 'auto',
                fontSize: '1.1rem',
                fontWeight: 400,
              }}
            >
              AI-powered email replies crafted for any tone. Write smarter, respond faster.
            </Typography>
          </MotionBox>

          {error && <ErrorNotification message={error} onClose={() => setError('')} />}

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            sx={{ mb: 4, gap: 3, display: 'flex', flexDirection: 'column' }}
          >
            <Box>
              <Typography variant="h4" sx={{ mb: 2, color: '#f1f5f9', fontWeight: 600 }}>
                📝 Your Email
              </Typography>
              <EmailForm
                emailContent={emailContent}
                setEmailContent={setEmailContent}
                tone={tone}
                setTone={setTone}
                onSubmit={handleSubmit}
                loading={loading}
              />
            </Box>

            <Box>
              <Typography variant="h4" sx={{ mb: 2, color: '#f1f5f9', fontWeight: 600 }}>
                💭 AI Response
              </Typography>
              <EmailResponse generatedReply={generatedReply} loading={loading} />
            </Box>
          </MotionBox>
        </Container>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
