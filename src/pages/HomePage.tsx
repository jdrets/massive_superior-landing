import { Button, Paper, Stack, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Typography variant="overline" color="text.secondary">
          Bienvenido
        </Typography>
        <Typography variant="h3" fontWeight={600}>
          Comencemos con tu nueva landing
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth={640}>
          Este es el punto de partida de tu aplicación. Estructura tus secciones,
          conecta tus endpoints y extiende el tema para que coincida con tu marca.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button variant="contained" size="large">
            Crear sección
          </Button>
          <Button variant="outlined" size="large">
            Documentación
          </Button>
        </Stack>
      </Stack>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          border: theme => `1px solid ${theme.palette.divider}`,
          backgroundImage: theme =>
            `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
          color: 'primary.contrastText',
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          Consejo rápido
        </Typography>
        <Typography variant="body1" sx={{ mt: 1.5, maxWidth: 520 }}>
          Puedes usar React Router para definir secciones públicas y privadas, y el
          tema de MUI para compartir tokens visuales entre componentes.
        </Typography>
      </Paper>
    </Stack>
  )
}

