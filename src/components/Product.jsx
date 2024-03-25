import { useState } from "react";
import { useParams, useOutletContext } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useOutletContext();
  const currentID = useParams().product;
  const currentProduct = products.find((item) => item.id == currentID);
  
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/" + productID.id)
  //     .then(response => {
  //       if (response.status >= 400) {
  //         throw new Error("server error")
  //       }
  //       return response.json()
  //     })
  //     .then(json => setProducts(json))
  //     .catch(err => setError(err))
  //     .finally(setLoading(false))
  // }, []);

  // if (error) {
  //   return(<p>A network error has occured!</p>)
  // }
  // if (loading) {
  //   return(<p>Loading....</p>)
  // }
  if (!currentProduct) {
    return(<p>Item not found!</p>)
  }
  
  return(
    <div className="product">
      <h3>{currentProduct.title}</h3>
      <p className="price">{currentProduct.price}</p>
      <img src={currentProduct.image} />
      <p>{currentProduct.description}</p>
      <p>{currentProduct.category}</p>
      <p>Rating: {currentProduct.rating.rate} ({currentProduct.rating.count})</p>
    </div>)
}

export default Product