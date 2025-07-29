import { createTheme } from '@mui/material/styles';

const asurionTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0a0a0a', // Asurion often uses dark/black branding
    },
    secondary: {
      main: '#8223d2', // Blue tone (from logo/branding)
    },
    background: {
      default: '#f8f8f8',
    },
    text: {
      primary: '#0a0a0a',
      secondary: '#555555',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          color: '#ffffff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
  },
});

export default asurionTheme;
