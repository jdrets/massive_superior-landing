import { Container, Stack, Typography, Box, Button } from "@mui/material";
import LegalTexts, { type LegalTextsProps } from "./LegalTexts";
import { Link } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import addornment from "../../../assets/ornamento.webp";

export default function LegalLayout({
  data,
  title,
}: LegalTextsProps & { title: string }) {
  return (
    <Container sx={{ py: 4 }}>
      <Stack spacing={5}>
        <Stack spacing={1}>
          <Box
            component="img"
            src={addornment}
            alt="Adornment"
            height={70}
            sx={{ alignSelf: "center", pt: 3 }}
          />
          <Typography variant="h2" textAlign="center" color="secondary.main">
            {title}
          </Typography>
        </Stack>
        <Box
          sx={{
            backgroundColor: "secondary.main",
            height: "1px",
          }}
        />
      </Stack>
      <Stack spacing={6} direction={{ xs: "column", md: "row" }}>
        <Stack sx={{ flexShrink: 0, pt: 5 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "20px" }}
            color="primary.main"
          >
            Ver también
          </Typography>
          <Stack textAlign="left" sx={{ pt: { xs: 0, md: 1 } }}>
            {links
              .filter(link => link.href !== window.location.pathname)
              .map(link => (
                <Button
                  component={Link}
                  to={link.href}
                  sx={{
                    color: "#969696",
                    justifyContent: { xs: "flex-start", md: "space-between" },
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
        <Box
          sx={{
            width: { xs: "100%", md: "1px" },
            height: { xs: "1px", md: "auto" },
            backgroundColor: "secondary.main",
          }}
        />
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
