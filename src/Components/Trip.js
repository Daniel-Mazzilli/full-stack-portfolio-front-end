import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import "./Trip.css";

export default function Trip() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { axios, API, signin } = useContextProvider();
  const [trip, setTrip] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/users/${signin.username}/trips/${id}`)
      .then((res) => setTrip(res.data))
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }, [id]);
  return (
    <div className="trip">
      <h2>{trip.name}</h2>
      <p>{trip.description}</p>
      <p>
        Country: <span>{trip.country}</span>
      </p>
    </div>
  );
}
