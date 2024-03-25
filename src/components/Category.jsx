import React from "react";
import { useParams } from 'react-router-dom';
function Category() {
  let name = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + name.category)
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

  if (error) {
    return(<p>A network error has occured!</p>)
  }
  if (loading) {
    return(<p>Loading....</p>)
  }
  
  return(
    <div className="category">
      <h3>{name.category}</h3>
      <div className="products">
        {products.map(product => (<div key={product.id} className="product">
        <h4>{product.title}</h4>
        <p className="price">{product.price}</p>
        <img src={product.image} />
        <p>{product.description}</p>

        </div>))}
      </div>
    </div>
    )
}

export default Category