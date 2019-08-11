import React from "react";
import queryString from "query-string";
import { fetchComments, fetchItem } from "../utils/API";
import Comment from "../components/Comment";
import Title from "../components/Title";
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
    <ul className="comments-section">
      <div style={{ marginTop: "1em" }}>
        {state.post && <Title title={state.post.title} link={state.post.url} />}
      </div>
      <div style={{ marginTop: "1em" }}>
        {comments &&
          comments.map((comment, i) => {
            const { by, id, text, time, kids } = comment;
            return (
              <li key={id}>
                <Comment text={text} user={by} time={time} comments={comment} />
              </li>
            );
          })}
      </div>
    </ul>
  );
}
export default Post;
