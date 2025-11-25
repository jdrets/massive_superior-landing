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

export default function AboutUs() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileContent /> : <DesktopContent />;
}

const MobileContent = () => {
  return (
    <Box sx={{ backgroundColor: "brown" }}>
      <Container sx={{ position: "relative" }}>
        <DividerImage
          sx={{
            left: { xs: "50%", sm: 0 },
            transform: { xs: "translateX(-50%)", sm: "none" },
          }}
        />
        <Stack
          spacing={2.5}
          sx={{
            height: { xs: "812px", sm: "1024px" },
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
      </Container>
    </Box>
  );
};

const DesktopContent = () => {
  return (
    <Box sx={{ backgroundColor: "brown" }}>
      <Container sx={{ position: "relative" }}>
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
      </Container>
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
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={sx}>
      <Button variant="contained" color="white">
        Comprar ahora
      </Button>
      <Button variant="text" color="white" endIcon={<ChevronRight />}>
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
        top: "-50px",
        left: 0,
        ...sx,
      }}
    >
      <Box sx={{ backgroundColor: "blue", width: "100px", height: "100px" }} />
    </Box>
  );
};
