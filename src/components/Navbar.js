import React from "react";

function Navbar() {
  return (
    <ul className="nav">
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
