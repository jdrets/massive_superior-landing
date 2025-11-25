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

const storeLocations = [
  {
    year: "1910",
    name: "Moctezuma",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/superior-3-logo-png-transparent.png",
  },
  {
    year: "1940",
    name: "Superior",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/superior-3-logo-png-transparent.png",
  },
  {
    year: "1970",
    name: "Superior",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/superior-3-logo-png-transparent.png",
  },
  {
    year: "1975",
    name: "Superior",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/superior-3-logo-png-transparent.png",
  },
  {
    year: "1985",
    name: "Superior",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/superior-3-logo-png-transparent.png",
  },
  {
    year: "1994",
    name: "Superior",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/superior-3-logo-png-transparent.png",
  },
  {
    year: "2006",
    name: "Superior",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/superior-3-logo-png-transparent.png",
  },
  {
    year: "2015",
    name: "Superior",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/superior-3-logo-png-transparent.png",
  },
  {
    year: "2021",
    name: "Superior - Edición Especial",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/superior-3-logo-png-transparent.png",
  },
  {
    year: "2021",
    name: "Superior - Nueva Imagen",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/superior-3-logo-png-transparent.png",
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
                    onClick={() => handleOpenLightbox(label.image)}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.05)",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                      },
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
