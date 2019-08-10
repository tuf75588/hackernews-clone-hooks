import React from "react";
import { fetchMainPosts } from "../utils/API";
import PostMetaInfo from "./PostMetaInfo";

function postsReducer(state, action) {
  if (action.type === "fetch") {
    return {
      posts: null,
      loading: true,
      error: null
    };
  } else if (action.type === "success") {
    return {
      posts: action.posts,
      loading: false,
      error: null
    };
  } else if (action.type === "error") {
    return {
      posts: null,
      loading: false,
      error: action.message
    };
  } else {
    throw new Error("Action type not recognized");
  }
}

function Posts({ type }) {
  const [state, dispatch] = React.useReducer(postsReducer, {
    posts: null,
    loading: true,
    error: false
  });
  React.useEffect(() => {
    dispatch({ type: "fetch" });
    fetchMainPosts(type)
      .then((res) => {
        dispatch({ type: "success", posts: res });
      })
      .catch((err) => {
        dispatch({ type: "error", message: err.message });
      });
  }, [type]);

  return (
    <div className="test">
      {state.loading && <h1>Loading..</h1>}

      <div>
        {state.error && <p style={{ textAlign: "center" }}>{state.error}</p>}
        {state.posts && (
          <PostMetaInfo
            posts={state.posts}
            loading={state.loading}
            error={state.error}
          />
        )}
      </div>
    </div>
  );
}

export default Posts;
