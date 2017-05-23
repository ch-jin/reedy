import React from "react";
import { StyledFeedButtons } from "../../styles/dropdown";

const FollowFeedDropdownButton = ({
  collection,
  addFeedToCollection,
  feedId,
}) => {
  const newCollectionFeed = { collectionId: collection.id, feedId };
  const handleClick = () => addFeedToCollection(newCollectionFeed);

  return (
    <StyledFeedButtons
      onClick={handleClick}
      key={"collection" + collection.id}
    >
      {collection.title}
    </StyledFeedButtons>
  );
};

export default FollowFeedDropdownButton;
