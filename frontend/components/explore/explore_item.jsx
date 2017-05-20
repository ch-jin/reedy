import React from "react";
import { Link } from "react-router-dom";
import {
  StyledExploreItem,
  FeedTitle,
  FeedImg,
  FeedImgContainer,
  ExploreItemWrapper,
} from "../../styles/explore";

const ExploreItem = ({ feed }) => (
  <StyledExploreItem>
    <ExploreItemWrapper>
      <Link to={`/feeds/${feed.id}/articles`}>
        <FeedImgContainer>
          <FeedImg src={feed.image} />
        </FeedImgContainer>
      </Link>
    </ExploreItemWrapper>
    <FeedTitle>
      <h5 dangerouslySetInnerHTML={{ __html: feed.title }} />
    </FeedTitle>
  </StyledExploreItem>
);

export default ExploreItem;
