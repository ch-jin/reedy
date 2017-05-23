import React from "react";
import {
  StyledCollectionFeedItem,
  CollectionFeedImgWrapper,
  CollectionFeedImg,
} from "../../styles/collection";

const CollectionFeedItem = ({ feed }) => (
  <StyledCollectionFeedItem>
    <CollectionFeedImgWrapper>
      <CollectionFeedImg src={feed.image} />
    </CollectionFeedImgWrapper>
    {feed.title}
  </StyledCollectionFeedItem>
);

export default CollectionFeedItem;
