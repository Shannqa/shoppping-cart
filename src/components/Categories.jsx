import { useParams, Outlet } from 'react-router-dom';

function Categories({ categories }) {
  
  let cat = useParams();
  console.log(cat.category);
  return(
    <div className="categories">
      <Outlet />
      {/* {categories.map((category) => {
        <div>
          <img src="" />
          <p>{category}</p>
        </div>
      })} */}
      {/* <p>{cat.category}</p> */}
    </div>
  )
  
}

export default Categories