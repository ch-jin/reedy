import React from "react";
import { Link } from "react-router-dom";
import CollectionListItem from "./CollectionListItem";
import {
  StyledCollectionWrapper,
  StyledCollectionListItemTitle,
} from "../../styles/collection";
import { ListIcon } from "../../styles/theme";
import { feedsBelongingToCollection } from "../../selectors/feed_selectors";

const CollectionList = props => {
  const {
    currentCollectionId,
    currentFeedId,
    hasFeeds,
    feeds,
    collections,
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

  const renderAllSubs = () => (
    <Link className="no-decoration-color" to="/subscriptions">
      <StyledCollectionListItemTitle
        active={props.location.pathname === "/subscriptions"}
      >
        <ListIcon className="fa fa-list-ul" />
        All
      </StyledCollectionListItemTitle>
    </Link>
  );

  return (
    <StyledCollectionWrapper>
      {hasFeeds && renderAllSubs()}
      {hasFeeds && renderCollectionItems()}
    </StyledCollectionWrapper>
  );
};

export default CollectionList;
