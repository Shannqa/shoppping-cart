import { Link } from "react-router-dom";

function Footer() {
  
  return(
    <div className="footer">
      <ul>
        <li><Link to={"/placeholder"}>Terms and conditions</Link></li>
        <li><Link to={"/placeholder"}>Privacy policy</Link></li>
      </ul>
    </div>
  )
}

export default Footer