import { Stack } from "@mui/material";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import History from "./components/History";
import WhereFindUs from "./components/WhereFindUs";
import TagsSection from "./components/Tags";
import AgeGate from "../../components/AgeGate";
import Products from "./components/Products";

export default function HomePage() {
  return (
    <Stack>
      <AgeGate />
      <Hero />
      <AboutUs />
      <History />
      <TagsSection />
      <Products />
      <WhereFindUs />
    </Stack>
  );
}
