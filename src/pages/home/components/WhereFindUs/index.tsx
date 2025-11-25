import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import divider from "./divider.png";

const storeLocations = [
  { name: "Uber Eats", id: "uber-eats" },
  { name: "Walmart", id: "walmart" },
  { name: "Rappi", id: "rappi" },
  { name: "Bodega Aurrera", id: "bodega-aurrera" },
  { name: "Tienda Física", id: "tienda-fisica" },
];

export default function WhereFindUs() {
  return (
    <Box sx={{ backgroundColor: "primary.main" }}>
      <Box
        sx={{
          backgroundImage: `url(${divider})`,
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "repeat-x",
          height: "32px",
        }}
      />
      <Container sx={{ position: "relative" }}>
        <Stack
          spacing={5}
          sx={{
            color: "white",
            py: 5,
            pb: { xs: 8, sm: 15 },
          }}
        >
          <Stack spacing={2.5}>
            <Stack spacing={1.5}>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  backgroundColor: "secondary.main",
                  color: "primary.main",
                  width: "fit-content",
                  padding: "4px 8px",
                  alignSelf: "center",
                }}
              >
                Dónde comprar
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Descubre dónde encontrarnos
              </Typography>
            </Stack>

            <Typography
              variant="body1"
              sx={{ textAlign: "center", px: { xs: 8, md: 0 } }}
            >
              ¡Siempre ten Superior a la mano! Es ideal para cualquier momento.
            </Typography>
          </Stack>

          <Grid container spacing={3} sx={{ mt: 4, justifyContent: "center" }}>
            {storeLocations.map((store, index) => (
              <Grid key={index}>
                <Box
                  sx={{
                    width: { xs: 158, sm: 131 },
                    height: { xs: 158, sm: 131 },
                    backgroundColor: "white",
                    borderRadius: 2,
                    boxShadow: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                  }}
                >
                  {/* Placeholder para la imagen */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textAlign: "center",
                      fontSize: "12px",
                    }}
                  >
                    {store.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
