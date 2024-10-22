import { Link } from "react-router-dom";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";
import "./NavBar.css";
import logo from "../../assets/Navbar/Logo/logo.png";

export const NavBar = () => {
  return (
    <>
      <div className="navWrapper">
        <div className="preNav">
          <h3 className="preNavMessage">
            ENCONTRARAS NUEVAS REFERENCIAS CADA SEMANA
          </h3>
        </div>

        <nav className="navBar">
          <div className="navLinks">
            <Link to="/home" className="navLink">
              INICIO
            </Link>
            <Link to="/mujer" className="navLink">
              MUJER
            </Link>
            <Link to="/hombre" className="navLink">
              HOMBRE
            </Link>
            <Link to="/outlet" className="navLink">
              OUTLET
            </Link>
          </div>

          <div className="navLogo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="navIcons">
            <Link to="/" className="navIcon whatsapp">
              <PiWhatsappLogoLight size={30} />
            </Link>
            <Link to="/" className="navIcon Instagram">
            <SlSocialInstagram size={25}/>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};
