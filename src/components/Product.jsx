import { useParams } from 'react-router-dom';

function Product() {
  let productID = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + productID.id)
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
    <div className="product">
      <img src="" />
      
    
    </div>)
}

export default Product