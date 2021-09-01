import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../../../components/article/ArticleCard";
import { authorbg01 } from "../../../components/imports/ImageImports";
import InfoCard from "../../../components/infocard/InfoCard";
import Spinner from "../../../components/spinner/Spinner";
import postData from "../../../data/post/post";
import SocialIcon from "../../../components/social/SocialIcon";
import LatestPost from "../../../components/latestpost/LatestPost";
import { FaGithubAlt, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { pageVariants } from "../../../animation/motion";

import "./authorDetails.css";

const AuthorDetails = () => {
  const [authorInfo, setAuthorInfo] = useState(authorbg01);
  const [authorArticles, setAuthorArticles] = useState();
  const authorParam = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    const getAuthor = window.uniqueAuthors.filter(
      (author) => author.authorName === authorParam.authorName
    );

    const getAuthorPost = postData.filter(
      (post) => post.author === authorParam.authorName
    );

    setAuthorInfo(...getAuthor);
    setAuthorArticles(getAuthorPost);
  }, [authorParam.authorName]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="okiro__authorDetails"
    >
      {authorInfo && authorArticles ? (
        <>
          <InfoCard imgLink={authorInfo.authorbg}>
            <div className="okiro__authorDetails_authorBox">
              <div className="okiro__authorDetails_authorContent">
                <div className="okiro__authorDetails_authorImage">
                  <img src={authorInfo.authorUrl} alt="authorImage" />
                </div>

                <div className="okiro__authorDetails_authorInfo">
                  <h1>{authorInfo.authorName}</h1>
                  <svg
                    role="img"
                    viewBox="0 0 136 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"></path>
                  </svg>

                  <p>
                    {" "}
                    Dici enim nihil potest verius. Sed ne, dum huic obsequor,
                    vobis molestus sim. Iam id ipsum absurdum, maximum malum
                    neglegi. Tecum optime, deinde etiam cum mediocri amico.{" "}
                  </p>
                </div>
              </div>

              <div className="okiro__authorDetails_stats">
                <div className="okiro__authorDetails_authorPosts">
                  <h2>{authorArticles.length} </h2>
                  <span>posts</span>
                </div>

                <div className="okiro__authorDetails_authorLinks">
                  <SocialIcon childIcon={<FaGithubAlt fontSize={25} />} />
                  <SocialIcon childIcon={<FaTwitter fontSize={25} />} />
                  <SocialIcon childIcon={<FaInstagram fontSize={25} />} />
                </div>
              </div>
            </div>
          </InfoCard>
          <LatestPost post={authorArticles[0]} showAllTags={false} />
          <div className="okiro__authorDetails_articles">
            {authorArticles.slice(1).map((article, index) => (
              <ArticleCard
                postData={article}
                key={article.authorName + article.id}
              />
            ))}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </motion.div>
  );
};

export default AuthorDetails;
