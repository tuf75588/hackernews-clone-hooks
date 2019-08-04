import React from "react";

function NewsItem({ time, title, by, href, createdAt }) {
  return (
    <li className="container">
      <p>{title}</p>
    </li>
  );
}

export default NewsItem;
