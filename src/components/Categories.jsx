import { useParams, Outlet, useOutletContext } from 'react-router-dom';

function Categories({ categories }) {
  
  let cat = useParams();
  const [products, setProducts] = useOutletContext();
  console.log(cat.category);

  if (cat) {
    return(<Outlet context={[products, setProducts]}/>)
  }
  
  return(
    <div className="categories">
      {categories.map((category) => {
        <div>
          <img src="" />
          <p>{category}</p>
        </div>
      })} 
    </div>
  )
  
}

export default Categories