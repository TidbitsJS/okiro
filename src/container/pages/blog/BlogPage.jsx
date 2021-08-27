import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MdContent from "../../../components/content/MdContent";
import LatestPost from "../../../components/latestpost/LatestPost";
import Spinner from "../../../components/spinner/Spinner";
import { pageVariants } from "../../../animation/motion";
import SocialIcon from "../../../components/social/SocialIcon";
import { FaGithubAlt, FaInstagram, FaTwitter } from "react-icons/fa";

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
      <div className="okiro__blogpage__social-links">
        <SocialIcon childIcon={<FaGithubAlt fontSize={25} />} />
        <SocialIcon childIcon={<FaTwitter fontSize={25} />} />
        <SocialIcon childIcon={<FaInstagram fontSize={25} />} />
      </div>
    </motion.div>
  );
};

export default BlogPage;
