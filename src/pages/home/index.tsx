import { Stack } from "@mui/material";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import History from "./components/History";
import WhereFindUs from "./components/WhereFindUs";
import TagsSection from "./components/Tags";

export default function HomePage() {
  return (
    <Stack>
      <Hero />
      <AboutUs />
      <History />
      <TagsSection />
      <WhereFindUs />
    </Stack>
  );
}
