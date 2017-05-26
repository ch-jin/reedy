import React from "react";
import { Link } from "react-router-dom";
import {
  StyledDiscoverItem,
  FeedTitle,
  FeedImg,
  FeedImgContainer,
  DiscoverItemWrapper,
} from "../../styles/discover";

const DiscoverItem = ({ feed }) => (
  <Link className="no-decoration" to={`/feeds/${feed.id}/articles`}>
    <StyledDiscoverItem>
      <DiscoverItemWrapper>
        <FeedImgContainer>

          <FeedImg src={feed.image} />
        </FeedImgContainer>
      </DiscoverItemWrapper>
      <FeedTitle
        length={feed.title.length}
        dangerouslySetInnerHTML={{ __html: feed.title }}
      />
    </StyledDiscoverItem>
  </Link>
);

export default DiscoverItem;
