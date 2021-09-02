import React from "react";
import { Link } from "react-router-dom";

import "./nextPrePost.css";

const NextPrePost = ({ postType, article, content }) => {
  if (article) {
    return (
      <Link to={`/article/${article.id}`}>
        <div
          className="okiro__nextPrePost"
          style={{ flexDirection: content === "right" ? "row-reverse" : "" }}
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
    <div
      className="okiro__nextPrePost"
      style={{ flexDirection: content === "right" ? "row-reverse" : "" }}
    >
      <div className="okiro__nextPrePost_img">
        <img
          src="https://source.unsplash.com/1600x900/?travel"
          alt="nextprepost"
        />
      </div>
      <div
        className="okiro__nextPrePost_content"
        style={{ textAlign: content === "right" ? "end" : "" }}
      >
        <p>{postType}</p>
        <h2>{article.title}</h2>
      </div>
    </div>
  );
};

export default NextPrePost;
