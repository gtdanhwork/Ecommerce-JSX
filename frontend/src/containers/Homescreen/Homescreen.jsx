import React, { useEffect, useReducer } from "react";
import Products from "./Products/Products";
import logger from "use-reducer-logger";
// import data from "../../data";
import axios from "axios";

import "../Homescreen/Homescreen.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

function Homescreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div className="homeScreen">
      <div className="mainProducts">
        <h1>Featured Products</h1>
        {loading ? <div>Loading...</div> : error ? <div>{error}</div> : <Products products={products} />}
      </div>
    </div>
  );
}

export default Homescreen;
