import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Mujer } from "../pages/mujer/Mujer";
import { Hombre } from "../pages/hombre/Hombre";
import { Outlet } from "../pages/outlet/OutLetPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mujer" element={<Mujer />} />
        <Route path="/hombre" element={<Hombre />} />
        <Route path="/outlet" element={<Outlet />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
