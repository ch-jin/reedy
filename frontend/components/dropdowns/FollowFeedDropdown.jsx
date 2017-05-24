import React from "react";
import {
  StyledFeedDropdown,
  DropdownContent,
  DropdownEmptyItem,
  Line,
  Bold,
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
            Add to Collections:
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

      </DropdownContent>

    </StyledFeedDropdown>
  );
};

export default FollowFeedDropdown;
