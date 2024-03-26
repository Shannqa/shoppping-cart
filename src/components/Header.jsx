import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Header({ categories }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  
  
  return(
    <div className="header">
      {isMobile ? <MobileMenu /> : <BrowserMenu />}

        <ul className="menu-list">
         {categories.map((category, id) => (
            <li key={id}><Link to={"categories/" + category}>{category}</Link></li>
            ))}
        </ul>
      
    </div>
  )
}

function MobileMenu() {
  const menu = document.querySelector(".menu-list");

  function openMenu() {
    const menu = document.querySelector(".menu-list");
    menu.classList.toggle("visible");
  }
  
  // close menu
  document.addEventListener("click", (e) => {
    const header = document.querySelector(".header");
    const menu = document.querySelector(".menu-list");
    const menuBtn = document.querySelector(".mobile-menu-btn");

    if (!header.contains(e.target)) {
      menu.classList.remove("visible");
    }
  });

  return(
    <img src="../src/img/menu_FILL0_wght400_GRAD0_opsz24.svg" className="mobile-menu-btn" onClick={openMenu} />
  )
}

function BrowserMenu() {

  return(
    <div></div>
  )
}

export default Header