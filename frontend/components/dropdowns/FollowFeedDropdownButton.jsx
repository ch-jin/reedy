import React from "react";
import {
  StyledFeedButtons,
  RSSSquare,
  IndicatorIcons,
} from "../../styles/dropdown";

const FollowFeedDropdownButton = ({
  feedId,
  collection,
  addFeedToCollection,
  deleteFeedFromCollection,
}) => {
  const newCollectionFeed = { collectionId: collection.id, feedId };
  const followed = collection.feedIds.includes(feedId);

  const handleClick = () => {
    if (followed) {
      return deleteFeedFromCollection(newCollectionFeed);
    } else {
      return addFeedToCollection(newCollectionFeed);
    }
  };

  return (
    <StyledFeedButtons
      className="feed-button"
      followed={followed}
      onClick={handleClick}
      key={"collection" + collection.id}
    >
      <RSSSquare className="fa fa-rss-square" ariaHidden="true" />
      {collection.title}

      {followed &&
        <IndicatorIcons className="fa fa-check-circle" id="ff-add-icon" />}

      {followed &&
        <IndicatorIcons
          style={{ color: "#c0392b" }}
          className="fa fa-times-circle"
          id="ff-delete-icon"
          followed={followed}
        />}
    </StyledFeedButtons>
  );
};

export default FollowFeedDropdownButton;
