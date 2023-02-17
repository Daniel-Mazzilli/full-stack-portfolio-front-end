import { useNavigate } from "react-router-dom";
import Polizia from "../Assets/polizia-milano.jpeg";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="overlay">
      <div id="not-found">
        <h2>404</h2>
        <div id="img-container">
          <img src={Polizia} alt="not found page image" />
        </div>
        <p>Invalid url. May requrie sign-in for access</p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
