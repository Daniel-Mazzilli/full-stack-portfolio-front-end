import { useState, useEffect } from "react";
import { useContextProvider } from "../Provider/Provider.js";
import SelectCountry from "./SelectCountry.js";
import Check from "../Assets/check.png";
import xIcon from "../Assets/x-icon.png";
import "./Signup.css";

export default function Signup() {
  const { API, axios, users } = useContextProvider();
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    username: "",
    password: "",
    home_country: "",
  });
  const [hideTerms, setHideTerms] = useState(true);
  const [checked, setChecked] = useState(false);
  const [uniqueUsername, setUniqueUsername] = useState(true);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const toggleTerms = () => {
    setHideTerms(!hideTerms);
  };

  useEffect(() => {
    if (user.username !== "") {
      axios
        .get(`${API}/users/${user.username.toLowerCase()}`)
        .then((res) => setUniqueUsername(res.data.value))
        .catch((error) => console.log(error));
    } else {
      setUniqueUsername(true);
    }
  }, [user.username]);

  return (
    <div className="sign-up">
      <h2>Create your account</h2>
      <form className="sign-up-form">
        <label htmlFor="full_name">Full Name: </label>
        <input
          id="full_name"
          type="text"
          onChange={handleChange}
          value={user.full_name}
          required
        />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          value={user.email}
          required
        />
        <label htmlFor="username">
          Username
          {user.username === "" ? null : uniqueUsername ? (
            <span>
              <img src={Check} alt="checkmark" height="18px" />
            </span>
          ) : (
            <span>
              <img src={xIcon} alt="x icon" height="18px" />
            </span>
          )}
          :
        </label>
        <input
          id="username"
          type="text"
          placeholder="create your username"
          onChange={handleChange}
          value={user.username}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="include a numeric value and special symbol"
          onChange={handleChange}
          value={user.password}
          required
        />
        <label htmlFor="home_country">Home Country:</label>
        <select id="home_country" onChange={handleChange}>
          <option value="">Select your home country</option>
          <SelectCountry />
        </select>
        <label className="terms-conditions">
          Accept the
          <span onClick={toggleTerms}>terms & conditions</span>
        </label>
        <input
          id="terms"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          required
        />
        <input id="sign-up-submit" type="submit" value="SUBMIT" />
      </form>
      {hideTerms ? (
        <></>
      ) : (
        <div id="terms-text">
          <h3>Terms and conditions for use</h3>
          <p>
            You agree to pursue your passion and desire for adventures. Stay
            curious, and keep exploring the world one trip at a time!
          </p>
          <p> Embrace the journey</p>
          <button
            onClick={() => {
              toggleTerms();
              setChecked(true);
            }}
          >
            agree & close
          </button>
        </div>
      )}
    </div>
  );
}
