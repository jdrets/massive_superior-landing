import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  type SxProps,
} from "@mui/material";
import { theme } from "../../../../theme";
import { ChevronRight } from "@mui/icons-material";
import chapita from "./assets/chapita.webp";
import escudosPremios from "./assets/escudos-premios.webp";
import bgMobile from "./assets/bg-mobile.webp";
import bgDesktop from "./assets/bg-desktop.webp";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileContent /> : <DesktopContent />;
}

const MobileContent = () => {
  return (
    <Box
      id="about-us"
      sx={{
        position: "relative",
        zIndex: 3,
        left: "-20px",
        width: "calc(100% + 35px)",
        filter: `drop-shadow(0 0 24px rgba(0, 0, 0, 0.40));`,
      }}
    >
      <Box sx={{}}>
        <Box sx={{ transform: "rotate(1.5deg)", mt: -4 }}>
          <Box
            sx={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 3.1%, rgba(0, 0, 0, 0) 62.03%), url(${bgMobile})`,
              backgroundSize: { xs: "200%", sm: "120%" },
              backgroundPositionX: "center",
              backgroundPositionY: { xs: "30%", sm: "40%" },
              backgroundBlendMode: "overlay",
              borderRadius: 3,
            }}
          >
            <Container
              sx={{
                position: "relative",
                height: { xs: "887px", sm: "1166px" },
                transform: "rotate(-1.5deg)",
                px: 6,
              }}
            >
              <DividerImage
                sx={{
                  left: { xs: "50%", sm: 0 },
                  transform: { xs: "translateX(-50%)", sm: "none" },
                }}
              />

              <Stack
                spacing={2.5}
                sx={{
                  color: "white",
                  pt: { xs: 12, sm: 17 },
                  width: { xs: "100%", sm: "581px" },
                  m: "0 auto",
                }}
              >
                <Texts
                  sx={{
                    m: "0 auto",
                    alignSelf: "center",
                  }}
                />
                <Buttons />
              </Stack>

              <EscudosPremios
                sx={{
                  bottom: "-80px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "none",
                }}
              />
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const DesktopContent = () => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 3,
        left: "-10px",
        width: "calc(100% + 10px)",
        filter: `drop-shadow(0 0 24px rgba(0, 0, 0, 0.40));`,
      }}
    >
      <Box sx={{}}>
        <Box sx={{ transform: "rotate(1.5deg)", mt: -4 }}>
          <Box
            sx={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.00) 45%, rgba(0, 0, 0, 0.24) 60%), url(${bgDesktop})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 3,
            }}
          >
            <Container
              sx={{ position: "relative", transform: "rotate(-1.5deg)" }}
            >
              <DividerImage />
              <Stack
                spacing={4}
                sx={{
                  height: "900px",
                  color: "white",
                  justifyContent: "center",
                }}
              >
                <Texts
                  sx={{
                    width: "451px",
                    m: "0 auto",
                    alignSelf: "flex-end",
                  }}
                />

                <Buttons
                  sx={{
                    width: "451px",
                    alignSelf: "flex-end",
                  }}
                />
              </Stack>

              <EscudosPremios
                sx={{
                  bottom: "-80px",
                  right: 32,
                  left: "auto",
                  img: {
                    height: "140px",
                  },
                }}
              />
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Texts = ({ sx }: { sx?: SxProps }) => {
  return (
    <Stack spacing={2.5} sx={sx}>
      <Stack spacing={1.5}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            backgroundColor: "primary.main",
            color: "secondary.main",
            width: "fit-content",
            padding: "4px 8px",
            alignSelf: "center",
          }}
        >
          Sobre nosotros
        </Typography>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Hecha en México desde 1896
        </Typography>
      </Stack>

      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Desde 1896, Superior ha sido un símbolo de la cultura cervecera
        mexicana, destacando por su sabor y calidad inigualable. Esta cerveza
        premium mantiene su esencia 100% mexicana, ofreciendo a los consumidores
        una experiencia auténtica.
      </Typography>
    </Stack>
  );
};

const Buttons = ({ sx }: { sx?: SxProps }) => {
  const navigate = useNavigate();

  const handleGoTo = (href: string) => {
    const anchor = href.startsWith("#") ? href.slice(1) : href;
    const hash = href.startsWith("#") ? href : `#${href}`;
    const smoothScroll = (attemptsLeft = 10) => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (attemptsLeft > 0) {
        requestAnimationFrame(() => smoothScroll(attemptsLeft - 1));
      }
    };

    navigate({ pathname: "/", hash });
    requestAnimationFrame(() => smoothScroll());
  };
  
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={sx}>
      <Button
        variant="contained"
        color="white"
        onClick={() => handleGoTo("#donde-comprar")}
      >
        Comprar ahora
      </Button>
      <Button
        variant="text"
        color="white"
        endIcon={<ChevronRight />}
        onClick={() => handleGoTo("#productos")}
      >
        Ver productos
      </Button>
    </Stack>
  );
};

const DividerImage = ({ sx }: { sx?: SxProps }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-96px",
        left: 0,
        ...sx,
      }}
    >
      <Box
        component="img"
        src={chapita}
        alt="Chapita"
        height={192}
        width={192}
      />
    </Box>
  );
};

const EscudosPremios = ({ sx }: { sx?: SxProps }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        ...sx,
      }}
    >
      <Box
        component="img"
        src={escudosPremios}
        alt="Escudos Premios"
        height={117}
      />
    </Box>
  );
};
