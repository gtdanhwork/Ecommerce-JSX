import React, { useContext } from "react";
import "./Products.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button, Rate } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { Store } from "../../../Store";

function Products(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Product is out of stock");
      return;
    }
    ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };

  return (
    <div className="products">
      <Row>
        {product.map((product) => (
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
                {product.countInStock === 0 ? (
                  <Button type="primary" disabled>
                    Out of Stock
                  </Button>
                ) : (
                  <Button type="primary" onClick={() => addToCartHandler(product)}>
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
