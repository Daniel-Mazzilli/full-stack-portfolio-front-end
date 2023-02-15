import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup.js";
import Signin from "./Signin.js";
import Trips from "./Trips.js";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<h1>Home</h1>} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="recover" element={<h2>Recover Page</h2>} />
        <Route path="trips" element={<Trips />} />
        <Route path="not-found" element={<h2>Page Not Found</h2>} />
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
