import React from "react";
import { Link } from "react-router-dom";
import { StyledListHeader, StyledTitle } from "../../styles/feed";
import { FeedImgContainer, FeedImg } from "../../styles/discover";
import FollowButtonContainer from "./FollowButtonContainer";
import FollowFeedDropdownContainer
  from "../dropdowns/FollowFeedDropdownContainer";

const FeedHeader = ({ feed, followed, notFeed }) => {
  const renderTitle = () => {
    if (notFeed) {
      return (
        <Link className="no-decoration-color" to={`/feeds/${feed.id}/articles`}>
          <StyledTitle dangerouslySetInnerHTML={{ __html: feed.title }} />
        </Link>
      );
    } else {
      return <StyledTitle dangerouslySetInnerHTML={{ __html: feed.title }} />;
    }
  };

  return (
    <StyledListHeader>
      <Link className="no-decoration-color" to={`/feeds/${feed.id}/articles`}>
        <FeedImgContainer>
          {feed.image && <FeedImg src={feed.image} />}
        </FeedImgContainer>
      </Link>
      {renderTitle()}
      {!notFeed && <FollowButtonContainer followed={followed} />}
      <FollowFeedDropdownContainer />
    </StyledListHeader>
  );
};

export default FeedHeader;
