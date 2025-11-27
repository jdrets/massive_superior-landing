import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import divider from "../divider.png";

// tags images
import tag1910 from "./assets/tags/etiqueta_1910_grande.webp";
import tag1940 from "./assets/tags/etiqueta_1940_grande.webp";
import tag1970 from "./assets/tags/etiqueta_1970_grande.webp";
import tag1975 from "./assets/tags/etiqueta_1975_grande.webp";
import tag1985 from "./assets/tags/etiqueta_1985_grande.webp";
import tag1994 from "./assets/tags/etiqueta_1994_grande.webp";
import tag2006 from "./assets/tags/etiqueta_2006_grande.webp";
import tag2015 from "./assets/tags/etiqueta_2015_grande.webp";
import tag2021 from "./assets/tags/etiqueta_2021-newimage_grande.webp";
import tag2021Especial from "./assets/tags/etiqueta_2021-specialedition_grande.webp";

// bgs
import bgDesktop from "./assets/textura-bg_desktop.webp";
import bgMobile from "./assets/textura-bg_mobile.webp";
import bgTablet from "./assets/textura-bg_tablet.webp";

// adornment
import addormentTitle from "./assets/ornamento-brillo.webp";

const storeLocations = [
  {
    year: "1910",
    name: "Moctezuma",
    image: tag1910,
  },
  {
    year: "1940",
    name: "Superior",
    image: tag1940,
  },
  {
    year: "1970",
    name: "Superior",
    image: tag1970,
  },
  {
    year: "1975",
    name: "Superior",
    image: tag1975,
  },
  {
    year: "1985",
    name: "Superior",
    image: tag1985,
  },
  {
    year: "1994",
    name: "Superior",
    image: tag1994,
  },
  {
    year: "2006",
    name: "Superior",
    image: tag2006,
  },
  {
    year: "2015",
    name: "Superior",
    image: tag2015,
  },
  {
    year: "2021",
    name: "Superior - Edición Especial",
    image: tag2021,
  },
  {
    year: "2021",
    name: "Superior - Nueva Imagen",
    image: tag2021Especial,
  },
];

export default function TagsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenLightbox = (image: string) => {
    if (image) {
      setSelectedImage(image);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <Box
      sx={{
        backgroundImage: {
          xs: `url(${bgMobile})`,
          sm: `url(${bgTablet})`,
          md: `url(${bgDesktop})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container sx={{ position: "relative" }}>
        <Stack
          spacing={5}
          sx={{
            py: 8,
          }}
        >
          <Stack spacing={2.5}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Box
                component="img"
                src={addormentTitle}
                alt="Adornment Title"
                height={{ xs: 25, sm: 32, md: 32 }}
              />
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
              <Box
                component="img"
                src={addormentTitle}
                alt="Adornment Title"
                height={{ xs: 25, sm: 32, md: 32 }}
              />
            </Stack>

            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Tradición y sabor Superior a través del tiempo.
            </Typography>
          </Stack>

          <Grid container spacing={3} sx={{ mt: 4, justifyContent: "center" }}>
            {storeLocations.map((label, index) => (
              <Grid key={index} size={{ xs: 6, sm: 3, md: 4, lg: 3, xl: 2 }}>
                <Stack
                  spacing={1}
                  sx={{ width: { xs: "auto", md: "202px", xl: "auto" } }}
                >
                  <Box
                    component="img"
                    src={label.image}
                    alt={label.name}
                    onClick={() => handleOpenLightbox(label.image)}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      cursor: "pointer",
                      transition:
                        "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
                      filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.05)",
                        filter: "drop-shadow(0 12px 18px rgba(0, 0, 0, 0.3))",
                      },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "primary.main",
                      textAlign: "center",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    {label.year}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* Lightbox Modal */}
          <Modal
            open={!!selectedImage}
            onClose={handleCloseLightbox}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(4px)",
            }}
          >
            <Box
              sx={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                outline: "none",
              }}
            >
              <IconButton
                onClick={handleCloseLightbox}
                sx={{
                  position: "absolute",
                  top: -40,
                  right: 0,
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  },
                }}
              >
                <Close />
              </IconButton>
              <Box
                component="img"
                src={selectedImage || ""}
                alt="Etiqueta ampliada"
                sx={{
                  maxWidth: "100%",
                  maxHeight: "90vh",
                  objectFit: "contain",
                  borderRadius: 2,
                  boxShadow: 24,
                  backgroundColor: "white",
                  mt: 2,
                }}
              />
            </Box>
          </Modal>
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
