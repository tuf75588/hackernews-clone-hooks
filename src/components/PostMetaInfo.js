import React from "react";

function PostMetaInfo({ author, time, url, comments, score }) {
  return (
    <span>
      {score} points by {author} at time hours ago {comments} comments
    </span>
  );
}
export default PostMetaInfo;
