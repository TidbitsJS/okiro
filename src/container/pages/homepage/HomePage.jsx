import React from "react";
import ArticleCard from "../../../components/article/ArticleCard";
import LatestPost from "../../../components/latestpost/LatestPost";
import PreviewPosts from "../../../components/preview/PreviewPosts";
import Subscribe from "../../../components/subscribe/Subscribe";
import postData from "../../../data/post/post";

import "./homePage.css";

const HomePage = () => {
  return (
    <div className="okiro__homepage">
      <PreviewPosts postData={postData.slice(0, 5)} title="featured" />
      <LatestPost />
      <div className="okiro__homepage__show-articles">
        {postData.slice(4, 13).map((post, index) => (
          <ArticleCard postData={post} key={post.title + index * 2} />
        ))}
      </div>
      <PreviewPosts postData={postData.slice(12)} title="story" />
      <Subscribe />
    </div>
  );
};

export default HomePage;
