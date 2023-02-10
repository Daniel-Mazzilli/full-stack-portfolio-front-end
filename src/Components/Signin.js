import { Link } from "react-router-dom";
import "./Signin.css";

export default function Signin() {
  return (
    <div id="sign-in">
      <form>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" required />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" required />
        <input id="sign-in-button"type="submit" value="SIGN-IN" />
      </form>
      <Link to="/sign-up">Create account</Link>
      <Link to="/recover">Recover account credentials</Link>
    </div>
  );
}
