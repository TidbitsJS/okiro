import React from "react";
import { Link } from "react-router-dom";

import "./tag.css";

const Tag = ({ title, className, link }) => {
  return (
    <div
      className={className ? "okiro__post-tag " + className : "okiro__post-tag"}
    >
      <Link to={link}>{title}</Link>
    </div>
  );
};

export default Tag;
