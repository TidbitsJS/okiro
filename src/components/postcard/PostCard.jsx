import React from "react";
import { Link } from "react-router-dom";

import "./postCard.css";

const PostCard = ({ post }) => {
  const { id, title, url, author, color } = post;
  return (
    <div className="okiro__post-card" style={{ background: color }}>
      <div className="okiro__post-card__image">
        <Link to={{ pathname: `/article/${id}` }}>
          <img src={url} alt="post-card" />
        </Link>
      </div>
      <div className="okiro__post-card__content">
        <Link to={{ pathname: `/article/${id}` }}>
          <h3>{title}</h3>
        </Link>
        <Link to={`/author/${author}`}>
          <p>{author}</p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
