import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const AnimatedBackground = () => {
  // Floating orbs animation
  const orbVariants = {
    animate: (custom) => ({
      y: [0, -30, 0],
      x: [0, 15, 0],
      transition: {
        duration: 4 + custom * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  const pulseVariants = {
    animate: (custom) => ({
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3 + custom * 0.3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {/* Main gradient background */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a0e27 0%, #151b3d 25%, #1a1f3a 50%, #151b3d 75%, #0a0e27 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
        }}
      />

      {/* Animated orbs */}
      <motion.div
        custom={0}
        variants={orbVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)',
          filter: 'blur(40px)',
          zIndex: 1,
        }}
      />

      <motion.div
        custom={1}
        variants={orbVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0) 70%)',
          filter: 'blur(50px)',
          zIndex: 1,
        }}
      />

      <motion.div
        custom={2}
        variants={orbVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '15%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0) 70%)',
          filter: 'blur(45px)',
          zIndex: 1,
        }}
      />

      {/* Pulsing accent orbs */}
      <motion.div
        custom={0}
        variants={pulseVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '20%',
          right: '20%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0) 70%)',
          filter: 'blur(30px)',
          zIndex: 1,
        }}
      />

      <motion.div
        custom={1}
        variants={pulseVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)',
          filter: 'blur(35px)',
          zIndex: 1,
        }}
      />

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.5); }
          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.8); }
        }
      `}</style>
    </Box>
  );
};

export default AnimatedBackground;
