import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import { ProductContext } from "../../../components/context/Product";

const ProductList = ({ onDelete }) => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="product-flex">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onDelete={() => onDelete(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
