import "./SectionModa.css";
import img1 from "./img/image 20.png";
import img2 from "./img/image 7.png";
import { useNavigate } from "react-router-dom";

export const SectionModa = () => {
  const navigate = useNavigate();


  return (
    <div className="moda-container">
      <div className="moda-img1">
        <img src={img1} alt="" />
      </div>
      <div className="moda-texto">
        <h2>DESCUBRE LA MODA QUE DEFINE<br/> TU ESTILO</h2>
        <p>
          En Valeria Stella, creemos que la moda debe ser accesible, elegante y
          de calidad. Por eso, seleccionamos cuidadosamente prendas de Amazon
          para ofrecerte lo mejor de la moda para mujer y hombre.
        </p>
        <button onClick={() => navigate("/outlet")}>VER OUTLET</button>
      </div>
      <div className="moda-img2">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};
