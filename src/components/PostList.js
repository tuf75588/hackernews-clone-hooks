import React from "react";
import PostMetaInfo from "./PostMetaInfo";
import Title from "./Title";

function PostList({ posts }) {
  return (
    <ul className="post-list">
      {posts.map((post, i) => {
        const { id, by, url, score, time, descendants, title } = post;
        return (
          <li key={id} className="list-items">
            <Title title={title} rank={i + 1} link={url} />
            <PostMetaInfo
              by={by}
              score={score}
              descendants={descendants}
              time={time}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default PostList;
