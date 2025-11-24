import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />

      <main>
        <Outlet />
      </main>
    </Box>
  );
}
