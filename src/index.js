import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Views/Home";
function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
