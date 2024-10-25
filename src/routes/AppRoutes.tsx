import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Mujer } from "../pages/mujer/Mujer";
import { Hombre } from "../pages/hombre/Hombre";
import { OutletPage } from "../pages/outlet/OutLetPage";
import PreguntasFrecuentes from "../pages/Preguntas frecuentes/PreguntasFrecuentes";
import GuiaTallas from "../pages/Guía de Tallas/GuíaTallas";
import PoliticaTerminos from "../pages/Politicas y Términos/PoliticaTerminos";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mujer" element={<Mujer />} />
        <Route path="/hombre" element={<Hombre />} />
        <Route path="/outlet" element={<OutletPage />} />
        <Route path="/guitallas" element={<GuiaTallas/>} />
        <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/politicaterminos" element={<PoliticaTerminos />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
