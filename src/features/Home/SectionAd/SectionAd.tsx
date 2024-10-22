import { Button } from "@nextui-org/react";
import "./SectionAd.css"; // Make sure to create styles for the component
import chica from "./img/chica.png";
import { useNavigate } from "react-router-dom";

export const SectionAd = () => {
  return (
    <div className="fashion-ad">
      <div className="ad-content">
        <h2>Elegancia y frescura para cada momento</h2>
        <p>Viste lo mejor con Valeria Stella</p>
        <button className="buy-button">COMPRAR</button>
      </div>
      <div className="ad-image">
        <img
          src={chica} // Replace this with the image path
          alt="Model in a fashionable outfit"
        />
      </div>
    </div>
  );
};

export const SectionAd2 = () => {
  return (
    <div className="fashion-ad">
      <div className="ad-image">
        <img
          src={chica} // Replace this with the image path
          alt="Model in a fashionable outfit"
        />
      </div>
      <div className="ad-content">
        <h2>Elegancia y frescura para cada momento</h2>
        <p>Viste lo mejor con Valeria Stella</p>
        <button className="buy-button">COMPRAR</button>
      </div>
      {/* <div className="ad-image">
          <img
            src={chica} // Replace this with the image path
            alt="Model in a fashionable outfit"
          />
        </div> */}
    </div>
  );
};

export const SectionAd1 = () => {
  const navigate = useNavigate();

  return (
    <div className="section-ad1">
      <div className="ad-content">
        <h2>Elegancia y frescura para cada momento</h2>
        <p>Viste lo mejor con Valeria Stella</p>
        <Button onClick={() => navigate("/mujer")} className="ad-button">COMPRAR</Button>
      </div>
    </div>
  );
};

export const SectionAd3 = () => {
  const navigate = useNavigate();

  return (
    <div className="section-ad3">
      <div className="ad-content">
        <h2>Elegancia y frescura para cada momento</h2>
        <p>Viste lo mejor con Valeria Stella</p>
        <Button onClick={() => navigate("/hombre")}  className="ad-button">COMPRAR</Button>
      </div>
    </div>
  );
};
