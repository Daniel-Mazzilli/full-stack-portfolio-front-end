import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import CompassRose from "../Assets/CompassRose.jpg"

export const ContextData = createContext();
export function useContextProvider() {
  return useContext(ContextData);
}

export default function Provider({ children }) {
  const API = process.env.REACT_APP_API_URL;
  const [users, setUsers] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [trigger, setTrigger] = useState(1);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <ContextData.Provider
      value={{
        API,
        axios,
        users,
        setUsers,
        theme,
        setTheme,
        trigger,
        setTrigger,
      }}
    >
      <Nav />
      <img id="compass-rose" src={CompassRose} alt="compass rose" />
      <Footer />
      {children}
    </ContextData.Provider>
  );
}
