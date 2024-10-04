import React from "react";
import './NavBar.css';
import { FaWhatsapp, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "./logo.png";


export const NavBar = () => {
return (
    <header>
    <div className="top-banner">
        ENCONTRARAS NUEVAS REFERENCIAS CADA SEMANA
    </div>
    <nav className="navbar">
    <ul className="navbar-links">
        <li><Link to="#"><span>INICIO</span></Link></li>
        <li><Link to="#"><span>MUJER</span></Link></li>
        <li><Link to="#"><span>HOMBRE</span></Link></li>
        <li><Link to="#"><span>OUTLET</span></Link></li>
    </ul>
    <div className="navbar-logo">
        <img src={logo} alt="Valeria Stella" className="logo-image" />
    </div>
    <ul className="navbar-icons">
        <li><Link to="#"><FaWhatsapp /></Link></li> 
        <li><Link to="#"><FaShoppingBag /></Link></li>
    </ul>
    </nav>
</header>
)
}
