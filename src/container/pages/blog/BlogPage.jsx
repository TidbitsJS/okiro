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
import NextPrePost from "../../../components/nextpre/NextPrePost";
import PreviewPosts from "../../../components/preview/PreviewPosts";

import "./blogPage.css";

const BlogPage = () => {
  const [article, setArticle] = useState(null);
  const [articleIndex, setArticleIndex] = useState(null);
  const { id } = useParams();
  let randomArticles = [];

  useEffect(() => {
    window.scrollTo(0, 0);

    let theArticle = postData.filter((post, index) => {
      if (post.id === id) {
        setArticleIndex(index);
        return post;
      } else return "";
    });

    setArticle(...theArticle);
  }, [id, articleIndex]);

  if (!article) {
    randomArticles = postData;
  } else {
    postData.forEach((post, index) => {
      if (
        index !== articleIndex &&
        index !== articleIndex - 1 &&
        index !== articleIndex + 1
      ) {
        randomArticles.push(post);
      }
    });
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="okiro__blogpage">
        {article && articleIndex !== null ? (
          <>
            <LatestPost post={article} showAllTags={true} />
            <MdContent
              content={article.content}
              lock={article.member}
              color={article.color}
            />
            <div className="okiro__blogpage__social-links">
              <SocialIcon childIcon={<FaGithubAlt fontSize={25} />} />
              <SocialIcon childIcon={<FaTwitter fontSize={25} />} />
              <SocialIcon childIcon={<FaInstagram fontSize={25} />} />
            </div>
            <div className="okiro__blogpage__nextpre">
              {articleIndex - 1 < 0 ? (
                <NextPrePost postType="" article={null} content="left" />
              ) : (
                <NextPrePost
                  postType="Older post"
                  article={postData[articleIndex - 1]}
                  content="left"
                />
              )}
              {articleIndex + 1 >= postData.length ? (
                <NextPrePost postType="" article={null} content="right" />
              ) : (
                <NextPrePost
                  postType="Newer post"
                  article={postData[articleIndex + 1]}
                  content="right"
                />
              )}
            </div>
          </>
        ) : article ? (
          <Spinner />
        ) : (
          <div className="okiro__blogpage-error">
            <div>
              <h2>Oops, an Error.</h2>
            </div>
          </div>
        )}
      </div>
      <div className="okiro__blogpage-seemorePosts">
        <PreviewPosts postData={randomArticles.slice(0, 4)} title="see more" />
      </div>
    </motion.div>
  );
};

export default BlogPage;
