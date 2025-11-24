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

export default function Header() {
  const mobileMenuDisclosure = useDisclosure();

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
      <Container maxWidth="xl" sx={{ position: "relative" }}>
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
                component={Link}
                variant="text"
                key={item.href}
                color="secondary"
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

          <Button component={Link} variant="outlined" color="primary">
            Comprar ahora
          </Button>
        </Stack>
      </Container>

      <Collapse in={mobileMenuDisclosure.open} unmountOnExit>
        <Stack sx={{ px: 1, pb: 2 }} spacing={0.5}>
          {menuItems.map(item => (
            <Button
              component={Link}
              variant="text"
              key={item.href}
              color="secondary"
              fullWidth
              sx={{ justifyContent: "flex-start" }}
            >
              {item.label}
            </Button>
          ))}
          <Button component={Link} variant="outlined" color="primary" fullWidth>
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

const menuItems = [
  {
    label: "Nuestra historia",
    href: "/our-story",
  },
  {
    label: "Productos",
    href: "/our-products",
  },
  {
    label: "Donde comprar",
    href: "/our-services",
  },
];
