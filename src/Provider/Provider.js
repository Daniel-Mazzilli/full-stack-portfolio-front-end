import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { coordinates } from "../Data/Coordinates.js";
import CompassRose from "../Assets/CompassRose.jpg";
import Suitcase from "../Assets/suitcase.png";

export const ContextData = createContext();
export function useContextProvider() {
  return useContext(ContextData);
}

export default function Provider({ children }) {
  const API = process.env.REACT_APP_API_URL;
  const [signin, setSignin] = useState({
    username: "",
    token: "",
    signedin: false,
  });
  const [trips, setTrips] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [visited, setVisited] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [trigger, setTrigger] = useState(1);

  let AUTH_TOKEN = signin.token;
  axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (signin.username) {
      axios
        .get(`${API}/users/${signin.username}/trips`)
        .then((res) => setTrips(res.data))
        .catch((error) => {
          console.log(error);
        });
    } else {
      setTrips([]);
    }
  }, [signin]);

  useEffect(() => {
    if (trips.length) {
      const countries = [...new Set(trips.map((e) => e.country))];
      setVisited(countries);
      const foundCoordinates = [];
      countries.map((country) =>
        coordinates.forEach((e) => {
          if (e.name === country) {
            foundCoordinates.push({
              name: e.name,
              coordinates: [+e.longitude, +e.latitude],
            });
          }
        })
      );
      setMarkers(foundCoordinates);
    }
  }, [trips]);

  return (
    <ContextData.Provider
      value={{
        API,
        axios,
        theme,
        setTheme,
        trigger,
        setTrigger,
        signin,
        setSignin,
        trips,
        setTrips,
        markers,
        visited,
      }}
    >
      <Nav />
      <img id="suitcase" src={Suitcase} alt="suitcase" />
      <img id="compass-rose" src={CompassRose} alt="compass rose" />
      <Footer />
      {children}
    </ContextData.Provider>
  );
}
