import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#BB2E28",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#D1B068",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#332816",
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
      textTransform: "uppercase",
      [createTheme().breakpoints.up("sm")]: {
        fontSize: "48px",
      },
      [createTheme().breakpoints.up("md")]: {
        fontSize: "56px",
      },
    },
    h2: {
      fontWeight: 700,
      fontFamily: "Zilla Slab",
      fontSize: "32px",
      textTransform: "uppercase",
      [createTheme().breakpoints.up("md")]: {
        fontSize: "48px",
      },
    },
    h3: {
      fontWeight: 700,
      fontFamily: "Zilla Slab",
      textTransform: "uppercase",
    },
    h4: {
      fontWeight: 700,
      fontFamily: "Zilla Slab",
      fontSize: "14px",
      textTransform: "uppercase",
    },
    h5: {
      fontWeight: 700,
      fontFamily: "Zilla Slab",
      textTransform: "uppercase",
    },
    h6: {
      fontWeight: 700,
      fontFamily: "Zilla Slab",
      textTransform: "uppercase",
      fontSize: "16px",
    },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "Zilla Slab",
          fontWeight: 700,
          fontSize: "16px",
          p: "10px",
          height: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "uppercase",
        },
        outlined: {
          backgroundColor: "#BB2E2829",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
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
