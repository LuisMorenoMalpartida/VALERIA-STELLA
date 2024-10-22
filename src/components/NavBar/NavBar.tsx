import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
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
            <Link to="/facebook" className="navIcon whatsapp">
              <FaWhatsapp size={25} />
            </Link>
            {/* <Link to="/twitter" className="navIcon heart">
              <FaRegHeart size={25} />
            </Link> */}
          </div>
        </nav>
      </div>
    </>
  );
};
