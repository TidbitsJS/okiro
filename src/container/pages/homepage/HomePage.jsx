import React, { useState } from "react";
import { motion } from "framer-motion";
import ArticleCard from "../../../components/article/ArticleCard";
import CustomButton from "../../../components/button/CustomButton";
import LatestPost from "../../../components/latestpost/LatestPost";
import PreviewPosts from "../../../components/preview/PreviewPosts";
import Subscribe from "../../../components/subscribe/Subscribe";
import postData from "../../../data/post/post";
import { pageVariants } from "../../../animation/motion";

import "./homePage.css";

const HomePage = () => {
  const [numberofArticle, showNumberOfArticle] = useState(11);

  const handleClick = () => {
    showNumberOfArticle((prev) => prev + 4);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="okiro__homepage"
    >
      <PreviewPosts postData={postData.slice(1, 6)} title="featured" />
      <LatestPost title="Latest Posts" post={postData[0]} showAllTags={false} />
      <div className="okiro__homepage__aritclesDiv">
        <div className="okiro__homepage__show-articles">
          {postData.slice(6, numberofArticle).map((post, index) => (
            <ArticleCard postData={post} key={post.title + index * 2} />
          ))}
        </div>
        {numberofArticle > postData.length ? null : (
          <CustomButton title="Load more" click={handleClick} />
        )}
      </div>
      <PreviewPosts postData={postData.slice(12)} title="story" />
      <Subscribe />
    </motion.div>
  );
};

export default HomePage;
