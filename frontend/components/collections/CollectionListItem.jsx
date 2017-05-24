import React from "react";
import { AngleDown } from "../../styles/theme";
import {
  StyledItemBox,
  StyledCollectionFeedWrapper,
  StyledCollectionListItemTitle,
} from "../../styles/collection";
import CollectionFeedItem from "./CollectionFeedItem";

const CollectionListItem = ({ currentFeedId, collection, feeds }) => {
  return (
    <StyledItemBox>
      <StyledCollectionListItemTitle>
        <AngleDown className="fa fa-angle-down" ariaHidden="true" />
        {collection.title}
      </StyledCollectionListItemTitle>
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
