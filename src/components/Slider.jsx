import { Link } from "react-router-dom";
import salesData from "../data/sales.json";
import styles from "./Slider.module.css";

function Slider() {
  const data = salesData;
  
  return(
    <div className="slider">
      {data.map((slide) => (
        <div className="slide" key={slide.id}>
          <h3>{slide.title}</h3>
          <p>{slide.desc}</p>
          <Link to={slide.url}>{slide.urlText}</Link>
        </div>
      ))}
    </div>
  )
  
}

export default Slider