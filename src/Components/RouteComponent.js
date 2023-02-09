import { Routes, Route, Navigate } from "react-router-dom";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/not-found" element={<h2>Page Not Found</h2>} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
