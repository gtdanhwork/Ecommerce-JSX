import React from "react";
import "./Products.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Products(props) {
  const { products } = props;
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.slug}>
          <Link to={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="productInfo">
            <Link to={`/product/${product.slug}`}>
              <p>{product.name}</p>
            </Link>
            <p>
              <strong>{product.price}</strong>
            </p>
            <Button type="primary">Add to Cart</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
