import React from "react";
import { StyledListHeader, StyledTitle } from "../../styles/feed";
import { FeedImgContainer, FeedImg } from "../../styles/discover";
import FollowButtonContainer from "./FollowButtonContainer";
import FollowFeedDropdownContainer
  from "../dropdowns/FollowFeedDropdownContainer";

const FeedHeader = ({ feed, followed }) => (
  <StyledListHeader>
    <FeedImgContainer>
      {feed.image && <FeedImg src={feed.image} />}
    </FeedImgContainer>
    <StyledTitle dangerouslySetInnerHTML={{ __html: feed.title }} />
    <FollowButtonContainer followed={followed} />
    <FollowFeedDropdownContainer />
  </StyledListHeader>
);

export default FeedHeader;
