import { useState, useEffect } from "react";
import { ProductCard } from "../../features/Mujer/ProductCard/ProductCard";
import { Tabs, Tab } from "@nextui-org/react";
import "./ProductSection.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  colors: string[];
  sizes: string[];
};

type ProductsByCategory = {
  [key: string]: Product[];
};

interface ProductSectionProps {
  title: string;
  jsonUrl: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  jsonUrl,
}) => {
  const [activeTab, setActiveTab] = useState<string>("Top");
  const [products, setProducts] = useState<ProductsByCategory>({});

  useEffect(() => {
    // Cargar el archivo JSON con los productos
    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, [jsonUrl]);

  return (
    <>
      <NavBar />
      <div className="product-section-page">
        <h1 className="product-section-title">{title}</h1>
        <Tabs
          size="lg"
          variant="underlined"
          aria-label="Product categories"
          selectedKey={activeTab}
          onSelectionChange={(key) => setActiveTab(key as string)}
        >
          {Object.keys(products).map((tab) => (
            <Tab key={tab} title={tab} />
          ))}
        </Tabs>

        <div className="product-section-content">
          <div className="product-list-container">
            <div className="product-list">
              {products[activeTab] &&
                products[activeTab].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <button className="load-more-button">VER MÁS</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
