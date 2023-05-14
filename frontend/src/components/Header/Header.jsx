import React, { useContext } from "react";
import NavBar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../../Store";
import Badge from "react-bootstrap/Badge";

// import "./Header.scss";

const Header = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div className="header">
      <NavBar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <NavBar.Brand>Amazona</NavBar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.length}
                </Badge>
              )}
            </Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Header;
