import React from "react";
import "./ProductCard.css";
// import { FaHeart } from "react-icons/fa"; // Asegúrate de tener react-icons instalado

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
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
        {/* <div className="heart-icon">
          <FaHeart />
        </div> */}
      </div>
    </div>
  );
};
