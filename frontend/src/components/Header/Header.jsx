import React from "react";
import NavBar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

// import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <NavBar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <NavBar.Brand>Amazona</NavBar.Brand>
          </LinkContainer>
        </Container>
      </NavBar>
    </div>
  );
};

export default Header;
