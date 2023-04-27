import { createTheme } from '@mui/material/styles';
import { fonts } from './fonts';


export const lightTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffff',
      dark: "#141414",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: '#0883B5',
      dark: "#0F3A5A"
    },
    info: {
      main: '#424242',
      dark: "#000000",
      contrastText: "#6B7280"
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },
  
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'info.main',
          fontFamily: fonts.primary,
          fontSize: "1.6rem",
        },
        h1: {
          fontSize: 30,
          fontWeight: 600
        },
        h2: {
          fontSize: 40,
          fontWeight: 400
        },
        h3: {
          fontSize: 40,
          fontWeight: 600,
          color: "secondary.main"
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        },

      }
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: fonts.secondary,
          fontWeight: 600,
          fontSize: "1.4rem",
          boxShadow: 'none',
          color: "#0F3A5A",
          backgroundColor: "primary.main",
          borderRadius: '1rem',
          padding: "0.8rem 1.5rem",
          margin: "1.25rem 0",
         
        }
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    },

  }
});