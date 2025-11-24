import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0057d9',
      light: '#4f8ef3',
      dark: '#003c99',
    },
    secondary: {
      main: '#ff5c8d',
      light: '#ff8fb1',
      dark: '#c62863',
    },
    background: {
      default: '#f4f6fb',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 1,
      },
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
})

