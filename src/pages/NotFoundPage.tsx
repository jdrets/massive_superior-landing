import { Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      textAlign="center"
      sx={{ flex: 1, py: 20 }}
    >
      <Typography variant="h2" fontWeight={600}>
        404
      </Typography>
      <Typography variant="h5">No encontramos lo que buscas</Typography>
      <Typography variant="body1" color="text.secondary" maxWidth={420}>
        Es posible que la ruta haya cambiado o no exista todavía. Vuelve al
        inicio e intenta de nuevo.
      </Typography>
      <Button component={RouterLink} to="/" variant="contained">
        Ir al inicio
      </Button>
    </Stack>
  );
}
