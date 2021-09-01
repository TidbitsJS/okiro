import React from "react";
import Tag from "../tag/Tag";
import { IoLockClosed } from "react-icons/io5";

import "./articleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ postData }) => {
  const { id, url, title, color, author, tags, member } = postData;
  return (
    <div className="okiro__article-card" style={{ background: color }}>
      <div className="okiro__article-card_img">
        <Link to={{ pathname: `/article/${id}` }}>
          <img src={url} alt={title + author} />
        </Link>
      </div>
      <div className="okiro__article-card_content">
        <div className="okiro__article-card_content-name">
          <Link to={{ pathname: `/article/${id}` }}>
            <h3>{title}</h3>
          </Link>
          <Link to={`/author/${author}`}>
            <p>{author}</p>
          </Link>
        </div>
        <div className="okiro__article-card_content-tag">
          <Tag title={tags[0]} />
          {member ? (
            <div className="okiro__article-card_content-tag_private">
              <IoLockClosed />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
