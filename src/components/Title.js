import React from "react";
const upvoteIcon = "https://news.ycombinator.com/grayarrow.gif";

// component rendering the title for every post on hacker news.
function Title({ title, rank, link }) {
  return (
    <div>
      <span style={rank < 10 ? { paddingLeft: "10px" } : {}}>{rank}.</span>
      <img
        src={upvoteIcon}
        alt={`upvote carat for ${title} story`}
        className="upvote"
      />
      <span className="header">
        <a href={link}>{title}</a>
      </span>
    </div>
  );
}

export default Title;
