import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import HomePage from "./pages/home/index.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Privacy from "./pages/legals/Privacy.tsx";
import Cookies from "./pages/legals/Cookies.tsx";
import Terms from "./pages/legals/Terms.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/legales",
    element: <App />,
    children: [
      { path: "aviso-de-privacidad", element: <Privacy /> },
      { path: "politica-de-cookies", element: <Cookies /> },
      { path: "terminos-y-condiciones", element: <Terms /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
