import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Movies from "./pages/Movies.js";
import Nopage from "./pages/Nopage.js";
import OTT from "./pages/OTT.js";
import Others from "./pages/Others.js";
import Tech from "./pages/Tech.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tech" element={<Tech />} />
        <Route path="ott" element={<OTT />} />
        <Route path="others" element={<Others />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
