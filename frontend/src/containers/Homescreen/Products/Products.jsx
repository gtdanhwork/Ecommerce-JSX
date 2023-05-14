import React from "react";
import "./Products.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button, Rate } from "antd";
import { Link } from "react-router-dom";

function Products(props) {
  const { products } = props;

  return (
    <div className="products">
      <Row>
        {products.map((product) => (
          <Col sm={6} md={4} lg={3} key={product.slug}>
            <Card className="product">
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <Card.Body>
                <Link to={`/product/${product.slug}`}>
                  <Card.Title>{product.name}</Card.Title>
                </Link>
                <Rate disabled defaultValue={product.rating} />
                <Card.Text>${product.price}</Card.Text>
                <Button type="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
