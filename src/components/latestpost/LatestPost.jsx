import React from "react";
import post11 from "../../assets/images/photo-11.jpeg";

import "./latestPost.css";

const LatestPost = () => {
  return (
    <div className="okiro__homepage__latest">
      <div className="okiro__hompage__previewPosts-title">
        <h2>Latest Posts</h2>

        <svg
          role="img"
          viewBox="0 0 136 24"
          xmlns="http://www.w3.org/2000/svg"
          className="okiro__hompage__previewPosts-zigzag"
        >
          <path d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"></path>
        </svg>
      </div>
      <div className="okiro__homepage__latest-img">
        <img src={post11} alt="latest-post" />
      </div>
      <div className="okiro__homepage__latest-content">
        <div className="okiro__post-tag">creative</div>
        <h2>I work best when my space is filled with inspiration</h2>
        <div className="okiro__homepage__latest-content_shortpara">
          <svg
            role="img"
            viewBox="0 0 136 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"></path>
          </svg>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut
            facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem
            mi libero accumsan....
          </p>
        </div>

        <div className="okiro__author">
          <div className="okiro__author-img">
            <img
              src="https://source.unsplash.com/1600x900/?child"
              alt="author"
            />
          </div>
          <div className="okiro__author-info">
            <h3>Victoria West</h3>
            <p>September 25, 2021 ∙ 3 minutes read </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
