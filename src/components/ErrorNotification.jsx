import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';

const MotionBox = motion(Box);

function ErrorNotification({ message, onClose }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      sx={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        borderRadius: '8px',
        padding: '16px',
        mb: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <AlertCircle size={20} style={{ color: '#ef4444', flexShrink: 0 }} />
        <span style={{ color: '#fca5a5', fontSize: '0.95rem' }}>
          {message}
        </span>
      </Box>
      <Button
        onClick={onClose}
        sx={{
          minWidth: 'auto',
          p: 0.5,
          color: '#fca5a5',
          '&:hover': {
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
          },
        }}
      >
        <X size={18} />
      </Button>
    </MotionBox>
  );
}

export default ErrorNotification;
