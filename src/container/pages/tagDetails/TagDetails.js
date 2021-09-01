import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleCard from "../../../components/article/ArticleCard";
import InfoCard from "../../../components/infocard/InfoCard";
import LatestPost from "../../../components/latestpost/LatestPost";
import Spinner from "../../../components/spinner/Spinner";
import postData from "../../../data/post/post";

import "./tagDetails.css";

const TagDetails = () => {
  const [tagPosts, setTagPosts] = useState();
  const [tagInfo, setTagInfo] = useState();

  const tagParam = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    let getPosts = postData.filter((post) =>
      post.tags.includes(tagParam.tagName)
    );

    let getInfo = window.uniqueTags.filter(
      (tag) => tag.tagName === tagParam.tagName
    );

    setTagPosts(getPosts);
    setTagInfo(...getInfo);
  }, [tagParam.tagName]);

  return (
    <div className="okiro__tagDetails">
      {tagPosts && tagInfo ? (
        <>
          <InfoCard imgLink={tagInfo.tagUrl}>
            <div className="okiro__tagDetails_box">
              <div className="okiro__tagDetails_box_type">
                <h1>{tagParam.tagName}</h1>
              </div>
              <div className="okiro__tagDetails_box_total">
                <h1>{tagPosts.length}</h1>
                <span>posts</span>
              </div>
            </div>
          </InfoCard>

          <LatestPost post={tagPosts[0]} showAllTags={true} />
          <div className="okiro__tagDetails_articles">
            {tagPosts.slice(1).map((article) => (
              <ArticleCard
                postData={article}
                key={article.authorName + article.id + article.title}
              />
            ))}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TagDetails;
