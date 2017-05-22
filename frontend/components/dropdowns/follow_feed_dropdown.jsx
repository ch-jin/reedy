import React from "react";
import {
  StyledFeedDropdown,
  DropdownContent,
  StyledFeedButtons,
  DropdownEmptyItem,
  Line,
  Bold
} from "../../styles/dropdown";

class FollowFeedDropdown extends React.Component {
  handleClick(e) {
    e.stopPropagation();
  }

  render() {
    const { active, handleLogout } = this.props;
    console.log(active);
    return (
      <StyledFeedDropdown active={active} onClick={this.handleClick}>
        <DropdownContent>
          <DropdownEmptyItem>
            <Bold>
              Add to Collections:
            </Bold>
          </DropdownEmptyItem>
          <Line />

          <StyledFeedButtons>
            Collections
          </StyledFeedButtons>

          <StyledFeedButtons>
            Articles
          </StyledFeedButtons>

          <StyledFeedButtons>
            Settings
          </StyledFeedButtons>

          <StyledFeedButtons onClick={handleLogout}>
            Log Out
          </StyledFeedButtons>

        </DropdownContent>

      </StyledFeedDropdown>
    );
  }
}

export default FollowFeedDropdown;
