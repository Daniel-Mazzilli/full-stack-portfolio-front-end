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
    go_back: "",
    image: "no image",
    description: "",
  });

  useEffect(() => {
    if (id && !signin.username) {
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

  return (
    <div className="trip-form">
      <h2>Form</h2>
      <form>
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
        <label htmlFor="image">Photo to attach:</label>
        <input
          id="image"
          type="text"
          placeholder="type 'no image' for default placeholder img icon"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="description">Short trip description:</label>
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
      </form>
    </div>
  );
}
