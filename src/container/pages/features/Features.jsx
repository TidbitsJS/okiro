import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../../animation/motion";

import "./features.css";

const Features = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="okiro__features"
    >
      <h1>Features</h1>
      <div className="okiro__features_content">
        <h3>
          Okiro is a Ghost theme with a sleek and modern design. The unique
          character of Okiro will help you easily create a beautiful
          publication.
        </h3>

        <svg role="img" viewBox="0 0 136 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"></path>
        </svg>

        <h2>General</h2>
        <ul>
          <li>Clean design</li>
          <li>Lightweight and minimal</li>
          <li>Super fast</li>
          <li>Fully responsive</li>
          <li>Compatible with modern browsers</li>
        </ul>

        <h2>Programming</h2>
        <ul>
          <li>Clean Code</li>
          <li>Developed in ReactJS</li>
          <li>React Motion animations</li>
          <li>No extra CSS Frameworks</li>
          <li>Markdown blog</li>
          <li>Advance Routing</li>
        </ul>

        <div className="okiro__features_content-credits">
          <h2>Credits</h2>
          <p>
            All photos used in the theme demo are from <span>Unsplash</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
