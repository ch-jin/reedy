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
  const { currentFeedId, hasFeeds, feeds, collections } = props;
  const renderColletionItems = () =>
    collections.map(collection => (
      <CollectionListItem
        key={"collection" + collection.id}
        collection={collection}
        feeds={feedsBelongingToCollection(feeds, collection.feedIds)}
        currentFeedId={currentFeedId}
      />
    ));

  const renderAllSubs = () => (
    <Link className="no-decoration-color" to="/subscriptions">
      <StyledCollectionListItemTitle>
        <ListIcon className="fa fa-list-ul" />
        All
      </StyledCollectionListItemTitle>
    </Link>
  );

  return (
    <StyledCollectionWrapper>
      {hasFeeds && renderAllSubs()}
      {hasFeeds && renderColletionItems()}
    </StyledCollectionWrapper>
  );
};

export default CollectionList;
