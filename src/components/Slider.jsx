import { Link } from "react";
import styles from "./Slider.module.css";

function Slider() {
  
  return(
    <div className="slider">
      <div className="slide">
        <h3>International Women's Day</h3>
        <p>All jewelery 15% off with the code "WOMAN".</p>
        <Link to="./categories/jewelery">Browse jewelery</Link>
        <img src="#" />
      </div>
      <div className="slide">
        <h3>Placeholder</h3>
        <p>Lorem ipsum sialala!</p>
        <img src="#" />
      </div>
      <div className="slide">
        <h3>Placeholder</h3>
        <p>Lorem ipsum sialala!</p>
        <img src="#" />
      </div>
    </div>
  )
  
}

