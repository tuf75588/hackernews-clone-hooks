import React from "react";
import Title from "./Title";
import formatTime from "../utils/helpers";
function PostMetaInfo({ posts, loading, error }) {
  return (
    <ul className="post-list">
      {posts.map((post, i) => {
        const { title, id, by, time, url, score } = post;

        return (
          <li key={id} className="list-items">
            <div>
              <Title title={title} rank={i + 1} link={url} />
              <div className="meta-info">
                <span>
                  {score} points by {by} on {formatTime(time)}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export default PostMetaInfo;
