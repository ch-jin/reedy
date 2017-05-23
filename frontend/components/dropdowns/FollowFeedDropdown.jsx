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
  active,
  collections,
  addFeedToCollection,
  feedId,
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
          />
        ))}

      </DropdownContent>

    </StyledFeedDropdown>
  );
};

export default FollowFeedDropdown;
