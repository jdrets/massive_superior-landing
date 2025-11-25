import { Stack } from "@mui/material";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import History from "./components/History";

export default function HomePage() {
  return (
    <Stack>
      <Hero />
      <AboutUs />
      <History />
    </Stack>
  );
}
