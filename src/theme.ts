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
    fontFamily: "'Arimo', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      fontFamily: "Zilla Slab",
      fontSize: "36px",
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "56px",
      },
    },
    h2: { fontWeight: 700, fontFamily: "Zilla Slab" },
    h3: { fontWeight: 700, fontFamily: "Zilla Slab" },
    h4: { fontWeight: 700, fontFamily: "Zilla Slab" },
    h5: { fontWeight: 700, fontFamily: "Zilla Slab" },
    h6: { fontWeight: 700, fontFamily: "Zilla Slab" },
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
      variants: [
        {
          props: { variant: "contained", color: "white" },
          style: ({ theme }) => ({
            backgroundColor: "#ffffff",
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }),
        },
        {
          props: { variant: "outlined", color: "white" },
          style: ({ theme }) => ({
            borderColor: "#ffffff",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }),
        },
      ],
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
