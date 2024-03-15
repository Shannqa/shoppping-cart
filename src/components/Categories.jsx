function Categories({ categories }) {
  
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