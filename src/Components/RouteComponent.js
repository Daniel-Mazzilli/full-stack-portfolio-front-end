import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup.js";
import Signin from "./Signin.js";
import Trips from "./Trips.js";
import Trip from "./Trip.js";
import Home from "./Home.js";
import TripForm from "./TripForm.js";
import NotFound from "./NotFound.js";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="recover" element={<h2 style={{textAlign:"center", fontSize: "46px"}}>recovery page coming soon</h2>} />
        <Route path="trips">
          <Route index element={<Trips />} />
          <Route path="new" element={<TripForm />} />
          <Route path=":id">
            <Route index element={<Trip />} />
            <Route path="edit" element={<TripForm />} />
          </Route>
        </Route>
        <Route path="not-found" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
