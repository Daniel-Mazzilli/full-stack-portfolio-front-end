import { Link } from "react-router-dom";
import logo from "../Assets/compass.png"
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" height="80px"/>
      <Link to="/"><h2>Travel the World</h2></Link>
      <Link className="nav-link" to="/sign-in">Sign-in</Link>
    </nav>
  );
}
