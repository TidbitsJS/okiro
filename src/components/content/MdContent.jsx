import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "./mdContent.css";

const MdContent = ({ mdText }) => {
  return (
    <div className="okiro__mdContent">
      <ReactMarkdown children={mdText} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default MdContent;
