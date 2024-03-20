import React from "react";
import { useParams } from 'react-router-dom';
function Category() {
  let cat = useParams();
  
  return(
    <div className="category">
      {cat.category}
    </div>
    )
}

export default Category