import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import SearchIcon from "@material-ui/icons/Search";
import Login from "./components/Login";
import Home from "./pages/Home";

function App() {
  const [products, setProducts] = useState([]);

  // get data
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get("https://fakestoreapi.com/products");
      setProducts(request.data);

      return request;
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      <Header title="Giant Stride" search={<SearchIcon />} />
      <Home products={products} />

      <Login />
    </div>
  );
}

export default App;
