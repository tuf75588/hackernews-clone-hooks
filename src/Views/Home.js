import React from "react";
import Navbar from "../components/Navbar";
import { fetchMainPosts } from "../utils/API";
import NewsItem from "../components/NewsItem";
function Home(props) {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    fetchMainPosts("top").then((res) => {
      setPosts(res);
      setLoading(false);
    });
  }, [setPosts]);
  console.log(posts);
  return (
    <div>
      <Navbar />
      {loading && <h3>Fetching stories...</h3>}
      <ul>
        {posts &&
          posts.map(({ by, title, url, type, time }) => (
            <NewsItem
              title={title}
              user={by}
              createdAt={time}
              href={url}
              type={type}
            />
          ))}
      </ul>
    </div>
  );
}

export default Home;
