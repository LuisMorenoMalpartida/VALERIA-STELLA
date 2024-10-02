import React from "react";
import './Navbar.css';
import { FaHeart, FaUserAlt, FaShoppingBag } from 'react-icons/fa';

export const NavBar = () => {
  return (
    <header>
    <div className="top-banner">
        ENCONTRARAS NUEVAS REFERENCIAS CADA SEMANA
    </div>
    <nav className="navbar">
    <ul className="navbar-links">
        <li>INICIO</li>
        <li>MUJER</li>
        <li>HOMBRE</li>
        <li>OUTLET</li>
    </ul>
    <div className="navbar-logo">
        VALERIA STELLA
    </div>
    <ul className="navbar-icons">
        <li><FaUserAlt /></li>
        <li><FaHeart /></li>
        <li><FaShoppingBag /></li>
    </ul>
    </nav>
</header>
  )
}
