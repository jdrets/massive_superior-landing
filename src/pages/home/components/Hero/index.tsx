import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../../theme";

export default function Hero() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileContent /> : <DesktopContent />;
}

const MobileContent = () => {
  return (
    <Stack
      spacing={2.5}
      sx={{
        backgroundColor: "red",
        height: { xs: "812px", sm: "1024px" },
        color: "white",
        pt: { xs: 6, sm: 26 },
      }}
    >
      <Texts />
      <Buttons />
    </Stack>
  );
};

const DesktopContent = () => {
  return (
    <Stack
      spacing={{ xs: 3, md: 4 }}
      py={40}
      sx={{ backgroundColor: "red", height: "812px", color: "white" }}
    >
      <Texts />
      <Buttons />
    </Stack>
  );
};

const Texts = () => {
  return (
    <Stack spacing={2.5}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center", textTransform: "uppercase" }}
      >
        Una tradición superior 100% hecha en méxico
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Una cerveza hecha con propósito. Porque cuando algo está bien hecho,
        trasciende el tiempo.
      </Typography>
    </Stack>
  );
};

const Buttons = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button variant="contained" color="white">
        Conocer más
      </Button>
      <Button variant="outlined" color="white">
        Ver productos
      </Button>
    </Stack>
  );
};
