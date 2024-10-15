import React from "react";
import "./ProductCard.css";
// import { FaHeart } from "react-icons/fa"; // Asegúrate de tener react-icons instalado

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  colors: string[];
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <div className="color-options">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="color-circle"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
        {/* <div className="heart-icon">
          <FaHeart />
        </div> */}
      </div>
    </div>
  );
};
