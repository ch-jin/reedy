import React from "react";
import { StyledListHeader, StyledTitle } from "../../styles/article";
import { FeedImgContainer, FeedImg } from "../../styles/explore";
import FollowButtonContainer from "./FollowButtonContainer";
import FollowFeedDropdownContainer
  from "../dropdowns/FollowFeedDropdownContainer";

const ArticleListHeader = ({ feed }) => (
  <StyledListHeader>
    <FeedImgContainer>
      {feed.image && <FeedImg src={feed.image} />}
    </FeedImgContainer>
    <StyledTitle dangerouslySetInnerHTML={{ __html: feed.title }} />
    <FollowButtonContainer />
    <FollowFeedDropdownContainer />
  </StyledListHeader>
);

export default ArticleListHeader;
