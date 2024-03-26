import React, { useState, useEffect, createContext } from "react";
import { Outlet, Link, useOutletContext } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "../styles/main.css";

function Root() {
  const [cartAmount, setCartAmount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  
  useEffect(() => {
    Promise.all([
      fetch('https://fakestoreapi.com/products/categories'),
      fetch("https://fakestoreapi.com/products")
    ])
    .then(response => {
      if (response[0].status >= 400 || response[1].status >= 400) {
        throw new Error("Server error")
      }
      return Promise.all([response[0].json(), response[1].json()]);
    })
    .then(([jsonCategories, jsonProducts]) => {
      setCategories(jsonCategories);
      setProducts(jsonProducts)
    })
    .catch(err => setError(err))
    .finally(setLoading(false))
  }, []);

  if (error) {
    return(<p>A network error has occured!</p>)
  }
  if (loading) {
    return(<p>Loading....</p>)
  }
  

  return(
    <div>
      <Header categories={categories} />
      <Outlet context={[products, setProducts]} />
      <Footer />
    </div>
    )
}

export default Root






