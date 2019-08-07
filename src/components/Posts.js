import React from "react";
import { fetchMainPosts } from "../utils/API";
function postReducer(state, action) {
  if (action.type === "fetch") {
    return {
      ...state,
      posts: [...action.posts]
    };
  } else if (action.type === "sucess") {
    return {
      posts: "hey"
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
    fetchMainPosts(type).then((res) => {
      dispatch({ type: "fetch", posts: res });
    });
  }, [type]);
  console.log(state);
  return <ul className="news-list">h</ul>;
}

export default Posts;
