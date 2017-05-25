import React from "react";
import { Link } from "react-router-dom";
import CollectionListItem from "./CollectionListItem";
import CollectionNavItem from "./CollectionNavItem";
import { StyledCollectionWrapper } from "../../styles/collection";
import { feedsBelongingToCollection } from "../../selectors/feed_selectors";

const CollectionList = props => {
  const {
    currentCollectionId,
    currentFeedId,
    hasFeeds,
    feeds,
    collections,
    location: { pathname },
  } = props;
  const renderCollectionItems = () =>
    collections.map(collection => (
      <CollectionListItem
        currentCollectionId={currentCollectionId}
        key={"collection" + collection.id}
        collection={collection}
        feeds={feedsBelongingToCollection(feeds, collection.feedIds)}
        currentFeedId={currentFeedId}
      />
    ));

  return (
    <StyledCollectionWrapper>
      <CollectionNavItem
        activePath={pathname}
        path="/discover"
        icon="fa-feed"
        name="Discover"
      />
      <CollectionNavItem
        activePath={pathname}
        path="/saved"
        icon="fa-bookmark"
        name="Saved"
      />

      <CollectionNavItem
        activePath={pathname}
        path="/subscriptions"
        icon="fa-list-ul"
        name="All Subscriptions"
      />
      {hasFeeds && renderCollectionItems()}
    </StyledCollectionWrapper>
  );
};

export default CollectionList;
