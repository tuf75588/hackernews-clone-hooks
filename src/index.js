import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact render={() => <Posts type="top" />} />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
