import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import Map from "./Map.js";

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
    <div>
      <h1>Trips</h1>
      <Map />
      <ul>
        {trips.map((trip) => {
          return <li key={trip.id}>{trip.name}</li>;
        })}
      </ul>
    </div>
  );
}
