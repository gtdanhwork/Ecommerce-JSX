import React from "react";
import Header from "../components/Header";

function Homescreen() {
  return (
    <div className="homeScreen">
      <div className="header">
        <Header />
      </div>
      <div className="main">List Products</div>
    </div>
  );
}

export default Homescreen;
