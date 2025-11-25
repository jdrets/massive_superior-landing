import { Container, Stack, Typography, Box, Button } from "@mui/material";
import LegalTexts, { type LegalTextsProps } from "./LegalTexts";
import { Link } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";

export default function LegalLayout({
  data,
  title,
}: LegalTextsProps & { title: string }) {
  return (
    <Container sx={{ py: 4 }}>
      <Stack spacing={5}>
        <Typography variant="h2" textAlign="center" color="secondary.main">
          {title}
        </Typography>
        <Box
          sx={{
            backgroundColor: "secondary.main",
            height: "1px",
          }}
        />
      </Stack>
      <Stack spacing={6} direction="row">
        <Stack sx={{ flexShrink: 0, pt: 5 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "20px" }}
            color="primary.main"
          >
            Ver también
          </Typography>
          <Stack textAlign="left" sx={{ pt: 1 }}>
            {links
              .filter(link => link.href !== window.location.pathname)
              .map(link => (
                <Button
                  component={Link}
                  to={link.href}
                  sx={{
                    color: "#969696",
                    justifyContent: "space-between",
                    padding: 0,
                  }}
                  endIcon={<ChevronRight />}
                  fullWidth
                >
                  {link.title}
                </Button>
              ))}
          </Stack>
        </Stack>
        <Box sx={{ width: "1px", backgroundColor: "secondary.main" }} />
        <LegalTexts data={data} />
      </Stack>
    </Container>
  );
}

const links = [
  {
    title: "Aviso de privacidad",
    href: "/legales/aviso-de-privacidad",
  },
  {
    title: "Política de cookies",
    href: "/legales/politica-de-cookies",
  },
  {
    title: "Términos y condiciones",
    href: "/legales/terminos-y-condiciones",
  },
];
