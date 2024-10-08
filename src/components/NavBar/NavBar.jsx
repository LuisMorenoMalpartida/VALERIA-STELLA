import 'react'
import './NavBar.css'
import { CiHeart } from 'react-icons/ci'
import { PiWhatsappLogoThin } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import logo from './logo.png'

export const NavBar = () => {
  return (
    <header>
      <div className="top-banner">
        ENCONTRARAS NUEVAS REFERENCIAS CADA SEMANA
      </div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="#">
              <span>INICIO</span>
            </Link>
          </li>
          <li>
            <Link to="/mujer">
              <span>MUJER</span>
            </Link>
          </li>
          <li>
            <Link to="/hombre">
              <span>HOMBRE</span>
            </Link>
          </li>
          <li>
            <Link to="/outlet">
              <span>OUTLET</span>
            </Link>
          </li>
        </ul>
        <div className="navbar-logo">
          <img src={logo} alt="Valeria Stella" className="logo-image" />
        </div>
        <ul className="navbar-icons">
          <li>
            <Link to="#">
              <PiWhatsappLogoThin />
            </Link>
          </li>
          <li>
            <Link to="#">
              <CiHeart />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
