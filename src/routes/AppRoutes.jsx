import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import Hombre from '../pages/hombre/hombre'
import Mujer from '../pages/mujer/mujer'
import Outlet from '../pages/outlet/outlet'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/inicio" element={<Home />} />
        <Route path="/hombre" element={<Hombre />} />
        <Route path="/mujer" element={<Mujer />} />
        <Route path="/outlet" element={<Outlet />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
