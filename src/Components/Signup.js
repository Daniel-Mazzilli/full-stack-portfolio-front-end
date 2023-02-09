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
  const [uniqueUsername, setUniqueUsername] = useState(false);
  const [uniqueEmail, setUniqueEmail] = useState(false);
  const [hideFormModal, setHideFormModal] = useState(true);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const toggleTerms = () => {
    setHideTerms(!hideTerms);
  };

  useEffect(() => {
    if (user.username !== "") {
      axios
        .get(`${API}/users/usernames/${user.username.toLowerCase()}`)
        .then((res) => setUniqueUsername(res.data.value))
        .catch((error) => console.log(error));
    } else {
      setUniqueUsername(false);
    }
  }, [user.username]);

  useEffect(() => {
    if (user.email !== "") {
      axios
        .get(`${API}/users/emails/${user.email.toLowerCase()}`)
        .then((res) => setUniqueEmail(res.data.value))
        .catch((error) => console.log(error));
    } else {
      setUniqueEmail(false);
    }
  }, [user.email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (uniqueEmail && uniqueUsername) {
      console.log("proceed");
    } else {
      setHideFormModal(false)
    }
  };

  return (
    <div className="sign-up">
      <h2>Create your account</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name:</label>
        <input
          id="full_name"
          type="text"
          onChange={handleChange}
          value={user.full_name}
          required
        />
        <label htmlFor="email">
          Email
          {user.email === "" ? null : uniqueEmail ? (
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
        <input
          className={`sign-up-submit ${
            uniqueEmail && uniqueUsername ? "proceed" : ""
          }`}
          type="submit"
          value="SUBMIT"
        />
      </form>
      {hideTerms ? (
        <></>
      ) : (
        <div className="modal">
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
      {hideFormModal ? (
        <></>
      ) : (
        <div className="modal">
          <p>Form Modal</p>
        </div>
      )}
    </div>
  );
}
