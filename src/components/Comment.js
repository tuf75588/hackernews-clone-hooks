import React from "react";
import formatTime from "../utils/helpers";
import { fetchComments } from "../utils/API";

function Comment({ text, user, time, kids, comments }) {
  const [commentReplies, setReplies] = React.useState([]);

  return (
    <div className="comment" style={{ border: "1px solid black" }}>
      <p>
        {user} at {formatTime(time)}
      </p>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
export default Comment;
