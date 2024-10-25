import "./SectionAd.css"; // Make sure to create styles for the component

import { useNavigate } from "react-router-dom";

export const SectionAd1 = () => {
  const navigate = useNavigate();

  return (
    <div className="section-ad1">
      <div className="ad-content">
        <p>Elegancia y frescura para cada momento<br/> 
        Viste lo mejor con Valeria Stella</p>
        <button onClick={() => navigate("/mujer")} className="ad-button">COMPRAR</button>
      </div>
    </div>
  );
};

export const SectionAd3 = () => {
  const navigate = useNavigate();

  return (
    <div className="section-ad2">
      <div className="ad-content">
        <p>Elegancia y comodidad<br/>
        para el hombre moderno</p>
        <button onClick={() => navigate("/hombre")}  className="ad-button">COMPRAR</button>
      </div>
    </div>
  );
};
