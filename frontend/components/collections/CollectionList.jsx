import React from "react";
import CollectionListItem from "./CollectionListItem";
import { StyledCollectionWrapper } from "../../styles/collection";
import { feedsBelongingToCollection } from "../../selectors/feed_selectors";

const CollectionList = ({ currentFeedId, hasFeeds, feeds, collections }) => (
  <StyledCollectionWrapper>
    {hasFeeds &&
      collections.map(collection => (
        <CollectionListItem
          key={"collection" + collection.id}
          collection={collection}
          feeds={feedsBelongingToCollection(feeds, collection.feedIds)}
          currentFeedId={currentFeedId}
        />
      ))}

  </StyledCollectionWrapper>
);

export default CollectionList;
