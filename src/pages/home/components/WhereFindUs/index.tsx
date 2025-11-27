import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import divider from "../divider.png";

// logos
import logoUberEats from "./assets/logos/logo-ubereats.webp";
import logoWalmart from "./assets/logos/logo-walmart.webp";
import logoRappi from "./assets/logos/logo-rappi.webp";
import logoBodegaAurrera from "./assets/logos/logo-bodega-aurrera.webp";
import logoTiendaFisica from "./assets/logos/logo-chedraui.webp";

// bg
import bgDesktop from "./assets/textura-roja-bg.webp";
import bgMobile from "./assets/textura-roja-bg_mobile.webp";

const storeLocations = [
  {
    name: "Uber Eats",
    id: "uber-eats",
    image: logoUberEats,
    link: "https://www.google.com/aclk?sa=l&ai=DChsSEwjyw8bBh6uOAxUUMEQIHaaxDlkYACICCAEQBhoCZHo&co=1&gclid=CjwKCAjw4K3DBhBqEiwAYtG_9IGk3k8Co-DL7oBZUbr-k-KO3Ydx20YL5Vfa7B8P9NuoHpezyCtfHBoCHzUQAvD_BwE&category=acrcp_v1_48&sig=AOD64_1IO3fgbN7RzySnn9Kh-slivZxF-w&ctype=5&q=&ved=2ahUKEwin4MLBh6uOAxXQkO4BHYAYDggQ9aACKAB6BAgFEA4&adurl=",
  },
  {
    name: "Walmart",
    id: "walmart",
    image: logoWalmart,
    link: "https://super.walmart.com.mx/ip/cerveza-oscura-superior-6-latas-355-ml-c-u/00750104992874?srsltid=AfmBOopkts-hJs4qpyBZ5sp23plH8OnAMr6gUP67eOhTxlnGKTGvXBDT",
  },
  {
    name: "Rappi",
    id: "rappi",
    image: logoRappi,
    link: "https://www.rappi.com.mx/p/superior-cerveza-lata-1386003",
  },
  {
    name: "Bodega Aurrera",
    id: "bodega-aurrera",
    image: logoBodegaAurrera,
    link: "https://despensa.bodegaaurrera.com.mx/ip/cerveza-oscura-superior-6-latas-355-ml-c-u/00750104992874?utm_source=google&utm_medium=cpc&utm_advertiser=baod_pmax&utm_campaign=baod_mf_sem_ecomm_pmax-perf_vinos-licores&utm_term=_&gad_source=1&gad_campaignid=20554035097&gbraid=0AAAAACLd72vU9WwlZ9IvRjv59lB_53fMZ&gclid=CjwKCAjw4K3DBhBqEiwAYtG_9CkF_ZQ_ViIDXBU2riMkia2ZQMfn9wFRr_hfnZIad8sD5NYbOhuD8hoCw1QQAvD_BwE",
  },
  {
    name: "Tienda Física",
    id: "tienda-fisica",
    image: logoTiendaFisica,
    link: "https://www.chedraui.com.mx/cerveza-clara-superior-6-latas-de-355ml-cu-3062881/p?srsltid=AfmBOorMotSS4C3_r7et1nPA9zIs5zTq_pPEhSaNPQMz2HGdaWdVX84t",
  },
];

export default function WhereFindUs() {
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: `url(${bgMobile})`,
          md: `url(${bgDesktop})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "primary.main",
      }}
    >
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
            py: { xs: 5, md: 10 },
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
                    width: { xs: 158, sm: 131, md: 188 },
                    height: { xs: 158, sm: 131, lg: 188 },
                    backgroundColor: "white",
                    borderRadius: 2,
                    boxShadow: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 12,
                    },
                  }}
                  onClick={() => window.open(store.link, "_blank")}
                >
                  <Box
                    component="img"
                    src={store.image}
                    alt={store.name}
                    sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
