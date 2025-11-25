import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { menuItems } from "./Header";
import { Facebook, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        borderTop: "2px solid",
        borderColor: "secondary.main",
      }}
    >
      <Container sx={{ py: 6 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent={{ xs: "center", md: "space-between" }}
        >
          <Typography variant="h2">LOGO</Typography>

          <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
            {menuItems.map(item => (
              <Button variant="text" color="inherit" key={item.href}>
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </Stack>
        </Stack>

        <Stack direction="column" sx={{ mt: { xs: 4, md: 10 } }} spacing={4}>
          <Box
            sx={{ width: "100%", height: "1px", backgroundColor: "white" }}
          />

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, md: 3 }}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h6"
              color="primary"
              sx={{
                backgroundColor: "white",
                fontSize: "14px",
                order: { xs: 3, sm: 3, md: 0 },
                position: "relative",
                top: { xs: 16, md: 0 },
              }}
            >
              EVITE EL EXCESO
            </Typography>
            <Link
              to="/legales/aviso-de-privacidad"
              color="inherit"
              style={{ color: "white" }}
              onClick={() => window.scrollTo({ top: 0 })}
            >
              Política de Privacidad
            </Link>
            <Link
              to="/legales/terminos-y-condiciones"
              color="inherit"
              style={{ color: "white" }}
              onClick={() => window.scrollTo({ top: 0 })}
            >
              Términos y Condiciones
            </Link>
            <Link
              to="/legales/politica-de-cookies"
              color="inherit"
              style={{ color: "white" }}
              onClick={() => window.scrollTo({ top: 0 })}
            >
              Política de Cookies
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
