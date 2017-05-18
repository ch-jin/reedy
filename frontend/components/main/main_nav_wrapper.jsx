import React from "react";
import {
  FixedNav,
  StyledMainNavWrapper,
  StyledMainNav,
} from "../../styles/main";

const MainNavWrapper = ({ children }) => (
  <FixedNav>
    <StyledMainNavWrapper>
      <StyledMainNav>
        {children}
      </StyledMainNav>
    </StyledMainNavWrapper>
  </FixedNav>
);

export default MainNavWrapper;
