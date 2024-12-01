import { Link, useLocation } from "react-router-dom";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/Navbar/Logo/logo.png";

export const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navWrapper">
        <div className="preNav">
          <h3 className="preNavMessage">
            ENCONTRARAS NUEVAS REFERENCIAS CADA SEMANA
          </h3>
        </div>

        <nav className="navBar">
          <RxHamburgerMenu className="hamburgerMenu" onClick={toggleMenu} />

          <div className={`navLinks ${menuOpen ? "open" : ""}`}>
            <Link to="/home" className={`navLink ${location.pathname === '/' || location.pathname === '/home' ? 'activeLink' : ''}`}>
              INICIO
            </Link>
            <Link to="/mujer" className={`navLink ${location.pathname === '/mujer' ? 'activeLink' : ''}`}>
              MUJER
            </Link>
            <Link to="/hombre" className={`navLink ${location.pathname === '/hombre' ? 'activeLink' : ''}`}>
              HOMBRE
            </Link>
          </div>

          <div className="navLogo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="navIcons">
            <Link to="https://wa.me/51923439231?" className="navIcon whatsapp" target="_blank">
              <PiWhatsappLogoLight size={30} />
            </Link>
            <Link to="/" className="navIcon Instagram">
              <SlSocialInstagram size={25} />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};
