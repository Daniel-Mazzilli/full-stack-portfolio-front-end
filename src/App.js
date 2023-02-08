import { useContextProvider } from "./Provider/Provider.js";
import RouteComponent from "./Components/RouteComponent.js";
import Signup from "./Components/Signup.js"
// import "./App.css";

function App() {
  const { theme } = useContextProvider();
  return (
    <div className={`App ${theme}`}>
      <RouteComponent />
      <Signup />
    </div>
  );
}

export default App;
