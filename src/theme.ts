import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#BB2E28",
    },
    secondary: {
      main: "#D1B068",
    },
    background: {
      default: "#ffffff",
      paper: "#f4f6fb",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 1,
      },
      styleOverrides: {
        root: {
          // borderRadius: 16,
        },
      },
    },
  },
});
