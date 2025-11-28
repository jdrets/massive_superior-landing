import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./assets/logo.webp";

const TexfFieldStyled = styled(TextField)({
  input: {
    fontFamily: "Zilla Slab",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "transparent",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "transparent",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "transparent",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "rgba(255, 255, 255, 0.5)",
    opacity: 1,
  },
});

export default function AgeGate() {
  const hasAgeSetted = localStorage.getItem("hasAgeSetted") === "true";
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [open, setOpen] = useState(!hasAgeSetted);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!day || !month || !year) {
      return;
    }

    // check if user is mayor of 18 years old
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
      setError("Debes ser mayor de 18 años para acceder a este sitio.");
      return;
    }

    localStorage.setItem("hasAgeSetted", "true");

    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  if (!open) {
    return null;
  }

  return (
    <Box
      id="age-gate"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "primary.main",
        color: "white",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          alignSelf: "center",
        }}
      >
        <Stack spacing={4} textAlign="center" alignItems="center">
          <Box
            component="img"
            src={logo}
            alt="Logo"
            height={{ xs: "133px", md: "196px", xl: "287px" }}
            maxWidth="100%"
            width="fit-content"
          />

          <Typography variant="body1" fontWeight={600}>
            Por favor, ingresa tu año de nacimiento, <br /> queremos validar tu
            mayoría de edad.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            {/* Línea superior dorada */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "secondary.main",
                mb: 1,
              }}
            />

            {/* Campos de entrada */}
            <Stack
              direction="row"
              spacing={0}
              sx={{
                borderColor: "secondary.main",
                width: "100%",
              }}
            >
              {/* Día */}
              <Box
                sx={{
                  flex: 1,
                  borderRight: "1px solid",
                  borderColor: "secondary.main",
                }}
              >
                <TexfFieldStyled
                  value={day}
                  onChange={e => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 2);
                    setDay(value);
                  }}
                  placeholder="DD"
                  variant="standard"
                  inputProps={{
                    maxLength: 2,
                    style: {
                      textAlign: "center",
                      fontSize: "40px",
                      color: "white",
                      fontWeight: 600,
                    },
                  }}
                  type="tel"
                  autoComplete="off"
                />
              </Box>

              {/* Mes */}
              <Box
                sx={{
                  flex: 1,
                  borderRight: "1px solid",
                  borderColor: "secondary.main",
                }}
              >
                <TexfFieldStyled
                  value={month}
                  onChange={e => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 2);
                    setMonth(value);
                  }}
                  placeholder="MM"
                  variant="standard"
                  inputProps={{
                    maxLength: 2,
                    style: {
                      textAlign: "center",
                      fontSize: "40px",
                      color: "white",
                      fontWeight: 600,
                    },
                  }}
                  autoComplete="off"
                  type="tel"
                />
              </Box>

              {/* Año */}
              <Box sx={{ flex: 1.2 }}>
                <TexfFieldStyled
                  value={year}
                  onChange={e => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
                    setYear(value);
                  }}
                  placeholder="AAAA"
                  variant="standard"
                  inputProps={{
                    maxLength: 4,
                    style: {
                      textAlign: "center",
                      fontSize: "40px",
                      color: "white",
                      fontWeight: 600,
                    },
                  }}
                  autoComplete="off"
                  type="tel"
                />
              </Box>
            </Stack>

            {/* Línea inferior dorada */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "secondary.main",
                mt: 1,
                mb: 3,
              }}
            />

            {/* Botón de confirmar */}
            <Button
              type="submit"
              variant="outlined"
              color="white"
              fullWidth
              disabled={!day || !month || !year}
            >
              Confirmar
            </Button>

            {error && (
              <Typography
                variant="body1"
                // fontWeight={600}
                color="secondary.main"
                mt={4}
              >
                {error}
              </Typography>
            )}
          </Box>

          <Typography
            variant="caption"
            sx={{
              fontSize: { xs: "11px", sm: "12px" },
              textAlign: "center",
              display: "block",
              lineHeight: 1.6,
              pt: "113px",
            }}
          >
            Al confirmar, aceptas la{" "}
            <MuiLink
              component={Link}
              to="/legales/aviso-de-privacidad"
              sx={{
                color: "white",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              política de privacidad
            </MuiLink>
            ,{" "}
            <MuiLink
              component={Link}
              to="/legales/terminos-y-condiciones"
              sx={{
                color: "white",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              términos y condiciones
            </MuiLink>{" "}
            y{" "}
            <MuiLink
              component={Link}
              to="/legales/politica-de-cookies"
              sx={{
                color: "white",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              uso de cookies
            </MuiLink>{" "}
            de este sitio web. Este sitio web utiliza cookies. Para obtener más
            información, lee nuestra{" "}
            <MuiLink
              component={Link}
              to="/legales/aviso-de-privacidad"
              sx={{
                color: "white",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Política de Privacidad
            </MuiLink>{" "}
            y{" "}
            <MuiLink
              component={Link}
              to="/legales/politica-de-cookies"
              sx={{
                color: "white",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              uso de Cookies
            </MuiLink>
            .
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
