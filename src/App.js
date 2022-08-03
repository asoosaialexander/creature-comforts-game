import logo from "./logo.svg";
import "./App.css";
import ImprovementCard from "./components/ImprovementCard";
import { Resource } from "./shared/constants";

function App() {
  const details={
    comfort:2,
    title:"Wheelbarrow",
    cost:[
      Resource.Wood,
      Resource.Wood,
      Resource.Stone
    ],
    image: "",
    text:"Gain 1 Wheelbarrow token. Each turn you may send it with a worker to the Valley or River. That worker collects 1 extra Good."
  }
  return (
    <div className="App">
      <ImprovementCard cardDetails={details} />
    </div>
  );
}

export default App;
