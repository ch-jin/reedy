import React from "react";
import { AngleDown } from "../../styles/theme";
import {
  StyledItemBox,
  StyledCollectionFeedWrapper,
} from "../../styles/collection";
import CollectionFeedItem from "./CollectionFeedItem";

const CollectionItem = ({ collection, feeds }) => {
  return (
    <StyledItemBox>
      <div>
        <AngleDown className="fa fa-angle-down" ariaHidden="true" />
        {collection.title}
      </div>
      <StyledCollectionFeedWrapper>
        {feeds.map(feed => (
          <CollectionFeedItem key={"collection-feed-" + feed.id} feed={feed} />
        ))}
      </StyledCollectionFeedWrapper>
    </StyledItemBox>
  );
};

export default CollectionItem;
