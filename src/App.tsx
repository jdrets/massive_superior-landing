import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const navButtonStyles = {
  "&.active": {
    fontWeight: 700,
  },
};

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Massive Superior
          </Typography>
          <Button
            component={NavLink}
            to="/"
            color="primary"
            variant="text"
            sx={navButtonStyles}
          >
            Inicio
          </Button>
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ py: { xs: 4, md: 8 } }}>
        <Outlet />
      </Container>
    </Box>
  );
}
