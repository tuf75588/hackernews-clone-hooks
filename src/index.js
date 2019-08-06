import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Views/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
