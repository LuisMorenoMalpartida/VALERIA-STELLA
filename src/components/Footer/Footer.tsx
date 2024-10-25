import styles from "./Footer.module.css"; 
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import  Facebook  from "./facebook 1.png";


import logo from "./logo.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={`${styles.footerSection} ${styles.cliente}`} >
          <h3>ATENCIÓN AL CLIENTE</h3>
          <ul>
            <li>
              <a href="/preguntasfrecuentes">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="/guitallas">Guía de Tallas</a>
            </li>
          </ul>
        </div>
        <div
          className={`${styles.footerSection} ${styles.footerSectionFooterLogo}`}
        >
          <img
            src={logo}
            alt="Valeria Stella"
            className={styles.footerLogoImg}
          />
          <div className={styles.socialIcons}>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
            <PiTiktokLogo />
            </a>
            <a href="#">
            <img src={Facebook} alt="Facebook" className={styles.socialIconImg} />
            </a>
          </div>
        </div>
        <div className={`${styles.footerSection} ${styles.legal}`}>
          <h3>CENTRO LEGAL</h3>
          <ul>
            <li>
              <a href="/politicaterminos">Políticas de privacidad</a>
            </li>
            <li>
              <a href="/politicaterminos">Términos & Condiciones</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
    <p>Copyright © 2024 Valeria Stella</p>
    <div className={styles.creditos}>
        <p>Desarrollado por</p>
        <div className={styles.circle}>
            <span className={`${styles.tooltip} ${styles.tooltip1}`}>Laura Luque Arias</span>
        </div>
        <div className={styles.circle}>
            <span className={`${styles.tooltip} ${styles.tooltip2}`}>Luis Moreno Malpartida</span>
        </div>
        <div className={styles.circle}>
            <span className={`${styles.tooltip} ${styles.tooltip3}`}>Deyvis Orosco</span>
        </div>
    </div>
</div>

    </footer>
  );
};
