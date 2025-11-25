import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  type SxProps,
} from "@mui/material";
import { theme } from "../../../../theme";
import divider from "./divider.png";

export default function History() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileContent /> : <DesktopContent />;
}

const MobileContent = () => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container sx={{ position: "relative" }}>
        <DividerImage
          sx={{
            right: { xs: "50%", sm: 0 },
            transform: { xs: "translateX(50%)", sm: "none" },
          }}
        />
        <Stack
          spacing={2.5}
          sx={{
            pt: { xs: 9, sm: 9 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
            }}
            color="secondary"
          >
            Nuestra historia
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

const DesktopContent = () => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container sx={{ position: "relative" }}>
        <DividerImage />
        <Stack
          spacing={4}
          sx={{
            pt: { xs: 9, sm: 9 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
            }}
            color="secondary"
          >
            Nuestra historia
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

const DividerImage = ({ sx }: { sx?: SxProps }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-50px",
        right: 0,
        ...sx,
      }}
    >
      <Box sx={{ backgroundColor: "blue", width: "100px", height: "100px" }} />
    </Box>
  );
};
