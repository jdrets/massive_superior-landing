import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const mobileMenuDisclosure = useDisclosure();

  const navigate = useNavigate();
  const handleGoTo = (href: string) => {
    navigate(href);
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: "white",
        borderBottom: 1,
        borderColor: mobileMenuDisclosure.open
          ? "secondary.main"
          : "transparent",
        position: "relative",
      }}
    >
      <Container sx={{ position: "relative" }}>
        {/*{" MOBILE "}*/}
        <Stack
          direction="row"
          spacing={2}
          height={64}
          alignItems="center"
          justifyContent="space-between"
          sx={{ gap: 2, display: { xs: "flex", md: "none" } }}
        >
          <Logo />

          <IconButton color="primary" onClick={mobileMenuDisclosure.onToggle}>
            {mobileMenuDisclosure.open ? <Close /> : <Menu />}
          </IconButton>
        </Stack>

        {/*{" DESKTOP "}*/}
        <Stack
          direction="row"
          spacing={2}
          height={64}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            {menuItems.map(item => (
              <Button
                variant="text"
                key={item.href}
                color="secondary"
                onClick={() => handleGoTo(item.href)}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
            <Logo />
          </Box>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleGoTo("/donde-comprar")}
          >
            Comprar ahora
          </Button>
        </Stack>
      </Container>

      <Collapse in={mobileMenuDisclosure.open} unmountOnExit>
        <Stack sx={{ px: 1, pb: 2 }} spacing={0.5}>
          {menuItems.map(item => (
            <Button
              variant="text"
              key={item.href}
              color="secondary"
              fullWidth
              sx={{ justifyContent: "flex-start" }}
              onClick={() => handleGoTo(item.href)}
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => handleGoTo("/donde-comprar")}
          >
            Comprar ahora
          </Button>
        </Stack>
      </Collapse>
    </AppBar>
  );
}

const Logo = () => {
  return (
    <Typography variant="h6" sx={{ fontWeight: 700 }}>
      Logo
    </Typography>
  );
};

export const menuItems = [
  {
    label: "Nuestra historia",
    href: "/nuestra-historia",
  },
  {
    label: "Productos",
    href: "/productos",
  },
  {
    label: "Dónde comprar",
    href: "/donde-comprar",
  },
];
