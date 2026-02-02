import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0e27',
      paper: '#151b3d',
    },
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#8b5cf6',
      light: '#a78bfa',
      dark: '#7c3aed',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
      disabled: '#64748b',
    },
    divider: '#334155',
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Segoe UI", "Helvetica Neue", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.25px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.95rem',
          borderRadius: '8px',
          padding: '10px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 24px rgba(99, 102, 241, 0.2)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          boxShadow: '0 8px 16px rgba(99, 102, 241, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
          },
          '&:disabled': {
            background: 'rgba(99, 102, 241, 0.3)',
            color: 'rgba(255, 255, 255, 0.5)',
          },
        },
        outlined: {
          borderColor: 'rgba(99, 102, 241, 0.5)',
          color: '#818cf8',
          '&:hover': {
            borderColor: '#818cf8',
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(15, 23, 42, 0.5)',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            '&:hover': {
              borderColor: 'rgba(148, 163, 184, 0.4)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              borderColor: '#6366f1',
              boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)',
            },
            '& input': {
              fontSize: '0.95rem',
              '&::placeholder': {
                color: '#94a3b8',
                opacity: 0.8,
              },
            },
          },
          '& .MuiOutlinedInput-input': {
            padding: '12px 14px',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(15, 23, 42, 0.5)',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            '&:hover': {
              borderColor: 'rgba(148, 163, 184, 0.4)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              borderColor: '#6366f1',
              boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#cbd5e1',
          fontSize: '0.95rem',
          '&.Mui-focused': {
            color: '#818cf8',
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#6366f1',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '2rem',
          paddingBottom: '2rem',
        },
      },
    },
  },
});

export default darkTheme;
