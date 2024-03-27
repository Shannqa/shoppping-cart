import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Header({ categories, userCart, setUserCart }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return(
    <div className="header">
      {isMobile ? <MobileMenu userCart={userCart} /> : <BrowserMenu userCart={userCart} />}
    </div>
  )
}

function MobileMenu({ inCart }) {
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
    <div className="mobile-menu">
      <img src="../src/img/menu_FILL0_wght400_GRAD0_opsz24.svg" className="mobile-menu-btn" onClick={openMenu} />
      <h1>Menu</h1>
      <h2><Link to={"/"}>Home</Link></h2>
      <h2>Categories</h2>
      <ul class="menu-list">
        {categories.map((category, id) => (
          <li key={id}>
            <Link to={"categories/" + category}>{category}</Link>
          </li>
        ))}
      </ul>
      <h2><Link to={"/placeholder"}>Account</Link></h2>
      <h2><Link to={"/placeholder"}>Your cart</Link></h2>
      <h2><Link to={"/placeholder"}>Site info</Link></h2>
      <MenuCart inCart={inCart} />
    </div>
  )
}

function BrowserMenu({ inCart }) {

  return(
    <div className="browser-menu">
      <Link to={"/"} className="logo">
        <img src="../src/img/storefront_FILL0_wght400_GRAD0_opsz24.svg" />
        <span>Curious Curiosities</span>
      </Link>
      <div class="dropdown-container">
        <div class="menu-label">Categories</div>
        <ul class="menu-list">
          {categories.map((category, id) => (
            <li key={id}>
              <Link to={"categories/" + category}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img src="person_FILL0_wght400_GRAD0_opsz24.svg" />
      </div>
      <MenuCart inCart={ inCart }/>
    </div>
  )
}

export default Header