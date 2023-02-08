export default function Signup() {
  return (
    <div className="sign-up">
      <h2>Create account</h2>
      <form className="sign-up">
        <label htmlFor="full-name">Full Name: </label>
        <input id="full-name" type="text" />
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" />
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" />

      </form>
    </div>
  );
}
