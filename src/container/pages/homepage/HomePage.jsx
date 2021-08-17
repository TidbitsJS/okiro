import React from "react";
import LatestPost from "../../../components/latestpost/LatestPost";
import PreviewPosts from "../../../components/preview/PreviewPosts";
import postData from "../../../data/post/post";

import "./homePage.css";

const HomePage = () => {
  return (
    <div className="okiro__homepage">
      <PreviewPosts postData={postData.slice(0, 5)} title="featured" />
      <LatestPost />
      <PreviewPosts postData={postData.slice(5)} title="story" />
    </div>
  );
};

export default HomePage;
