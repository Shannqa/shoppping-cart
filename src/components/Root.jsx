import React from "react";
import { Outlet, Link, useEffect } from "react-router-dom"

function Root() {
  const [cartAmount, setCartAmount] = useState(0);
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(result => result.json())
      .then(json => setCategories(json))
  }, []);
  
  return(
    <div>
      <div className="header">
        <div className="head-logo">
          <img src="../logo.png" />
          <span>Shop</span>
        </div>
        <div className="head-categ">
          <div class="">Browse categories</div> <ul className="dropdown-ul">
              {categories.map((category) => (
              <li>{category}</li>
              ))}
            </ul>
        </div>
        <div className="head-cart">
          <span>{cartAmount}</span>
          <img src="../cart.svg" />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
    )
}

export default Root






