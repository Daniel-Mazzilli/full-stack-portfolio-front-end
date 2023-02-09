import { useContextProvider } from "./Provider/Provider.js";
import RouteComponent from "./Components/RouteComponent.js";
// import "./App.css";

function App() {
  const { theme } = useContextProvider();
  return (
    <div className={`App ${theme}`}>
      <RouteComponent />
    </div>
  );
}

export default App;
