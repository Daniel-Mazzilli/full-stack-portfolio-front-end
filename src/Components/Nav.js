import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import logo from "../Assets/globe4.gif";
import "./Nav.css";

export default function Nav() {
  const { signin } = useContextProvider();
  return (
    <nav>
      <img src={logo} alt="logo" height="140px" />
      <Link to="/">
        <h2>Travel the World</h2>
      </Link>
      <Link
        className="nav-link"
        to={signin.signedin && signin.username ? "/trips" : "/sign-in"}
      >
        {signin.signedin && signin.username ? signin.username : "Sign-in"}
      </Link>
    </nav>
  );
}
