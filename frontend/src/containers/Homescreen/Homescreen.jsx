import React from "react";
import Products from "../ProductScreen/Products/Products";
import data from "../../data";

import "../Homescreen/Homescreen.scss";

function Homescreen() {
  return (
    <div className="homeScreen">
      <div className="mainProducts">
        <h1>Featured Products</h1>
        <Products products={data.products} />
      </div>
    </div>
  );
}

export default Homescreen;
