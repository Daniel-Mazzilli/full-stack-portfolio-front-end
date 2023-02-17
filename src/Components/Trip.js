import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import Noimage from "../Assets/no-image.png";
import Delete from "../Assets/delete.png";
import Edit from "../Assets/edit.png";
import Back from "../Assets/back.png";
import "./Trip.css";

export default function Trip() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { axios, API, signin, setTrigger, trigger } = useContextProvider();
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

  const handleDelete = () => {
    axios
      .delete(`${API}/users/${signin.username}/trips/${id}`)
      .then(() => {
        setTrigger(-trigger);
        navigate("/trips");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="trip-page">
      <div className="trip">
        <h2>{trip.name}</h2>
        <div className="img-box">
          <img
            className={trip.image !== "no image" ? "has-img" : "no-img"}
            src={trip.image !== "no image" ? trip.image : Noimage}
            width="24vw"
            alt="trip image"
          />
        </div>
        <p id="date">{trip.circa}</p>
        <p>{trip.description}</p>
        <p>
          Country: <span>{trip.country}</span>
        </p>
      </div>
      <div className="buttons">
        <Link to="/trips">
          <img src={Back} alt="back icon" />
        </Link>
        <Link to="edit">
          <img src={Edit} alt="edit icon" />
        </Link>
        <img
          onClick={handleDelete}
          id="remove"
          src={Delete}
          alt="delete icon"
        />
      </div>
    </div>
  );
}
