import React from "react";

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
        top <span className="divider">|</span>
      </li>
      <li>
        new <span className="divider">|</span>
      </li>
      <li>
        ask <span className="divider">|</span>
      </li>
      <li>
        show <span className="divider">|</span>
      </li>
      <li>jobs</li>
    </ul>
  );
}
export default Navbar;
