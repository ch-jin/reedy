import React from "react";
import {
  FixedNav,
  MainNavWrapper,
  StyledMainNav,
} from "../../styles/main";
import { Button } from "../../styles/theme";

const MainNav = props => {
  return (
    <FixedNav>
      <MainNavWrapper>
        <StyledMainNav>
          Hi {props.username}
          <Button onClick={props.handleLogout}>
            Log Out
          </Button>
        </StyledMainNav>
      </MainNavWrapper>
    </FixedNav>
  );
};

export default MainNav;
