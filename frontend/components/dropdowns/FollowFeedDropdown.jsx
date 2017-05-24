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

class FollowFeedDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { createDropdown: false };
  }

  render() {
    const { active } = this.props;
    return (
      <StyledFeedDropdown active={active} onClick={handleClickStopPropagation}>
        {this.renderEditDropdown()}
      </StyledFeedDropdown>
    );
  }

  renderEditDropdown() {
    const {
      feedId,
      collections,
      addFeedToCollection,
      deleteFeedFromCollection,
    } = this.props;
    return (
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
    );
  }
}

export default FollowFeedDropdown;
