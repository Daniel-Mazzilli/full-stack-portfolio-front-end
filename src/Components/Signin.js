import { useState } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider";
import "./Signin.css";

export default function Signin() {
  const { axios, API } = useContextProvider();
  const [failedModal, setFailedModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    axios
      .post(`${API}/users/auth/signin`, { username, password })
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
        setFailedModal(true);
      });
  };
  return (
    <div id="sign-in">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" required />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" required />
        <input id="sign-in-button" type="submit" value="SIGN-IN" />
      </form>
      <Link to="/sign-up">Create account</Link>
      <Link to="/recover">Recover account credentials</Link>
      {failedModal && (
        <div className="overlay">
          <div className="modal">
            <button id="x" onClick={() => setFailedModal(false)}>
              X
            </button>
            <p>Sign-in failed. Incorrect username and/or password</p>
          </div>
        </div>
      )}
    </div>
  );
}
