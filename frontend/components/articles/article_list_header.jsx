import React from "react";
import { StyledListHeader, StyledTitle } from "../../styles/article";
import { FeedImgContainer, FeedImg } from "../../styles/explore";
import FollowButtonContainer from "./follow_button_container";
import FollowFeedDropdownContainer
  from "../dropdowns/follow_feed_dropdown_container";

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
