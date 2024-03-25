import { useParams, Outlet } from 'react-router-dom';

function Categories({ categories }) {
  
  let cat = useParams();
  console.log(cat.category);
  
  if (cat) {
    return(<Outlet />)
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