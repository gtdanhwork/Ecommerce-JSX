import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { ProductReducer } from "../Reducer/reducer";
import axios from "axios";
import ProductInfo from "./ProductInfo/ProductInfo";

import "../ProductScreen/ProductScreen.scss";
import Loading from "../../components/Loading/Loading";
import { MessageBox } from "../../utils/MessageBox/MessageBox";
import { getError } from "../../utils/getError/getError";

function ProductScreen() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(ProductReducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  return (
    <div className="product">
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : error ? (
        <MessageBox message={error} type="error" />
      ) : (
        <ProductInfo product={product} />
      )}
    </div>
  );
}

export default ProductScreen;
