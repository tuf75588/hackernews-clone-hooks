import React from "react";
import queryString from "query-string";
import { fetchUser, fetchPosts } from "../utils/API";
import formatTime from "../utils/helpers";
import PostMetaInfo from "../components/PostMetaInfo";
import Title from "../components/Title";
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
  //by, score, descendants, time, id, url
  console.log(state);
  React.useEffect(() => {
    dispatch({ type: "fetch" });
    fetchUser(userId)
      .then((user) => {
        dispatch({ type: "user", user });
        const { submitted } = user;
        return fetchPosts(submitted.slice(0, 50) || []);
      })
      .then((posts) => {
        dispatch({ type: "posts", posts });
      })
      .catch((error) => {
        dispatch({ type: "error", message: error.message });
      });
  }, [userId]);
  const { user, posts, loadingPosts } = state;
  console.log(posts);
  return (
    <div>
      {state.loadingUser && <h1>Loading User...</h1>}
      {state.user && (
        <div className="user-container">
          <p>{user.id}</p>
          <p>joined {formatTime(user.created)}</p>
          <p dangerouslySetInnerHTML={{ __html: user.about }} />
        </div>
      )}

      {loadingPosts && (
        <h3 style={{ marginTop: "10px" }}>Fetching User Posts</h3>
      )}

      <ul className="userPosts">
        {state.posts && (
          <React.Fragment>
            <hr style={{ width: "25%", marginTop: "10px" }} />
            <h3 style={{ marginTop: "10px" }}>User Posts:</h3>
          </React.Fragment>
        )}

        {state.posts &&
          !loadingPosts &&
          posts.map((post) => {
            return (
              <li key={post.id}>
                <Title title={post.title} link={post.url} />
                <PostMetaInfo
                  by={post.by}
                  score={post.score}
                  descendants={post.descendants}
                  time={post.time}
                  url={post.url}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default User;
