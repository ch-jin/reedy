import React from "react";
import { Button } from "../../styles/theme";
import {
  StyledDropdown,
  DropdownList,
  DropdownButton,
} from "../../styles/dropdown";

const MainNavDropdown = ({ active, handleLogout, username }) => (
  <StyledDropdown active={active}>
    <DropdownList>
      <li>
        Signed in as {username}
      </li>

      <li>
        <DropdownButton onClick={handleLogout}>
          Log Out
        </DropdownButton>
      </li>
    </DropdownList>
  </StyledDropdown>
);

export default MainNavDropdown;
