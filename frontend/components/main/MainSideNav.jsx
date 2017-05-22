import React from "react";
import MainSideNavLinks from "./MainSideNavLinks";
import CollectionListContainer
  from "../collections/CollectionListContainer";
import {
  FixedSideNav,
  SideNavWrapper,
  SideNavContent,
  StyledAddContentButton,
} from "../../styles/main";

const MainSideNav = ({ articleModal }) => (
  <FixedSideNav articleModal={articleModal}>
    <SideNavWrapper>
      <SideNavContent>
        <MainSideNavLinks />
        <CollectionListContainer />
        <StyledAddContentButton>
          + ADD CONTENT
        </StyledAddContentButton>
      </SideNavContent>
    </SideNavWrapper>
  </FixedSideNav>
);

export default MainSideNav;
