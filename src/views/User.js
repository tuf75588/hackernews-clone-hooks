import React from "react";
import queryString from "query-string";
import { fetchUser, fetchPosts } from "../utils/API";
import formatTime from "../utils/helpers";
function userReducer(state, action) {
  const { type } = action;
  if (type === "fetch") {
    return {
      ...state,
      loadingUser: true,
      loadingPosts: true
    };
  } else if (type === "user") {
    return {
      ...state,
      user: action.user,
      loadingUser: false
    };
  } else if (type === "posts") {
    return {
      ...state,
      posts: action.posts,
      loadingPosts: false
    };
  } else if (type === "error") {
    return {
      ...state,
      loadingUser: false,
      loadingPosts: false,
      error: action.message
    };
  } else {
    throw new Error("Action type not recognized, please try again.");
  }
}

const initialState = {
  loadingUser: false,
  user: null,
  posts: null,
  loadingPosts: null,
  error: null
};

function User({ location }) {
  const { userId } = queryString.parse(location.search);
  const [state, dispatch] = React.useReducer(userReducer, initialState);
  console.log(state);
  React.useEffect(() => {
    dispatch({ type: "fetch" });
    fetchUser(userId)
      .then((user) => {
        dispatch({ type: "user", user });
        const { submitted } = user;
        return fetchPosts(submitted.slice(0, 50));
      })
      .then((posts) => {
        dispatch({ type: "posts", posts });
      })
      .catch((error) => {
        dispatch({ type: "error", message: error.message });
      });
  }, [userId]);
  const { user } = state;
  return (
    <div>
      {state.loadingUser && <h1>Loading User...</h1>}
      {state.user && (
        <div className="user-container">
          <p>{user.id}</p>
          <p>joined {formatTime(user.created)}</p>
          <p>{user.about}</p>
        </div>
      )}
    </div>
  );
}
export default User;
