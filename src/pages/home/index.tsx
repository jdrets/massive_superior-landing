import { Stack } from "@mui/material";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

export default function HomePage() {
  return (
    <Stack>
      <Hero />
      <AboutUs />
    </Stack>
  );
}
