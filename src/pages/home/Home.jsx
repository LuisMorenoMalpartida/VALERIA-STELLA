import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';
import './home.css';

export const Home = () => {
  return (
    <>
      <NavBar/>

      <div className="hero-section">
        <div className="hero-text">
          <h2>COMPRA TUS PRENDAS FAVORITAS</h2>
          <div className="hero-buttons">
            <Link to="#" className="hero-button">VER MUJER</Link>
            <Link to="#" className="hero-button primary">VER OUTLET</Link>
            <Link to="#" className="hero-button">VER HOMBRE</Link>
          </div>
        </div>
      </div>

      <div className="promotions-section">
        <div className="promotion-item promo1">
          <div className="promotion-text">
            <p>Elegancia y frescura para cada momento
            <br /> Viste lo mejor con Valeria
            </p>
            <Link to="#" className="promotion-button">COMPRAR</Link>
          </div>
        </div>

        <div className="promotion-item promo2">
          <div className="promotion-text">
            <p>Diseño y comodidad <br /> para hombres modernos</p>
            <Link to="#" className="promotion-button">COMPRAR</Link>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}
