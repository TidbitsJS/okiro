import React from "react";
import PreviewPosts from "../../../components/preview/PreviewPosts";
import postData from "../../../data/post/post";

import "./homePage.css";

const HomePage = () => {
  return (
    <div className="okiro__homepage">
      <PreviewPosts postData={postData.slice(0, 5)} title="featured" />
      <PreviewPosts postData={postData.slice(6)} title="story" />
    </div>
  );
};

export default HomePage;
