import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./containers/Homescreen/Homescreen";
import ProductScreen from "./containers/ProductScreen/ProductScreen";

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/product/:slug" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
