import React from "react";
import CollectionItem from "./CollectionItem";
import { StyledCollectionWrapper } from "../../styles/collection";
import { feedsBelongingToCollection } from "../../selectors/feed_selectors";

const CollectionList = ({ hasFeeds, feeds, collections }) => (
  <StyledCollectionWrapper>
    {hasFeeds &&
      collections.map(collection => (
        <CollectionItem
          key={"collection" + collection.id}
          collection={collection}
          feeds={feedsBelongingToCollection(feeds, collection.feedIds)}
        />
      ))}

  </StyledCollectionWrapper>
);

export default CollectionList;
