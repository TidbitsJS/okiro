import React from "react";
import { Link } from "react-router-dom";

import "./nextPrePost.css";

const NextPrePost = ({ postType, article, content }) => {
  if (article) {
    return (
      <Link
        to={`/article/${article.id}`}
        className={content === "right" ? "alignStyles" : ""}
      >
        <div
          className={
            content === "right"
              ? "okiro__nextPrePost flexDirectionStyles"
              : "okiro__nextPrePost"
          }
        >
          <div className="okiro__nextPrePost_img">
            <img src={article.url} alt="nextprepost" />
          </div>
          <div
            className="okiro__nextPrePost_content"
            style={{ textAlign: content === "right" ? "end" : "" }}
          >
            <p>{postType}</p>
            <h2>{article.title}</h2>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div className="okiro__nextPrePost" style={{ display: "none" }}>
      <div className="okiro__nextPrePost_img">
        <img
          src="https://source.unsplash.com/1600x900/?travel"
          alt="nextprepost"
        />
      </div>
      <div className="okiro__nextPrePost_content">
        <p>{postType}</p>
        <h2>Title goes here</h2>
      </div>
    </div>
  );
};

export default NextPrePost;
