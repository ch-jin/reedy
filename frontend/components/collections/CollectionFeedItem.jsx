import React from "react";
import { Link } from "react-router-dom";
import {
  StyledCollectionFeedItem,
  CollectionFeedImgWrapper,
  CollectionFeedImg,
} from "../../styles/collection";

const CollectionFeedItem = ({ feed }) => (
  <Link className="no-decoration" to={`/feeds/${feed.id}/articles`}>
    <StyledCollectionFeedItem>
      <CollectionFeedImgWrapper>
        <CollectionFeedImg src={feed.image} />
      </CollectionFeedImgWrapper>
      {feed.title}
    </StyledCollectionFeedItem>
  </Link>
);

export default CollectionFeedItem;
