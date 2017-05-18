import React from "react";
import { Button } from "../../styles/theme";
import {
  StyledDropdown,
  DropdownContent,
  DropdownButton,
  DropdownEmptyItem,
  Line,
  Bold,
} from "../../styles/dropdown";

class MainNavDropdown extends React.Component {
  handleClick(e) {
    e.stopPropagation();
  }

  render() {
    const { active, handleLogout, username } = this.props;

    return (
      <StyledDropdown active={active} onClick={this.handleClick}>
        <DropdownContent>
          <DropdownEmptyItem>
            Signed in as
            <br />
            <Bold>
              {username}
            </Bold>
          </DropdownEmptyItem>

          <Line />

          <DropdownButton>
            Collections
          </DropdownButton>

          <DropdownButton>
            Articles
          </DropdownButton>

          <DropdownButton>
            Settings
          </DropdownButton>

          <DropdownButton onClick={handleLogout}>
            Log Out
          </DropdownButton>

        </DropdownContent>
      </StyledDropdown>
    );
  }
}

export default MainNavDropdown;
