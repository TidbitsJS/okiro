import { motion } from "framer-motion";
import React, { useEffect } from "react";
import notFoundImage from "../../assets/notFound.svg";
import { pageVariants } from "../../animation/motion";

import "./notFound.css";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="okiro__notFound"
    >
      <img src={notFoundImage} alt="notfound" />
      <h2>Hmm...</h2>
      <p>Either you are acting too Smart or too Naive</p>
    </motion.div>
  );
};

export default NotFound;
