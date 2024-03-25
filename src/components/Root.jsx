import React, { useState, useEffect, createContext } from "react";
import { Outlet, Link, useOutletContext } from "react-router-dom";
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
      <div className="header">
        <div className="head-logo">
          <img src="#" />
          <Link to={"/"}>Shop</Link>
        </div>
        <div className="head-categ">
          <div className="menu-btn">Browse categories</div>
          <ul className="dropdown-ul">
            {categories.map((category, id) => (
            <li key={id}><Link to={"categories/" + category}>{category}</Link></li>
            ))}
          </ul>
        </div>
        <div className="head-cart">
          <span>{cartAmount}</span>
          <img src="#" />
        </div>
      </div>
      <div>
        <Outlet context={[products, setProducts]} />
      </div>
    </div>
    )
}

export default Root






