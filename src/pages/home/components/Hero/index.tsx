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
import bgMobile from "./assets/bg-mobile.jpg";
import bgDesktop from "./assets/bg-desktop.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileContent /> : <DesktopContent />;
}

const MobileContent = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgMobile})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Stack
          spacing={2.5}
          sx={{
            height: { xs: "812px", sm: "1024px" },
            color: "white",
            pt: { xs: 6, sm: 26 },
          }}
        >
          <Texts
            sx={{
              width: { xs: "100%", sm: "734px" },
              m: "0 auto",
              alignSelf: "center",
            }}
          />
          <Buttons />
        </Stack>
      </Container>
    </Box>
  );
};

const DesktopContent = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgDesktop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Stack
          spacing={{ xs: 3, md: 4 }}
          sx={{
            height: "812px",
            color: "white",
            justifyContent: "center",
          }}
        >
          <Texts sx={{ width: { xs: "100%", sm: "544px" }, m: "0 auto" }} />

          <Buttons sx={{ justifyContent: "left" }} />
        </Stack>
      </Container>
    </Box>
  );
};

const Texts = ({ sx }: { sx?: SxProps }) => {
  return (
    <Stack spacing={2.5} sx={sx}>
      <Typography
        variant="h1"
        sx={{
          textAlign: { md: "left", sm: "center", xs: "center" },
          textTransform: "uppercase",
        }}
      >
        Una tradición superior 100% hecha en méxico
      </Typography>

      <Typography
        variant="body1"
        sx={{ textAlign: { md: "left", sm: "center", xs: "center" } }}
      >
        Una cerveza hecha con propósito. Porque cuando algo está bien hecho,
        trasciende el tiempo.
      </Typography>
    </Stack>
  );
};

const Buttons = ({ sx }: { sx?: SxProps }) => {
  const navigate = useNavigate();
  const handleGoTo = (href: string) => {
    const anchor = href.startsWith("#") ? href.slice(1) : href;
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
    const hash = href.startsWith("#") ? href : `#${href}`;
    navigate({ pathname: "/", hash });
    requestAnimationFrame(() => smoothScroll());
  };
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={sx}>
      <Button
        variant="contained"
        color="white"
        onClick={() => handleGoTo("#nuestra-historia")}
      >
        Conocer más
      </Button>
      <Button
        variant="outlined"
        color="white"
        onClick={() => handleGoTo("#productos")}
      >
        Ver productos
      </Button>
    </Stack>
  );
};
