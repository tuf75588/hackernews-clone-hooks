import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import Post from "./views/Post";
import User from "./views/User";
function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Posts type="top" />} />
          <Route path="/new" render={() => <Posts type="new" />} />
          <Route path="/post" component={Post} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
