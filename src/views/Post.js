import React from "react";
import queryString from "query-string";
import { fetchComments, fetchItem } from "../utils/API";

function postReducer(state, action) {
  //do some stuff
  if (action.type === "fetch") {
    return {
      ...state,
      loadingComments: true,
      loadingPost: true
    };
  } else if (action.type === "post") {
    return {
      ...state,
      loadingPost: false,
      post: action.post
    };
  } else if (action.type === "comments") {
    return {
      ...state,
      loadingComments: false,
      comments: action.comments
    };
  } else if (action.type === "error") {
    return {
      ...state,
      loading: false,
      error: action.message
    };
  } else {
    throw new Error("Action type not recognized, please try again.");
  }
}

function Post(props) {
  const [state, dispatch] = React.useReducer(postReducer, {
    post: null,
    loadingPost: true,
    comments: null,
    loadingComments: true,
    error: null
  });
  const { comments } = state;
  //! each post will have a unique identifier in the query string for each article
  const { id } = queryString.parse(props.location.search);
  React.useEffect(() => {
    dispatch({ type: "fetch" });
    fetchItem(id)
      .then((post) => {
        dispatch({ type: "post", post });
        return fetchComments(post.kids || []);
      })
      .then((comments) => {
        dispatch({ type: "comments", comments });
      })
      .catch((error) => {
        dispatch({ type: "error", message: error.message });
      });
  }, [id]);

  return (
    <div className="comments-section">
      {comments &&
        comments.map((comment, i) => {
          console.log(comment);
          return <li key={comment.id}>{comment.by}</li>;
        })}
    </div>
  );
}
export default Post;
