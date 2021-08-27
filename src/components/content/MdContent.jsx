import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Spinner from "../spinner/Spinner";

import "./mdContent.css";

const MdContent = ({ content }) => {
  const [mdText, setMdText] = useState(null);

  useEffect(() => {
    fetch(content)
      .then((response) => response.text())
      .then((text) => setMdText(text));
  });

  return (
    <div className="okiro__mdContent">
      {mdText ? (
        <ReactMarkdown children={mdText} remarkPlugins={[remarkGfm]} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MdContent;
