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
  <Link className="no-decoration" to={`/feeds/${feed.id}/articles`}>
    <StyledExploreItem>
      <ExploreItemWrapper>
        <FeedImgContainer>
          <FeedImg src={feed.image} />
        </FeedImgContainer>
      </ExploreItemWrapper>
      <FeedTitle>
        <h5 dangerouslySetInnerHTML={{ __html: feed.title }} />
      </FeedTitle>
    </StyledExploreItem>
  </Link>
);

export default ExploreItem;
