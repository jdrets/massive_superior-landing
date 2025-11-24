import { Button, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Stack
      spacing={2.5}
      py={6}
      sx={{ backgroundColor: "red", height: "700px", color: "white" }}
    >
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

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="white">
          Ver productos
        </Button>
        <Button variant="outlined" color="white">
          Comprar ahora
        </Button>
      </Stack>
    </Stack>
  );
}
