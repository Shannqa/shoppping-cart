import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/main.css";

function Root() {
  const [cartAmount, setCartAmount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  
  useEffect(() => {
    Promise.all([
      fetch('https://fakestoreapi.com/products/categories')
      .then(result => result.json()),
      fetch("https://fakestoreapi.com/products")
      .then(result => result.json())
      ]).then(([jsonCategories, jsonProducts]) => {
        setCategories(jsonCategories);
        setProducts(jsonProducts)
      })
      .catch();
    
    fetch('https://fakestoreapi.com/products/categories')
      .then(result => result.json())
      .then(json => setCategories(json))
      .catch(error => console.error(error))

    fetch("https://fakestoreapi.com/products")
      .then(response => {
        if (response.status >= 400) {
          throw new Error("server error")
        }
        return response.json()
      })
      .then(json => setProducts(json))
      .catch(err => setError(err))
      .finally(setLoading(false))
  }, []);

  }, []);
  
  return(
    <div>
      <div className="header">
        <div className="head-logo">
          <img src="../logo.png" />
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
        <Outlet />
      </div>
    </div>
    )
}

export default Root






