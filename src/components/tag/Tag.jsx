import React from "react";

import "./tag.css";

const Tag = ({ title, className }) => {
  return (
    <div
      className={className ? "okiro__post-tag " + className : "okiro__post-tag"}
    >
      {title}
    </div>
  );
};

export default Tag;
