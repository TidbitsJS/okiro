import React from "react";

import "./postCard.css";

const PostCard = ({ post: { title, url, authors, color } }) => {
  return (
    <div className="okiro__post-card" style={{ background: color }}>
      <div className="okiro__post-card__image">
        <img src={url} alt="post-card" />
      </div>
      <div className="okiro__post-card__content">
        <h3>{title}</h3>
        <p>{authors}</p>
      </div>
    </div>
  );
};

export default PostCard;
