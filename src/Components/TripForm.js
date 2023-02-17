import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider.js";
import SelectCountry from "./SelectCountry.js";
import "./TripForm.css";

export default function TripForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { API, axios, setTrigger, trigger, signin } = useContextProvider();
  const [formData, setFormData] = useState({
    name: "",
    circa: "",
    country: "",
    go_back: false,
    image: "",
    description: "",
  });

  useEffect(() => {
    if (!signin.username) {
      navigate("/not-found");
    }
    if (id) {
      axios
        .get(`${API}/users/${signin.username}/trips/${id}`)
        .then((res) => setFormData(res.data))
        .catch((error) => console.log(error));
    }
  }, [id]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      axios
        .put(`${API}/users/${signin.username}/trips/${id}`, formData)
        .then(() => {
          setTrigger(-trigger);
          navigate("/trips");
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post(`${API}/users/${signin.username}/trips`, formData)
        .then(() => {
          setTrigger(-trigger);
          navigate("/trips");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="trip-form">
      <h2>{id ? "Edit Trip" : "Add a trip"}</h2>
      <form className="form-for-trip" onSubmit={handleSubmit}>
        <label htmlFor="name">Entry title:</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="circa">When:</label>
        <input
          id="circa"
          type="text"
          value={formData.circa}
          onChange={handleChange}
          required
        />
        <label htmlFor="image">Attach photo:</label>
        <input
          id="image"
          type="text"
          placeholder="img url || 'no image' for default icon"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="description">Short description:</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="country">Country visited:</label>
        <select
          id="country"
          onChange={handleChange}
          value={formData.country}
          required
        >
          <option value="">Select the country visited</option>
          <SelectCountry />
        </select>
        <label htmlFor="go_back">Excited to return:</label>
        <input
          id="go_back"
          type="checkbox"
          checked={formData.go_back}
          onChange={() =>
            setFormData({ ...formData, go_back: !formData.go_back })
          }
        />
        <input
          id="trip-submit"
          type="submit"
          value={id ? "submit changes" : "add trip"}
        />
      </form>
    </div>
  );
}
