import SelectCountry from "./SelectCountry.js";
import "./Signup.css"

export default function Signup() {
  return (
    <div className="sign-up">
      <h2>Create account</h2>
      <form className="sign-up-form">
        <label htmlFor="full-name">Full Name: </label>
        <input id="full-name" type="text" />
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" />
        <label htmlFor="username">Username: </label>
        <input id="username" type="text" placeholder="create your username" />
        <label htmlFor="home_country">Home Country:</label>
        <select id="home_country">
          <option value="">Select your home country</option>
          <SelectCountry />
        </select>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" placeholder="include a numeric value and special symbol" />
        <input id="sign-up-submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
