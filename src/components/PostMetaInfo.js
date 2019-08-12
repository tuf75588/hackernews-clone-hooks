import React from "react";

import formatTime from "../utils/helpers";
import { Link } from "react-router-dom";

function PostMetaInfo({ by, score, descendants, time, id, url }) {
  return (
    <React.Fragment>
      <div className="meta-info">
        <span>
          {score} points by{" "}
          <Link
            to={{
              pathname: "/user",
              search: `?userId=${by}`
            }}
          >
            {by}
          </Link>{" "}
          on {formatTime(time)}{" "}
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
