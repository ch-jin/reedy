import React from "react";
import { StyledListHeader } from "../../styles/article";
import { FeedImgContainer, FeedImg } from "../../styles/explore";

const ArticleListHeader = ({ feed }) => (
  <StyledListHeader>
    <FeedImgContainer>
      {feed.image && <FeedImg src={feed.image} />}
    </FeedImgContainer>
    <p dangerouslySetInnerHTML={{ __html: feed.title }} />
  </StyledListHeader>
);

export default ArticleListHeader;
