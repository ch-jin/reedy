import React from "react";
import {
  FixedNav,
  StyledMainNavWrapper,
  StyledMainNav,
} from "../../styles/main";

const MainNavWrapper = ({ children, articleModal }) => (
  <FixedNav articleModal={articleModal}>
    <StyledMainNavWrapper>
      <StyledMainNav>
        {children}
      </StyledMainNav>
    </StyledMainNavWrapper>
  </FixedNav>
);

export default MainNavWrapper;
