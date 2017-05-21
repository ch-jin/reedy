import React from "react";
import { FollowButton } from "../../styles/theme";
import { StyledListHeader, StyledTitle } from "../../styles/article";
import { FeedImgContainer, FeedImg } from "../../styles/explore";

const ArticleListHeader = ({ feed }) => (
  <StyledListHeader>
    <FeedImgContainer>
      {feed.image && <FeedImg src={feed.image} />}
    </FeedImgContainer>
    <StyledTitle dangerouslySetInnerHTML={{ __html: feed.title }} />
    <FollowButton>follow</FollowButton>
  </StyledListHeader>
);

export default ArticleListHeader;
