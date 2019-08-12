import React from "react";
import formatTime from "../utils/helpers";
import { fetchComments } from "../utils/API";
import { Link } from "react-router-dom";
function Comment({ text, user, time, kids, comments }) {
  return (
    <div className="comment">
      <p className="comment-user">
        <Link to={{ pathname: "/user", search: `?userId=${user}` }}>
          {user}
        </Link>{" "}
        at {formatTime(time)}{" "}
      </p>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
export default Comment;
