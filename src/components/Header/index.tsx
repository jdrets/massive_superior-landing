import {
  AppBar,
  Box,
  Button,
  Collapse,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useDisclosure } from "@chakra-ui/react";

export default function Header() {
  const mobileMenuDisclosure = useDisclosure();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: "white" }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Logo
        </Typography>

        {/*{" MOBILE "}*/}
        <Box>
          <IconButton color="primary" onClick={mobileMenuDisclosure.onToggle}>
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>

      <Collapse in={mobileMenuDisclosure.open} unmountOnExit>
        <Stack sx={{ px: 1 }} spacing={0.5}>
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
