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
  }, []);
  console.log(posts);
  return (
    <div>
      <Navbar />
      {loading && <h3>Fetching stories...</h3>}
      {posts && <NewsItem posts={posts} />}
    </div>
  );
}

export default Home;
