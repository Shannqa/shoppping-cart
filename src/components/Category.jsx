import React, { useState, useEffect } from "react";
import { Link, useParams, useOutletContext } from 'react-router-dom';

function Category() {
  let category = useParams().category;
  const [products, setProducts] = useOutletContext();
  const currentProducts = products.filter((item) => item.category == category);
  console.log(currentProducts); 
  
  return(
    <div className="category">
      <h2>{category}</h2>
      <div className="products">
        {currentProducts.map(product => (<div key={product.id} className="product">
        <Link to={"/products/" + product.id} className="title"><h3>{product.title}</h3> </Link>
        <div className="left">
          <img src={product.image} />
          <p className="price">{"$" + product.price}</p>
          <a className="add-to-cart">Add to cart</a>
        </div>
        <div className="right">
          <p>{product.description}</p>
        </div>
        </div>))}
      </div>
    </div>
    )
}

export default Category