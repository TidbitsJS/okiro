import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LatestPost from "../../../components/latestpost/LatestPost";
import "./blogPage.css";

const BlogPage = () => {
  const { state } = useLocation();

  return (
    <div className="okiro__blogpage">
      <LatestPost post={state} showAllTags={true} />
    </div>
  );
};

export default BlogPage;
