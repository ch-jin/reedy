import React from "react";
import MainSideNavLinks from "./main_side_nav_links";
import CollectionList from "../collections/collection_list";
import {
  FixedSideNav,
  SideNavWrapper,
  SideNavContent,
  StyledAddContentButton,
} from "../../styles/main";

const MainSideNav = () => (
  <FixedSideNav>
    <SideNavWrapper>
      <SideNavContent>
        <MainSideNavLinks />
        <CollectionList />
        <StyledAddContentButton>
          + ADD CONTENT
        </StyledAddContentButton>
      </SideNavContent>
    </SideNavWrapper>
  </FixedSideNav>
);

export default MainSideNav;
