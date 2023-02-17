import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import { Tooltip } from "react-tooltip";
import MapArea from "./MapArea.js";
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
        <Tooltip id="my-tooltip" />
        <h2>Trips</h2>
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
