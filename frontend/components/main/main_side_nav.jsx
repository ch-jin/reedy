import React from "react";
import MainSideNavLinks from "./main_side_nav_links";
import CollectionListContainer
  from "../collections/collection_list_container";
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
