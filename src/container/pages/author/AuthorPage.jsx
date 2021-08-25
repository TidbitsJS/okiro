import React from "react";

import "./authorPage.css";

const AuthorPage = () => {
  const uniqueAuthorsLength = window.uniqueAuthors.length;
  return (
    <div className="okiro__authorpage">
      <div className="okiro__homepage__previewPosts">
        <div className="okiro__hompage__previewPosts-title">
          <h2>Authors</h2>

          <svg
            role="img"
            viewBox="0 0 136 24"
            xmlns="http://www.w3.org/2000/svg"
            className="okiro__hompage__previewPosts-zigzag"
          >
            <path d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"></path>
          </svg>
        </div>
        <div className="okiro__homepage__previewPosts-posts">
          {window.uniqueAuthors
            .slice(0, uniqueAuthorsLength - 1)
            .map((author, index) => (
              <div className="okiro__post-card" key={author.authorName + index}>
                <div className="okiro__post-card__image">
                  <img src={author.authorUrl} alt="post-card" />
                </div>
                <div className="okiro__post-card__content">
                  <h3>{author.authorName}</h3>
                  <p>better off</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="okiro__authorpage__seealso">
        <h3>See Also</h3>
        <div className="okiro__authorpage__seealso-div">
          <div className="okiro__authorpage__seealso-div__img">
            <img
              src={window.uniqueAuthors[uniqueAuthorsLength - 1].authorUrl}
              alt="see also author"
            />
          </div>
          <div className="okiro__authorpage__seealso-div__name">
            <p>{window.uniqueAuthors[uniqueAuthorsLength - 1].authorName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
