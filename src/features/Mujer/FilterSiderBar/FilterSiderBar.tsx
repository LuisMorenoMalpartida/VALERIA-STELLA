import React from "react";
import './FilterSiderBar.css';

export const FilterSidebar: React.FC = () => {
  return (
    <div className="filter-sidebar">
      <h3>Color</h3>
      <div className="color-options">
        {/* Añadir los círculos de colores */}
        <span className="color-circle yellow"></span>
        <span className="color-circle pink"></span>
        <span className="color-circle lightGreen"></span>
        <span className="color-circle lightBlue"></span>
        <span className="color-circle lightPink"></span>
        <span className="color-circle navy"></span>
        <span className="color-circle black"></span>
        <span className="color-circle white"></span>
        <span className="color-circle red"></span>
        <span className="color-circle turquoise"></span>
        <span className="color-circle lavender"></span>
        <span className="color-circle orange"></span>
      </div>
      <h3>Talla</h3>
      <div className="size-options">
        {/* Añadir las opciones de talla */}
        {["XXS", "XS", "S", "M", "L", "XL", "28", "30", "Standar"].map((size) => (
          <label key={size}>
            <input type="radio" name="size" value={size} />
            {size}
          </label>
        ))}
      </div>
    </div>
  );
};
