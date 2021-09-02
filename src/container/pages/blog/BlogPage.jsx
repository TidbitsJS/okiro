import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MdContent from "../../../components/content/MdContent";
import LatestPost from "../../../components/latestpost/LatestPost";
import Spinner from "../../../components/spinner/Spinner";
import { pageVariants } from "../../../animation/motion";
import SocialIcon from "../../../components/social/SocialIcon";
import { FaGithubAlt, FaInstagram, FaTwitter } from "react-icons/fa";
import postData from "../../../data/post/post";

import "./blogPage.css";

const BlogPage = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    let theArticle = postData.filter((post, index) => {
      if (post.id === id) {
        return post;
      } else return "";
    });

    setArticle(...theArticle);
  }, [id]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="okiro__blogpage"
    >
      {article ? (
        <>
          <LatestPost post={article} showAllTags={true} />
          <MdContent content={article.content} lock={article.member} />
          <div className="okiro__blogpage__social-links">
            <SocialIcon childIcon={<FaGithubAlt fontSize={25} />} />
            <SocialIcon childIcon={<FaTwitter fontSize={25} />} />
            <SocialIcon childIcon={<FaInstagram fontSize={25} />} />
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </motion.div>
  );
};

export default BlogPage;
