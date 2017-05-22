import React from "react";
import {
  StyledFeedDropdown,
  DropdownContent,
  StyledFeedButtons,
  DropdownEmptyItem,
  Line,
  Bold,
} from "../../styles/dropdown";
import {
  handleClickStopPropagation,
} from "../../utils/click_event_util";

const FollowFeedDropdown = ({ active, collections }) => (
  <StyledFeedDropdown
    active={active}
    onClick={handleClickStopPropagation}
  >
    <DropdownContent>
      <DropdownEmptyItem>
        <Bold>
          Add to Collections:
        </Bold>
      </DropdownEmptyItem>
      <Line />

      {collections.map(collection => (
        <StyledFeedButtons key={"collection" + collection.id}>
          {collection.title}
        </StyledFeedButtons>
      ))}

    </DropdownContent>

  </StyledFeedDropdown>
);

export default FollowFeedDropdown;
