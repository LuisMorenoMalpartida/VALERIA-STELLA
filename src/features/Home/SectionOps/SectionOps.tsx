import { useState, useEffect } from "react";
import img1 from "./img/Frame 83.png";
import img2 from "./img/Frame 84.png";
import img3 from "./img/Frame 85.png";
import img4 from "./img/Frame 83.png";
import img5 from "./img/Frame 83.png";
import img6 from "./img/Frame 83.png";
import "./SectionOps.css";

export const SectionOps = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="ops-container">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div key={index} className="hola">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
};
