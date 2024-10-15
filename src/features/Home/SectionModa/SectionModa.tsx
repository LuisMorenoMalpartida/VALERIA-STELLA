import { Button } from "@nextui-org/react";
import "./SectionModa.css";
import img1 from "./img/9340575.png";

export const SectionModa = () => {
  return (
    <div className="moda-container">
      <div>
        <img src={img1} alt="" />
      </div>
      <div className="moda-texto">
        <h2>DESCUBRE LA MODA QUE DEFINE TU ESTILO</h2>
        <p>
          En Valeria Stella, creemos que la moda debe ser accesible, elegante y de
          calidad. Por eso, seleccionamos cuidadosamente prendas de Amazon para
          ofrecerte lo mejor de la moda para mujer y hombre.
        </p>
        <Button>VER OUTLET</Button>
      </div>
      <div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
};
