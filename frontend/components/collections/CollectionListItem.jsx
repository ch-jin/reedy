import React from "react";
import { Link } from "react-router-dom";
import { CollectionTitleIcon } from "../../styles/theme";
import {
  StyledItemBox,
  StyledCollectionFeedWrapper,
  StyledCollectionListItemTitle,
} from "../../styles/collection";
import CollectionFeedItem from "./CollectionFeedItem";

const CollectionListItem = ({
  currentCollectionId,
  currentFeedId,
  collection,
  feeds,
}) => {
  return (
    <StyledItemBox>
      <Link
        className="no-decoration-color"
        to={`/collections/${collection.id}/articles`}
      >
        <StyledCollectionListItemTitle
          active={currentCollectionId === collection.id}
        >
          <CollectionTitleIcon className="fa fa-angle-down" ariaHidden="true" />
          {collection.title}
        </StyledCollectionListItemTitle>
      </Link>
      <StyledCollectionFeedWrapper>
        {feeds.map(feed => (
          <CollectionFeedItem
            active={currentFeedId === feed.id}
            key={"collection-feed-" + feed.id}
            feed={feed}
          />
        ))}
      </StyledCollectionFeedWrapper>
    </StyledItemBox>
  );
};

export default CollectionListItem;
