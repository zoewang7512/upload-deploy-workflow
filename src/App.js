import "./styles.css";
import workflow from "./workflow.png";

export default function App() {
  return (
    <div className="App">
      <h1>How to upload to Github & deploy</h1>
      <img src={workflow} style={{ height: "300px" }} alt="workflow" />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
