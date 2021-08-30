import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../../../components/article/ArticleCard";
import { authorbg01 } from "../../../components/imports/ImageImports";
import InfoCard from "../../../components/infocard/InfoCard";
import Spinner from "../../../components/spinner/Spinner";
import postData from "../../../data/post/post";

import "./authorDetails.css";

const AuthorDetails = () => {
  const [authorInfo, setAuthorInfo] = useState(authorbg01);
  const [authorArticles, setAuthorArticles] = useState();
  const authorParam = useParams();

  console.log("params", authorParam.authorName);

  useEffect(() => {
    const getAuthor = window.uniqueAuthors.filter(
      (author) => author.authorName === authorParam.authorName
    );

    const getAuthorPost = postData.filter(
      (post) => post.author === authorParam.authorName
    );

    console.log("getAuthor", getAuthor, getAuthorPost);
    setAuthorInfo(...getAuthor);
    setAuthorArticles(getAuthorPost);
  }, [authorParam.authorName]);

  return (
    <div className="okiro__authorDetails">
      {authorInfo && authorArticles ? (
        <>
          <InfoCard imgLink={authorInfo.authorbg}>
            {authorInfo.authorName}
          </InfoCard>
          <div className="okiro__authorDetails_articles">
            {authorArticles.map((article) => (
              <ArticleCard postData={article} key={article.authorName} />
            ))}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default AuthorDetails;
