import {
  Box,
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
import dividerImage from "./assets/divider.webp";
import bg from "./assets/bg.webp";
import watermark from "./assets/watermark.webp";

// images
import image1Desktop from "./assets/1-desktop.webp";
import image1Mobile from "./assets/1-mobile.webp";
import image2Desktop from "./assets/2-desktop.webp";
import image2Mobile from "./assets/2-mobile.webp";
import image3Desktop from "./assets/3-desktop.webp";
import image3Mobile from "./assets/3-mobile.webp";
import image4Desktop from "./assets/4-desktop.webp";
import image4Mobile from "./assets/4-mobile.webp";
import image5Desktop from "./assets/5-desktop.webp";
import image5Mobile from "./assets/5-mobile.webp";
import image6Desktop from "./assets/6-desktop.webp";
import image6Mobile from "./assets/6-mobile.webp";
import image7Desktop from "./assets/7-desktop.webp";
import image7Mobile from "./assets/7-mobile.webp";
import image8Desktop from "./assets/8-desktop.webp";
import image8Mobile from "./assets/8-mobile.webp";

export default function History() {
  const theme = useTheme();
  const [selectedHistoryItem, setSelectedHistoryItem] =
    useState<IHistoryItem | null>(years[0]);
  const sliderRef = useRef<Slider>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const currentIndex = years.findIndex(
    item => item.year === selectedHistoryItem?.year
  );

  const handleTimelineClick = (index: number) => {
    const item = years[index];
    setSelectedHistoryItem(item);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <Container
      sx={{
        pt: { xs: 12.5, md: 11 },
        position: "relative",
      }}
      id="nuestra-historia"
    >
      <Stack spacing={5}>
        <Stack spacing={1.5}>
          <Stack spacing={1}>
            <Box
              component="img"
              src={dividerImage}
              alt="Divider"
              height={{ xs: 21, md: 33 }}
              width="fit-content"
              sx={{ alignSelf: "center" }}
            />

            <Typography variant="h2" color="secondary.main" textAlign="center">
              Nuestra historia
            </Typography>
          </Stack>

          <Box
            sx={{
              height: "1px",
              backgroundColor: "secondary.main",
            }}
          />

          <Stack spacing={1}>
            <Stack>
              <Typography variant="h5" color="primary.main">
                {`${selectedHistoryItem?.year}. ${selectedHistoryItem?.title}`}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                {selectedHistoryItem?.subtitle}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* Slider */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            margin: "0 auto",
            pb: 8,
            "& .slick-slider": {
              position: "relative",
            },
            "& .slick-list": {
              padding: "0px 0 40px 0",
            },
            "& .slick-slide": {
              padding: "0 10px",
              "& > div": {
                height: "100%",
              },
            },
          }}
        >
          <Slider
            key="mobile"
            ref={sliderRef}
            infinite={false}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            beforeChange={(_current: number, next: number) => {
              setSelectedHistoryItem(years[next]);
            }}
          >
            {years.map(item => (
              <Box key={item.year}>
                <Box
                  sx={{
                    backgroundImage: `url(${bg})`,
                    backgroundBlendMode: "overlay",
                    backgroundColor: "rgba(255, 255, 255, 0.40)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "16px",
                    padding: "40px 20px",
                    border: "1px solid #D1B06829",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "400px",
                    aspectRatio: "auto",
                    width: "100%",
                  }}
                >
                  <Box
                    component="img"
                    src={isMobile ? item.imageMobile : item.imageDesktop}
                    alt={item.year + " - " + item.title}
                    sx={{
                      maxWidth: "100%",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      position: "relative",
                      zIndex: 3,
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>

        <Stack
          spacing={0.5}
          sx={{
            position: "relative",
            top: { xs: "auto", md: -100 },
            width: { xs: "100%", md: "calc(100% - 180px)" },
          }}
        >
          <Typography variant="h6">
            {selectedHistoryItem?.descriptionTitle}
          </Typography>
          <Typography variant="body1">
            {selectedHistoryItem?.descriptionText}
          </Typography>
        </Stack>

        {/* Timeline */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            py: 4,
            top: { xs: "auto", md: -69 },
          }}
        >
          <Timeline
            items={years}
            currentIndex={currentIndex}
            onItemClick={handleTimelineClick}
          />
        </Box>
      </Stack>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end", md: "flex-start" },
          alignItems: "center",
          overflow: { xs: "hidden", md: "visible" },
        }}
      >
        <Box
          component="img"
          src={watermark}
          alt="Watermark"
          sx={{
            position: "relative",
            width: { xs: "150%", sm: "560px", md: "681px" },
            mt: { xs: "-180px", sm: "-120px", md: 0 },
            left: { xs: "0", sm: "100px", md: "-340px" },
            opacity: 0.8,
            zIndex: 1,
          }}
        />
      </Box>
    </Container>
  );
}

const years = [
  {
    year: "1896",
    title: "EL ORIGEN DE UNA LEYENDA.",
    subtitle: "En la ciudad de Orizaba, Veracruz, nace cerveza superior.",
    descriptionTitle: "El inicio de algo distinto.",
    descriptionText:
      "A finales del siglo XIX, en Orizaba, Veracruz, nació una cerveza que no se parecía a ninguna otra. Fue creada con una idea clara: ofrecer un sabor más refinado, dirigido a quienes sabían disfrutar lo bien hecho. Así surgió Superior. Su nombre no fue un adorno: fue una declaración desde el primer día. Estaba destinada a ser diferente, a destacar.",
    imageDesktop: image1Desktop,
    imageMobile: image1Mobile,
  },
  {
    year: "1930-1950",
    title: "EXPANSIÓN Y RECONOCIMIENTO.",
    subtitle: "Superior comienza a crecer más alla de su lugar de origen.",
    descriptionTitle: "Del secreto bien guardado al gusto nacional.",
    descriptionText:
      "Lo que comenzó como un orgullo local empezó a abrirse camino por todo el país. Superior llegó a más ciudades, a más mesas, y poco a poco se ganó un lugar entre las cervezas más apreciadas de México. Su calidad hablaba por sí sola. Donde aparecía, se quedaba.",
    imageDesktop: image2Desktop,
    imageMobile: image2Mobile,
  },
  {
    year: "1960-1980",
    title: "LA RUBIA QUE TODOS QUERÍAN.",
    subtitle:
      "Llega la época dorada. La imagén de ¨la rubia superior¨se convierte en icono.",
    descriptionTitle: "La rubia que definió una era.",
    descriptionText:
      "México tenía su propio ícono en cada esquina: La Rubia Superior. El símbolo que apareció en revistas, espectaculares, conversaciones, y sobre todo, en la memoria colectiva. Durante más de cuatro décadas, fue imposible no verla… o no mencionarla. Su presencia acompañó a generaciones enteras que crecieron sabiendo que “la rubia que todos quieren” no era una simple frase: era parte de la cultura popular. En una época de cambios profundos, Superior dejó huella sin necesidad de palabras complicadas. Bastaba con verla para saber que el momento era suyo.",
    imageDesktop: image3Desktop,
    imageMobile: image3Mobile,
  },
  {
    year: "1985",
    title: "UNA NUEVA ETAPA.",
    subtitle:
      "Superior se integra al portafolio de Cervecería Cuauhtémoc Moctezuma.",
    descriptionTitle: "Nueva etapa, misma esencia.",
    descriptionText:
      "Ese año trajo un cambio importante. Superior se integró a una nueva familia cervecera, con más fuerza y presencia nacional. Pero su esencia no cambió. Mantuvo el carácter que siempre la distinguió, y ganó cercanía con nuevas generaciones. Fue una evolución sin concesiones: el mismo sabor, ahora con mayor alcance.",
    imageDesktop: image4Desktop,
    imageMobile: image4Mobile,
  },
  {
    year: "2000-2012",
    title: "UNA CERVEZA CON RAÍZ REGIONAL.",
    subtitle:
      "La marca se redefine como una cerveza del sureste mexicano. Estados como Veracruz, Tabasco y Yucatán la adoptan como propia. En cada reunión, playa o fiesta, Superior se convierte en parte de la identidad local.",
    descriptionTitle: "El sur la hizo suya.",
    descriptionText:
      "Con la llegada del nuevo milenio, Superior encontró un hogar natural en el sureste mexicano. Veracruz, Tabasco, Yucatán… la adoptaron como parte de su día a día. En las playas, las comidas familiares o las fiestas entre amigos, Superior no faltaba. En esa región, más que una cerveza, se volvió parte del paisaje.",
    imageDesktop: image5Desktop,
    imageMobile: image5Mobile,
  },
  {
    year: "2019",
    title: "EL SUR SABE SUPERIOR.",
    subtitle:
      "Superior celebra su vínculo con el sur de México a través de una nueva campaña que resalta el sabor, la tradición y el orgullo regional. “El sur sabe Superior” refleja la conexión real entre la marca y quienes la disfrutan desde siempre.",
    descriptionTitle: "Una frase que lo dijo todo.",
    descriptionText:
      "Después de años de conexión auténtica con el sur, surgió una expresión que resumía esa relación: “El sur sabe Superior.” No era una invención. Era una verdad que muchos ya sentían. Porque hay bebidas que refrescan, y hay otras que acompañan. Superior siempre ha sido de las segundas.",
    imageDesktop: image6Desktop,
    imageMobile: image6Mobile,
  },
  {
    year: "2020",
    title: "LLEGA “BELLITA”.",
    subtitle:
      "Se lanza “Bellita”, una nueva presentación de 300 ml en botella de vidrio NR. Es práctica, fresca y pensada para momentos espontáneos. Su llegada refresca la imagen de la marca y la acerca a nuevas generaciones.",
    descriptionTitle: "Una nueva forma de disfrutar.",
    descriptionText:
      "Ese año llegó Bellita, una presentación de 300 ml en botella de vidrio no retornable. Ideal para esos momentos casuales que no se planean, pero que se disfrutan como si sí. Bellita fue la forma perfecta de seguir presente, ahora en nuevos espacios, con nuevas generaciones. Práctica por fuera, auténtica por dentro.",

    imageDesktop: image7Desktop,
    imageMobile: image7Mobile,
  },
  {
    year: "2021",
    title: "125 AÑOS DE TRADICIÓN.",
    subtitle:
      "Superior cumple 125 años de historia cervecera. Lo celebra con una campaña conmemorativa y una nueva imagen que honra su legado: “El sabor de una gran tradición cervecera”. Más de un siglo después, la rubia sigue siendo Superior.",
    descriptionTitle: "125 años de historia viva.",
    descriptionText:
      "Más de un siglo después, Superior celebró su aniversario 125 con orgullo. Porque no todas las marcas pueden decir que han acompañado a tantas generaciones manteniéndose fieles a su carácter. Hoy, como en 1896, Superior sigue siendo una cerveza hecha con propósito. Porque cuando algo está bien hecho, trasciende el tiempo.",
    imageDesktop: image8Desktop,
    imageMobile: image8Mobile,
  },
] as IHistoryItem[];

interface IHistoryItem {
  year: string;
  title: string;
  subtitle: string;
  descriptionTitle: string;
  descriptionText: string;
  image: string;
  imageDesktop: string;
  imageMobile: string;
}

const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        left: { xs: "0", md: "auto" },
        right: { xs: "auto", md: "64px" },
        bottom: { xs: "-50px", md: "-128px" },
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
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        left: { xs: "65px ", md: "auto" },
        right: { xs: "auto", md: "0" },
        bottom: { xs: "-50px", md: "-128px" },
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
};

interface TimelineProps {
  items: IHistoryItem[];
  currentIndex: number;
  onItemClick: (index: number) => void;
}

const Timeline = ({ items, currentIndex, onItemClick }: TimelineProps) => {
  const totalItems = items.length;
  const fillPercentage = ((currentIndex + 1) / totalItems) * 100;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Hacer scroll al punto actual cuando cambie currentIndex en mobile
  useEffect(() => {
    if (
      isMobile &&
      timelineContainerRef.current &&
      dotRefs.current[currentIndex]
    ) {
      const currentDot = dotRefs.current[currentIndex];
      const container = timelineContainerRef.current;

      if (currentDot) {
        const dotLeft = currentDot.offsetLeft;
        const dotWidth = currentDot.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollLeft = dotLeft - containerWidth / 2 + dotWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex, isMobile]);

  return (
    <Box
      ref={timelineContainerRef}
      sx={{
        position: "relative",
        width: "100%",
        px: { xs: 2, sm: 4, md: 6 },
        overflowX: isMobile ? "auto" : "visible",
        overflowY: "hidden",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* Línea base (gris claro) */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: 0,
          right: isMobile ? "auto" : 0,
          width: isMobile ? `${totalItems * 50}vw` : "100%",
          minWidth: isMobile ? `${totalItems * 50}vw` : "auto",
          height: "2px",
          backgroundColor: "#E8B4B4",
          zIndex: 1,
        }}
      />

      {/* Línea llena (roja) */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: 0,
          width: isMobile
            ? `${((currentIndex + 1) / totalItems) * totalItems * 40}vw`
            : `${fillPercentage}%`,
          height: "2px",
          backgroundColor: "#BB2E28",
          zIndex: 2,
          transition: "width 0.5s ease",
        }}
      />

      {/* Puntos de la línea de tiempo */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
          zIndex: 3,
        }}
      >
        {items.map((item, index) => {
          const isActive = index <= currentIndex;
          // Puntos activos: rojo, puntos inactivos: rosa (estado idle)
          const dotColor = isActive ? "#BB2E28" : "#E8B4B4";
          const textColor = isActive ? "#BB2E28" : "#E8B4B4";

          return (
            <Box
              key={item.year}
              ref={(el: HTMLDivElement | null) => {
                dotRefs.current[index] = el;
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                flex: isMobile ? "0 0 42vw" : 1,
                // width: isMobile ? "50%" : "auto",
                // maxWidth: isMobile ? "50vw" : "120px",
                position: "relative",
                minHeight: isMobile ? "100px" : "auto",
              }}
              onClick={() => onItemClick(index)}
            >
              {/* Punto circular - centrado en la línea */}
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: dotColor,
                  border: `2px solid ${dotColor}`,
                  boxShadow: "0 0 0 8px white", // Borde blanco para separar de la línea
                  position: "absolute",
                  top: "20px", // Exactamente donde está la línea
                  left: "50%",
                  transform: "translate(-50%, -50%)", // Centrado perfecto vertical y horizontal
                  zIndex: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translate(-50%, -50%) scale(1.3)",
                  },
                }}
              />
              {/* Etiqueta del año */}
              <Typography
                variant="h6"
                sx={{
                  mt: "34px", // Espacio desde el punto (20px línea + 6px radio punto + 8px borde blanco)
                  fontSize: isMobile ? "14px" : "18px",
                  color: textColor,
                  fontWeight: 700,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  overflow: "visible",
                }}
              >
                {item.year}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
