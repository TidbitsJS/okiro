import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageVariants } from "../../../animation/motion";
import SeeAlso from "../../../components/seealso/SeeAlso";

import "./tagPage.css";

const TagPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const uniqueTagsLength = window.uniqueTags.length;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="okiro__tagpage"
    >
      <div className="okiro__homepage__previewPosts">
        <div className="okiro__hompage__previewPosts-title">
          <h2>Tags</h2>

          <svg
            role="img"
            viewBox="0 0 136 24"
            xmlns="http://www.w3.org/2000/svg"
            className="okiro__hompage__previewPosts-zigzag"
          >
            <path d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"></path>
          </svg>
        </div>
        <div className="okiro__homepage__previewPosts-posts">
          {window.uniqueTags
            .slice(0, uniqueTagsLength - 1)
            .map((tag, index) => (
              <div className="okiro__post-card" key={tag.tagName + index}>
                <Link to={`/tag/${tag.tagName}`}>
                  <div className="okiro__post-card__image">
                    <img src={tag.tagUrl} alt="post-card" />
                  </div>
                  <div className="okiro__post-card__content">
                    <h3>{tag.tagName}</h3>
                    <p>{tag.total} posts</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <SeeAlso
        url={window.uniqueTags[uniqueTagsLength - 1].tagUrl}
        name={window.uniqueTags[uniqueTagsLength - 1].tagName}
        link="/tag"
      />
    </motion.div>
  );
};

export default TagPage;
