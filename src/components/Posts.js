import React from "react";
import { fetchMainPosts } from "../utils/API";
function postReducer(state, action) {
  if (action.type === "fetch") {
    return {
      ...state,
      loading: action.loading,
      error: false
    };
  } else if (action.type === "success") {
    return {
      ...state,
      data: [...action.posts],
      loading: action.loading,
      error: action.error
    };
  }
}

function Posts({ type }) {
  const [state, dispatch] = React.useReducer(postReducer, {
    data: null,
    loading: true,
    error: false
  });
  React.useEffect(() => {
    dispatch({ type: "fetch", loading: true });
    fetchMainPosts(type).then((res) => {
      console.log(res);
      dispatch({ type: "success", posts: res, error: false, loading: false });
    });
  }, [type]);
  console.log(state);

  return (
    <div className="test">
      <h1>{state.loading && <h1>Loading..</h1>}</h1>
    </div>
  );
}

export default Posts;
