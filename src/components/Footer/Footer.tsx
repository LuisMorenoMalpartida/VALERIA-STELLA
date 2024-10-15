import styles from "./Footer.module.css"; // Importa el CSS Module
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import logo from "./logo.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
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
        <div className={`${styles.footerSection} ${styles.footerSectionFooterLogo}`}>
          <img src={logo} alt="Valeria Stella" className={styles.footerLogoImg} />
          <div className={styles.socialIcons}>
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
        <div className={styles.footerSection}>
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

      <div className={styles.footerBottom}>
        <p>Copyright © 2024 Amaoda</p>
      </div>
    </footer>
  );
};
