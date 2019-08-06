import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <ul className="nav">
      <img
        src="https://news.ycombinator.com/y18.gif"
        alt="logo for hackernews"
        className="avatar"
      />
      <p className="logo">Hacker News</p>
      <li>
        <NavLink exact to="/">
          top
        </NavLink>{" "}
        <span className="divider">|</span>
      </li>
      <li>
        <NavLink to="/new">new</NavLink> <span className="divider">|</span>
      </li>
      <li>
        <NavLink to="/ask">ask</NavLink> <span className="divider">|</span>
      </li>
      <li>
        <NavLink to="/show">show</NavLink> <span className="divider">|</span>
      </li>
      <li>jobs</li>
    </ul>
  );
}
export default Navbar;
