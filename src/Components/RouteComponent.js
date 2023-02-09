import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup.js";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<h1>Home</h1>} />
        <Route path="sign-in" element={<h2>Sign in page</h2>} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="not-found" element={<h2>Page Not Found</h2>} />
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
