import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

const MotionBox = motion(Box);

function EmailForm({ 
  emailContent, 
  setEmailContent, 
  tone, 
  setTone, 
  onSubmit, 
  loading 
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(148, 163, 184, 0.15)',
        padding: '28px',
        backdropFilter: 'blur(10px)',
      }}
    >
      <MotionBox variants={itemVariants} sx={{ mb: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="📧 Original Email Content"
          placeholder="Paste the email you want to reply to..."
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          disabled={loading}
        />
      </MotionBox>

      <MotionBox variants={itemVariants} sx={{ mb: 3 }}>
        <FormControl fullWidth>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
            disabled={loading}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Professional">Professional</MenuItem>
            <MenuItem value="Casual">Casual</MenuItem>
            <MenuItem value="Friendly">Friendly</MenuItem>
          </Select>
        </FormControl>
      </MotionBox>

      <MotionBox
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          fullWidth
          variant="contained"
          onClick={onSubmit}
          disabled={!emailContent || loading}
          sx={{
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 600,
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {loading ? (
            <>
              <CircularProgress size={20} sx={{ color: 'inherit' }} />
              Generating...
            </>
          ) : (
            <>
              <Sparkles size={20} />
              Generate Reply
            </>
          )}
        </Button>
      </MotionBox>
    </MotionBox>
  );
}

export default EmailForm;
