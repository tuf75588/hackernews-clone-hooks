import React from "react";

// component rendering the title for every post on hacker news.
function Title({ title, link }) {
  return (
    <div>
      <span className="header">
        <a href={link}>{title}</a>
      </span>
    </div>
  );
}

export default Title;
