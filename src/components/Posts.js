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
  console.log(state.posts);
  const { posts } = state;
  return (
    <ul className="news-list">
      {posts &&
        posts.map((post, i) => {
          return (
            <li key={post.id}>
              <span className="title">{post.title}</span>
              <p>
                {post.score} points by {post.by} {post.time} hours ago |{" "}
                {post.descendants} comments
              </p>
            </li>
          );
        })}
    </ul>
  );
}

export default Posts;
