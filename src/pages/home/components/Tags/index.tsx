import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import divider from "../divider.png";

const storeLocations = [
  { year: "1910", name: "Moctezuma", image: "" },
  { year: "1940", name: "Superior", image: "" },
  { year: "1970", name: "Superior", image: "" },
  { year: "1975", name: "Superior", image: "" },
  { year: "1985", name: "Superior", image: "" },
  { year: "1994", name: "Superior", image: "" },
  { year: "2006", name: "Superior", image: "" },
  { year: "2015", name: "Superior", image: "" },
  { year: "2021", name: "Superior - Edición Especial", image: "" },
  { year: "2021", name: "Superior - Nueva Imagen", image: "" },
];

export default function TagsSection() {
  return (
    <Box sx={{ backgroundColor: "#FFE4BC" }}>
      <Container sx={{ position: "relative" }}>
        <Stack
          spacing={5}
          sx={{
            py: 8,
          }}
        >
          <Stack spacing={2.5}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                textTransform: "uppercase",
                color: "white",
                textShadow: `
                  -1px -1px 0 #332816,
                  1px -1px 0 #332816,
                  -1px 1px 0 #332816,
                  1px 1px 0 #332816
                `,
              }}
            >
              Etiquetas
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Tradición y sabor Superior a través del tiempo.
            </Typography>
          </Stack>

          <Grid container spacing={3} sx={{ mt: 4, justifyContent: "center" }}>
            {storeLocations.map((label, index) => (
              <Grid key={index} size={{ xs: 6, sm: 3, md: 4, xl: 2 }}>
                <Stack spacing={1}>
                  <Box
                    component="img"
                    src={label.image}
                    alt={label.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    {label.year}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
      <Box
        sx={{
          backgroundImage: `url(${divider})`,
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "repeat-x",
          height: "32px",
          rotate: "180deg",
        }}
      />
    </Box>
  );
}
