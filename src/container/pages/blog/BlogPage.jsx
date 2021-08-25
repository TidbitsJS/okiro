import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MdContent from "../../../components/content/MdContent";
import LatestPost from "../../../components/latestpost/LatestPost";
import Spinner from "../../../components/spinner/Spinner";
import { pageVariants } from "../../../animation/motion";
import "./blogPage.css";

const BlogPage = () => {
  const [mdText, setMdText] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(state.content)
      .then((response) => response.text())
      .then((text) => setMdText(text));
  });

  console.log("total articles", window.totalArticles);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="okiro__blogpage"
    >
      <LatestPost post={state} showAllTags={true} />
      {mdText ? <MdContent mdText={mdText} /> : <Spinner />}
    </motion.div>
  );
};

export default BlogPage;
