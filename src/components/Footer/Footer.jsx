import 'react'
import './Footer.css'
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa'
import logo from './logo.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section client">
          <h3>ATENCIÓN AL CLIENTE</h3>
          <ul>
            <li>
              <a href="#">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="#">Guía de Tallas</a>
            </li>
          </ul>
        </div>
        <div className="footer-section footer-logo">
          <img src={logo} alt="Valeria Stella" className="footer-logo-img" />
          <div className="social-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="footer-section legal">
          <h3>CENTRO LEGAL</h3>
          <ul>
            <li>
              <a href="#">Políticas de privacidad</a>
            </li>
            <li>
              <a href="#">Términos & Condiciones</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Valeria Stella</p>
      </div>
    </footer>
  )
}
