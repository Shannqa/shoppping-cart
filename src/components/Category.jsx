import React, { useState, useEffect } from "react";
import { Link, useParams, useOutletContext } from 'react-router-dom';

function Category() {
  let category = useParams().category;
  const [products, setProducts] = useOutletContext();
  const currentProducts = products.filter((item) => item.category == category);
  console.log(currentProducts); 
  
  return(
    <div className="category">
      <h3>{category}</h3>
      <div className="products">
        {currentProducts.map(product => (<div key={product.id} className="product">
        <Link to={"/products/" + product.id}><h4>{product.title}</h4> </Link>
        <p className="price">{product.price}</p>
        <img src={product.image} />
        <p>{product.description}</p>

        </div>))}
      </div>
    </div>
    )
}

export default Category