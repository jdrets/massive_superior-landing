import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForward";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(
    products[0]
  );
  const sliderRef = useRef<Slider>(null);
  const chipsContainerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleSelectProduct = (product: IProduct) => {
    setSelectedProduct(product);
    const index = products.findIndex(p => p.name === product.name);
    if (sliderRef.current && index !== -1) {
      sliderRef.current.slickGoTo(index);
    }
  };

  // Sincronizar el slider cuando cambia selectedProduct desde los chips
  useEffect(() => {
    if (selectedProduct) {
      const index = products.findIndex(p => p.name === selectedProduct.name);
      if (sliderRef.current && index !== -1) {
        sliderRef.current.slickGoTo(index);
      }
    }
  }, [selectedProduct]);

  // Hacer scroll al chip cuando se selecciona un producto desde las flechas
  useEffect(() => {
    if (selectedProduct && chipsContainerRef.current) {
      // Pequeño delay para asegurar que el DOM se haya actualizado
      const timeoutId = setTimeout(() => {
        const chipElement = chipRefs.current[selectedProduct.name];
        if (chipElement && chipsContainerRef.current) {
          const container = chipsContainerRef.current;
          const chipRect = chipElement.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          // Verificar si el chip está fuera del viewport
          const isOutOfView =
            chipRect.left < containerRect.left ||
            chipRect.right > containerRect.right;

          if (isOutOfView) {
            // Calcular la posición relativa del chip dentro del contenedor
            const chipLeft = chipElement.offsetLeft - container.offsetLeft;
            const chipWidth = chipElement.offsetWidth;
            const containerWidth = container.offsetWidth;

            // Calcular scroll para centrar el chip en el contenedor
            const scrollLeft =
              chipLeft +
              chipWidth / 2 -
              containerWidth / 2 +
              container.scrollLeft;

            container.scrollTo({
              left: scrollLeft,
              behavior: "smooth",
            });
          }
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [selectedProduct]);

  return (
    <Stack spacing={5} sx={{ py: 5 }}>
      <Container>
        <Stack spacing={1.5}>
          <Stack spacing={0.5}>
            <Typography variant="h2" color="secondary.main">
              Productos
            </Typography>
            <Typography variant="h6" color="primary.main">
              Hecha en México desde 1896.
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Box sx={{ height: "1px", backgroundColor: "secondary.main" }} />
            <Stack>
              <Typography variant="h6">{selectedProduct?.title}</Typography>
              <Typography variant="h6">{selectedProduct?.subtitle}</Typography>
            </Stack>
            <Box sx={{ height: "1px", backgroundColor: "secondary.main" }} />
            <Typography variant="body1">
              {selectedProduct?.description}
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Box
        ref={chipsContainerRef}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          pl: 1.5,
          overflowX: "auto",
        }}
      >
        {products.map(product => (
          <Box
            key={product.name}
            ref={el => {
              chipRefs.current[product.name] = el as HTMLElement;
            }}
          >
            <Chip
              label={product.name}
              color="primary"
              variant={
                selectedProduct?.name === product.name ? "filled" : "outlined"
              }
              onClick={() => handleSelectProduct(product)}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          px: { xs: 2, md: 4 },
          pb: 8,
          "& .slick-slider": {
            position: "relative",
          },
          "& .slick-list": {
            padding: "0px 0 40px 0",
          },
          "& .slick-slide": {
            padding: "0 10px",
          },
          "& .slick-dots": {
            top: "auto",
            bottom: "-50px",
            right: "0",
            left: "auto",
            display: "flex !important",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "8px",
            width: "auto",
            height: "40px",
            "& li": {
              width: "auto",
              height: "auto",
              margin: 0,
              "& button": {
                width: "12px",
                height: "12px",
                padding: 0,
                borderRadius: "50%",
                border: "none",
                backgroundColor: "rgba(187, 46, 40, 0.3)",
                "&:before": {
                  display: "none",
                },
              },
              "&.slick-active button": {
                backgroundColor: "primary.main",
              },
            },
          },
        }}
      >
        <Slider
          ref={sliderRef}
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          beforeChange={(_current: number, next: number) => {
            setSelectedProduct(products[next]);
          }}
        >
          {products.map(product => (
            <Box key={product.name}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "40px 20px",
                  border: "1px solid rgba(204, 204, 204, 1)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "400px",
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "350px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
}

const products = [
  {
    name: "Lata 355ML",
    title: "4.6% Alc. Vol.",
    subtitle: "Color: Dorado",
    description:
      "Originaria de Orizaba Veracruz, Superior® cuenta con más de 125 años de historia y tradición cervecera. Está elaborada con ingredientes de primera calidad y ha sido galardonada con premios internacionales, que reconocen su sabor y frescura.",
    image:
      "https://cavagrapaan.alvisar.com/wp-content/uploads/2024/07/Superior-Lata.png",
  },
  {
    name: "Caguamón 1.2L",
    title: "4.6% Alc. Vol.",
    subtitle: "Color: Dorado",
    description:
      "Originaria de Orizaba Veracruz, Superior® cuenta con más de 125 años de historia y tradición cervecera. Está elaborada con ingredientes de primera calidad y ha sido galardonada con premios internacionales, que reconocen su sabor y frescura.",
    image:
      "https://cavagrapaan.alvisar.com/wp-content/uploads/2024/07/Superior-Lata.png",
  },
  {
    name: "Caguama 940ML",
    title: "4.6% Alc. Vol.",
    subtitle: "Color: Dorado",
    description:
      "Originaria de Orizaba Veracruz, Superior® cuenta con más de 125 años de historia y tradición cervecera. Está elaborada con ingredientes de primera calidad y ha sido galardonada con premios internacionales, que reconocen su sabor y frescura.",
    image:
      "https://cavagrapaan.alvisar.com/wp-content/uploads/2024/07/Superior-Lata.png",
  },
  {
    name: "Media 325ML",
    title: "4.6% Alc. Vol.",
    subtitle: "Color: Dorado",
    description:
      "Originaria de Orizaba Veracruz, Superior® cuenta con más de 125 años de historia y tradición cervecera. Está elaborada con ingredientes de primera calidad y ha sido galardonada con premios internacionales, que reconocen su sabor y frescura.",
    image:
      "https://cavagrapaan.alvisar.com/wp-content/uploads/2024/07/Superior-Lata.png",
  },
] as IProduct[];

interface IProduct {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <Box
    onClick={onClick}
    sx={{
      position: "absolute",
      left: "0",
      bottom: "-50px",
      zIndex: 2,
      cursor: "pointer",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "1px solid",
      borderColor: "secondary.main",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "rgba(209, 176, 104, 0.1)",
      },
    }}
  >
    <ArrowBackIosIcon sx={{ color: "secondary.main", fontSize: "24px" }} />
  </Box>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <Box
    onClick={onClick}
    sx={{
      position: "absolute",
      left: "65px",
      bottom: "-50px",
      zIndex: 2,
      cursor: "pointer",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "1px solid",
      borderColor: "secondary.main",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "rgba(209, 176, 104, 0.1)",
      },
    }}
  >
    <ArrowForwardIosIcon sx={{ color: "secondary.main", fontSize: "24px" }} />
  </Box>
);
