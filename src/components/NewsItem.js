import React from "react";

function NewsItem({ posts }) {
  console.log(posts);
  return (
    <ul className="news-list">
      {posts.map((post, i) => (
        <li className="meta">
          <span className="title">{post.title}</span>
          <p>
            {post.score} points by {post.by}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default NewsItem;
