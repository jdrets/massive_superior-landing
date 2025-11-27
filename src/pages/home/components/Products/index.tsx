import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForward";
import addornment from "../../../../assets/ornamento.webp";

export default function Products() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
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

  // Forzar actualización del slider cuando cambia el breakpoint
  useEffect(() => {
    if (sliderRef.current && selectedProduct) {
      const index = products.findIndex(p => p.name === selectedProduct.name);
      if (index !== -1) {
        // Pequeño delay para asegurar que el slider se haya actualizado
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
          }
        }, 100);
      }
    }
  }, [isTablet, selectedProduct]);

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

  const Wrapper = isDesktop ? DesktopWrapper : MobileWrapper;

  return (
    <Wrapper>
      <Stack spacing={5}>
        <Container
          maxWidth={isTablet ? "sm" : "md"}
          sx={{ alignSelf: "center" }}
        >
          <Stack spacing={1.5}>
            <Stack spacing={0.5}>
              {/* <Stack spacing={5}> */}
              {/* <Box
                  component="img"
                  src={addornment}
                  alt="Adornment"
                  height={48}
                  width="fit-content"
                  sx={{ alignSelf: "center" }}
                /> */}

              <Typography
                variant="h2"
                color="secondary.main"
                textAlign={isTablet ? "center" : "left"}
              >
                Productos
              </Typography>
              {/* </Stack> */}
              <Typography
                variant="h6"
                color="primary.main"
                textAlign={isTablet ? "center" : "left"}
              >
                Hecha en México desde 1896.
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Box sx={{ height: "1px", backgroundColor: "secondary.main" }} />
              <Stack>
                <Typography
                  variant="h6"
                  textAlign={isTablet ? "center" : "left"}
                >
                  {selectedProduct?.title}
                </Typography>
                <Typography
                  variant="h6"
                  textAlign={isTablet ? "center" : "left"}
                >
                  {selectedProduct?.subtitle}
                </Typography>
              </Stack>
              <Box sx={{ height: "1px", backgroundColor: "secondary.main" }} />
              <Typography
                variant="body1"
                textAlign={isTablet ? "center" : "left"}
              >
                {selectedProduct?.description}
              </Typography>
            </Stack>
          </Stack>
        </Container>
        <Box
          sx={{
            overflow: "hidden",
            display: "flex",
            justifyContent: isTablet ? "center" : "flex-start",
          }}
        >
          <Box
            ref={chipsContainerRef}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              pl: isTablet ? 0 : 1.5,
              overflowX: "scroll",
              alignSelf: isTablet ? "center" : "flex-start",
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
                    selectedProduct?.name === product.name
                      ? "filled"
                      : "outlined"
                  }
                  onClick={() => handleSelectProduct(product)}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Stack>

      {/* Slider */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: isTablet ? "100%" : "600px",
          margin: "0 auto",
          px: { xs: 2, sm: 4 },
          pb: 8,
          "& .slick-slider": {
            position: "relative",
          },
          "& .slick-list": {
            padding: isTablet ? "0px 0 80px 0" : "0px 0 40px 0",
          },
          "& .slick-slide": {
            padding: "0 10px",
            "& > div": {
              height: "100%",
            },
          },
          "& .slick-dots": {
            top: "auto",
            bottom: isTablet ? "-90px" : "-50px",
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
          key={isTablet ? "tablet" : "mobile"}
          ref={sliderRef}
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={isTablet ? 3 : 1}
          slidesToScroll={1}
          centerMode={isTablet}
          centerPadding={isTablet ? "0px" : undefined}
          prevArrow={<PrevArrow isTablet={isTablet} />}
          nextArrow={<NextArrow isTablet={isTablet} />}
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
                  padding: isTablet ? "10px 20px" : "40px 20px",
                  border: "1px solid rgba(204, 204, 204, 1)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: isTablet ? "250px" : "400px",
                  aspectRatio: isTablet ? "1 / 1" : "auto",
                  width: "100%",
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: isTablet ? "100%" : "350px",
                    width: isTablet ? "100%" : "auto",
                    height: isTablet ? "100%" : "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Wrapper>
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

const PrevArrow = ({
  onClick,
  isTablet,
}: {
  onClick?: () => void;
  isTablet?: boolean;
}) => (
  <Box
    onClick={onClick}
    sx={{
      position: "absolute",
      left: "0",
      bottom: isTablet ? "-90px" : "-50px",
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

const NextArrow = ({
  onClick,
  isTablet,
}: {
  onClick?: () => void;
  isTablet?: boolean;
}) => (
  <Box
    onClick={onClick}
    sx={{
      position: "absolute",
      left: "65px",
      bottom: isTablet ? "-90px" : "-50px",
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

const MobileWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only("sm"));
  return (
    <Stack
      spacing={{ xs: 5, md: 10 }}
      sx={{
        pt: 5,
        pb: isTablet ? 9 : 5,
      }}
    >
      {children}
    </Stack>
  );
};

const DesktopWrapper = ({ children }: { children: React.ReactNode }) => (
  <Container sx={{ py: 10 }}>
    <Stack spacing={5} direction="row">
      {children}
    </Stack>
  </Container>
);
