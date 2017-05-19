import React from "react";
import { Link } from "react-router-dom";
import {
  StyledExploreItem,
  FeedTitle,
  FeedImg,
} from "../../styles/explore";

const ExploreItem = ({ feed }) => (
  <StyledExploreItem>
    <Link to={`/feeds/${feed.id}`}>
      <FeedImg src={feed.image} />
    </Link>
    <FeedTitle>
      {feed.title}
    </FeedTitle>
  </StyledExploreItem>
);

export default ExploreItem;
