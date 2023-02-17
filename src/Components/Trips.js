import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import { Tooltip } from "react-tooltip";
import MapArea from "./MapArea.js";
import Add from "../Assets/add3.png";
import "./Trips.css";

export default function Trips() {
  const navigate = useNavigate();
  const { trips, signin } = useContextProvider();
  useEffect(() => {
    if (!signin.username) {
      navigate("/not-found");
    }
  }, []);
  return (
    <div className="trips-page">
      <div className="trips">
        <h2>Trips</h2>
        <Link to="new"><img id="add" src={Add} alt="add trip button" /></Link>
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
    </div>
  );
}
