import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MdContent from "../../../components/content/MdContent";
import LatestPost from "../../../components/latestpost/LatestPost";
import Spinner from "../../../components/spinner/Spinner";
import "./blogPage.css";

const BlogPage = () => {
  const [mdText, setMdText] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    fetch(state.content)
      .then((response) => response.text())
      .then((text) => setMdText(text));
  });

  return (
    <div className="okiro__blogpage">
      <LatestPost post={state} showAllTags={true} />
      {mdText ? <MdContent mdText={mdText} /> : <Spinner />}
    </div>
  );
};

export default BlogPage;
