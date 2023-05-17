import React, { useEffect, useReducer } from "react";
import Products from "./Products/Products";
import { ProductListReducer } from "../Reducer/reducer";
import logger from "use-reducer-logger";
// import data from "../../data";
import axios from "axios";

import "../Homescreen/Homescreen.scss";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading/Loading";
import { MessageBox } from "../../utils/MessageBox/MessageBox";

function Homescreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(ProductListReducer), {
    products: [],
    loading: true,
    error: "",
  });
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
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <div className="mainProducts">
        <h1>Featured Products</h1>
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : error ? (
          <MessageBox message={error} type="error" />
        ) : (
          <Products product={products} />
        )}
      </div>
    </div>
  );
}

export default Homescreen;
