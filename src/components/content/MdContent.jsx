import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MemberOnly from "../member/MemberOnly";
import Spinner from "../spinner/Spinner";

import "./mdContent.css";

const MdContent = ({ content, lock, color }) => {
  const [mdText, setMdText] = useState(null);

  useEffect(() => {
    fetch(content)
      .then((response) => response.text())
      .then((text) => {
        if (lock) {
          setMdText(text.slice(0, 550));
        } else {
          setMdText(text);
        }
      });
  });

  return (
    <div className="okiro__mdContent">
      {mdText ? (
        <>
          <ReactMarkdown children={mdText} remarkPlugins={[remarkGfm]} />
          {lock ? <MemberOnly color={color} /> : null}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MdContent;
