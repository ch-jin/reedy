import React from "react";
import { Link } from "react-router-dom";
import {
  StyledCollectionFeedItem,
  CollectionFeedImgWrapper,
  CollectionFeedImg,
} from "../../styles/collection";

const CollectionFeedItem = ({ feed, active }) => (
  <Link className="no-decoration" to={`/feeds/${feed.id}/articles`}>
    <StyledCollectionFeedItem active={active}>
      <CollectionFeedImgWrapper>
        <CollectionFeedImg src={feed.image} />
      </CollectionFeedImgWrapper>
      <p style={{ flex: 9 }} dangerouslySetInnerHTML={{ __html: feed.title }} />
    </StyledCollectionFeedItem>
  </Link>
);

export default CollectionFeedItem;
