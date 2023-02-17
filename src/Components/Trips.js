import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import MapArea from "./MapArea.js";
import Add from "../Assets/add3.png";
import "./Trips.css";
import "./Tooltip.css";

export default function Trips() {
  const navigate = useNavigate();
  const { trips, signin, visited } = useContextProvider();
  useEffect(() => {
    if (!signin.username) {
      navigate("/not-found");
    }
  }, []);
  return (
    <div className="trips-page">
      <div className="trips">
        <h2>Trips</h2>
        <div class="tooltip">
          <Link to="new">
            <img
              id="add"
              data-tooltip="add new trip"
              src={Add}
              alt="add trip button"
            />
          </Link>
          <span class="tooltiptext">new trip</span>
        </div>
        <ul>
          {trips.map((trip) => {
            return (
              <li key={trip.id}>
                <Link to={`/trips/${trip.id}`}>{trip.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <MapArea />
      <div id="stats">
        <h2>You have traveled to <span>{visited.length}</span> countries.</h2>
        <p>Visited countries are filled with a bright red. A marker is also placed.</p>
        <h2>Future travels list coming soon</h2>
        <ul>
          <li>
          </li>
          <li>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
  );
}
