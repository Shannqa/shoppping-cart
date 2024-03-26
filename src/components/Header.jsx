import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Header({ categories }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  
  
  return(
    <div className="header">
      {isMobile ? <MobileMenu /> : <BrowserMenu />}

        <ul>
         {categories.map((category, id) => (
            <li key={id}><Link to={"categories/" + category}>{category}</Link></li>
            ))}
        </ul>
      
    </div>
  )
}

function MobileMenu() {
  
  function openMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.add("visible");
  }
  
  return(
    <img src="../img/menu_FILL0_wght400_GRAD0_opsz24.svg" onClick={openMenu} />
  )
}

function BrowserMenu() {
  
}