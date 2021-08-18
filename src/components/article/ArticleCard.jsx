import React from "react";
import Tag from "../tag/Tag";
import { IoLockClosed } from "react-icons/io5";

import "./articleCard.css";

const ArticleCard = ({
  postData: { url, title, color, authors, tags, member },
}) => {
  return (
    <div className="okiro__article-card" style={{ background: color }}>
      <div className="okiro__article-card_img">
        <img src={url} alt={title + authors} />
      </div>
      <div className="okiro__article-card_content">
        <div className="okiro__article-card_content-name">
          <h3>{title}</h3>
          <p>{authors}</p>
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
