import React from "react";
import PostCard from "../../../components/postcard/PostCard";
import postData from "../../../data/post/post";

import "./homePage.css";

const HomePage = () => {
  return (
    <div className="okiro__homepage">
      <div className="okiro__homepage__featured">
        <div className="okiro__hompage__featured-title">
          <h2>Featured</h2>
        </div>
        <div className="okiro__homepage__featured-posts">
          {postData.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
