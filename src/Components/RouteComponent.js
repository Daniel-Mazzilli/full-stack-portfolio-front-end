import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup.js";
import Signin from "./Signin.js";
import Trips from "./Trips.js";
import Trip from "./Trip.js";
import Home from "./Home.js";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="recover" element={<h2>Recover Page</h2>} />
        <Route path="trips">
          <Route index element={<Trips />} />
          <Route path=":id" element={<Trip />} />
        </Route>
        <Route path="not-found" element={<h2>Page Not Found</h2>} />
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
