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
import FollowFeedCreateCollection from "./FollowFeedCreateCollection";

class FollowFeedDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.state = { createDropdown: false };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.active) {
      this.setState({ createDropdown: false });
    }
  }

  render() {
    const { active, createCollection, feedId } = this.props;
    if (this.state.createDropdown) {
      return (
        <StyledFeedDropdown
          active={active}
          onClick={handleClickStopPropagation}
        >
          <FollowFeedCreateCollection
            feedId={feedId}
            createCollection={createCollection}
            cancelClick={() => this.setState({ createDropdown: false })}
          />
        </StyledFeedDropdown>
      );
    } else {
      return (
        <StyledFeedDropdown
          active={active}
          onClick={handleClickStopPropagation}
        >
          {this.renderEditDropdown()}
        </StyledFeedDropdown>
      );
    }
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

        <StyledCreateCollectionButton onClick={this.handleCreateClick}>
          <i className="fa fa-plus" /> CREATE A COLLECTION
        </StyledCreateCollectionButton>

      </DropdownContent>
    );
  }

  handleCreateClick() {
    this.setState({ createDropdown: true });
  }
}

export default FollowFeedDropdown;
