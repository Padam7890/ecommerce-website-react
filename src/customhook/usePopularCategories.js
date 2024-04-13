import React, { useState, useEffect } from "react";

import http from "../utils/http";

const usePopularCategories = () => {
  const [popularCategories, setPopularCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errortext, setErrorText] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await http.get("/categories");
        const data = response.data.categories;

        if (data !== undefined && data !== null) {
          setPopularCategories(data);
        } else {
          console.log("Data is undefined or null");
          setErrorText("Can't fetch Data !! Server Crash ??  Sorry :( ");
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const timer = setTimeout(fetchCategories, 2000);
    return () => clearTimeout(timer);
  }, []);

  return { popularCategories, loading, setLoading, errortext };
};

export default usePopularCategories;
