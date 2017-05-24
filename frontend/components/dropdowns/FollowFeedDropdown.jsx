import React from "react";
import {
  StyledFeedDropdown,
  DropdownContent,
  DropdownEmptyItem,
  Line,
  Bold,
  StyledCreateCollectionButton,
  CloseButton,
} from "../../styles/dropdown";
import { handleClickStopPropagation } from "../../utils/click_event_util";
import FollowFeedDropdownButton from "./FollowFeedDropdownButton";
import FollowFeedCreateCollection from "./FollowFeedCreateCollection";

class FollowFeedDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { createDropdown: false };
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.active) {
      this.setState({ createDropdown: false });
    }
  }

  handleCloseClick() {
    this.props.toggleFollowFeedDropdown();
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
            handleCloseClick={this.handleCloseClick}
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
        <CloseButton onClick={this.handleCloseClick} className="fa fa-times" />
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
          <i className="fa fa-plus" /> CREATE COLLECTION
        </StyledCreateCollectionButton>

      </DropdownContent>
    );
  }

  handleCreateClick() {
    this.setState({ createDropdown: true });
  }
}

export default FollowFeedDropdown;
