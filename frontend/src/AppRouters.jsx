import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./containers/Homescreen/Homescreen";
import ProductScreen from "./containers/ProductScreen/ProductScreen";
import Header from "./components/Header/Header";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer/Footer";

function AppRouters() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column sideContainer">
        <Header />
        <div className="main">
          <Container>
            <Routes>
              <Route path="/" element={<Homescreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouters;
