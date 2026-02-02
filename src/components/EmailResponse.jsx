import { Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const MotionBox = motion(Box);

function EmailResponse({ generatedReply, loading }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedReply);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const shimmerVariants = {
    hidden: { backgroundPosition: '200% 0' },
    visible: {
      backgroundPosition: '-200% 0',
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(148, 163, 184, 0.15)',
        padding: '28px',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {loading && (
        <MotionBox
          variants={shimmerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent)',
            backgroundSize: '200% 100%',
            pointerEvents: 'none',
          }}
        />
      )}

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        sx={{ mb: 2, position: 'relative', zIndex: 1 }}
      >
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label={loading ? '⚡ AI is generating your reply...' : '✨ Generated Reply'}
          placeholder={loading ? 'Crafting the perfect response...' : 'Your AI-generated response will appear here'}
          value={generatedReply || ''}
          inputProps={{ readOnly: true }}
          disabled={loading}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: loading ? 'rgba(15, 23, 42, 0.3)' : 'rgba(15, 23, 42, 0.5)',
              '&.Mui-disabled': {
                '& fieldset': {
                  borderColor: 'rgba(148, 163, 184, 0.2)',
                },
                '& .MuiOutlinedInput-input': {
                  WebkitTextFillColor: '#cbd5e1',
                  cursor: 'default',
                },
              },
            },
          }}
        />
      </MotionBox>

      {!loading && generatedReply && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="outlined"
            onClick={handleCopy}
            fullWidth
            sx={{
              py: 1.2,
              fontWeight: 600,
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'rgba(99, 102, 241, 0.5)',
              color: '#818cf8',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#818cf8',
                backgroundColor: 'rgba(99, 102, 241, 0.08)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            {copied ? (
              <>
                <Check size={18} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy to Clipboard
              </>
            )}
          </Button>
        </motion.div>
      )}
    </MotionBox>
  );
}

export default EmailResponse;
