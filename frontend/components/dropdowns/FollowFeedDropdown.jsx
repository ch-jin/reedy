import React from "react";
import {
  StyledFeedDropdown,
  DropdownContent,
  DropdownEmptyItem,
  Line,
  Bold,
  StyledCreateCollectionButton,
} from "../../styles/dropdown";
import { handleClickStopPropagation } from "../../utils/click_event_util";
import FollowFeedDropdownButton from "./FollowFeedDropdownButton";

const FollowFeedDropdown = ({
  feedId,
  active,
  collections,
  addFeedToCollection,
  deleteFeedFromCollection,
}) => {
  return (
    <StyledFeedDropdown active={active} onClick={handleClickStopPropagation}>
      <DropdownContent>
        <DropdownEmptyItem>
          <Bold>
            Collections:
          </Bold>
        </DropdownEmptyItem>
        <Line />

        {collections.map(collection => (
          <FollowFeedDropdownButton
            key={"feedCollection" + collection.id}
            collection={collection}
            feedId={feedId}
            addFeedToCollection={addFeedToCollection}
            deleteFeedFromCollection={deleteFeedFromCollection}
          />
        ))}

        <StyledCreateCollectionButton>
          <i className="fa fa-plus" /> CREATE A COLLECTION
        </StyledCreateCollectionButton>

      </DropdownContent>
    </StyledFeedDropdown>
  );
};

export default FollowFeedDropdown;
