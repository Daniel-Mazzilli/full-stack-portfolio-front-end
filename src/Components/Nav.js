import { Link } from "react-router-dom";
import logo from "../Assets/compass.png"
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <Link><img src={logo} alt="logo" height="80px"/></Link>
      <Link>Log-in</Link>
    </nav>
  );
}
