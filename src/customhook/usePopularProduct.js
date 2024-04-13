import React, { useState, useEffect } from "react";

import http from "../utils/http";

const usePopularProducts = () => {
  const [popularProduct, setPopularProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errortext, setErrorText] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await http.get("/products");
        const data = response.data.products;

        if (data !== undefined && data !== null) {
          setPopularProduct(data);
        } else {
          console.log("Data is undefined or null");
          setErrorText("Can't fetch Data !! Server Crash ??  Sorry :( ");
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const timer = setTimeout(fetchProducts, 2000);
    return () => clearTimeout(timer);
  }, []);

  return { popularProduct, loading, setLoading, errortext };
};

export default usePopularProducts;
