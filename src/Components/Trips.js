import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import MapArea from "./MapArea.js"
import MapSection from "./MapSection";
import "./Trips.css";


export default function Trips() {
  const navigate = useNavigate();
  const { axios, API, signin } = useContextProvider();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/users/${signin.username}/trips`)
      .then((res) => setTrips(res.data))
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }, []);
  return (
    <div className="trips-page">
      <div className="trips">
        <h1>Trips</h1>
        <ul>
          {trips.map((trip) => {
            return <li key={trip.id}><Link to={`/trips/${trip.id}`}>{trip.name}</Link></li>;
          })}
        </ul>
      </div>
      {/* <MapArea /> */}
      <MapSection />
    </div>
  );
}
