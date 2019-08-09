import React from "react";

// Individual Post component

function Post({ posts, loading, error }) {
  return (
    <ul className="post-list">
      {posts.map((post, i) => {
        const { title, id, by, time, url } = post;
        return (
          <li key={id} className="list-items">
            <div>
              <span style={i + 1 < 10 ? { paddingLeft: "10px" } : {}}>
                {i + 1}.
              </span>
              <img
                src={"https://news.ycombinator.com/grayarrow.gif"}
                alt={`upvote icon for ${post.title}`}
                className="upvote"
              />
              <span>{title}</span>
            </div>
            <div className="meta-info">new line</div>
          </li>
        );
      })}
    </ul>
  );
}
export default Post;
