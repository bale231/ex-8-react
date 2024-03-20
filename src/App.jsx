import "./App.css";
import { Welcome } from "./Welcome";

function App() {
  return (
    <>
      <Welcome name={<strong>John</strong>} age={50} />
    </>
  );
}

export default App;
