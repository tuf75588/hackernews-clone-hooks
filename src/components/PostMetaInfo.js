import React from "react";
import Title from "./Title";
import formatTime from "../utils/helpers";
import { Link } from "react-router-dom";
function PostMetaInfo({ by, score, descendants, time, id }) {
  return (
    <React.Fragment>
      <div className="meta-info">
        <span>
          {score} points by {by} on {formatTime(time)}{" "}
          <Link
            to={{
              pathname: "/post",
              search: `?id=${id}`
            }}
            className="postLink"
          >
            {descendants} comments
          </Link>
        </span>
      </div>
    </React.Fragment>
  );
}
export default PostMetaInfo;
