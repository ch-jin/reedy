import React from "react";
import { Link } from "react-router-dom";
import MainSideNavLinks from "./MainSideNavLinks";
import CollectionListContainer from "../collections/CollectionListContainer";
import {
  FixedSideNav,
  SideNavWrapper,
  SideNavContent,
  StyledAddContentButton,
} from "../../styles/main";

const MainSideNav = ({ articleModal, collectionsPresent }) => (
  <FixedSideNav articleModal={articleModal}>
    <SideNavWrapper>
      <SideNavContent>
        <MainSideNavLinks />

        {collectionsPresent && <CollectionListContainer />}
      </SideNavContent>

      <Link to="/discover">
        <StyledAddContentButton>
          <i className="fa fa-plus" /> ADD CONTENT
        </StyledAddContentButton>
      </Link>
    </SideNavWrapper>
  </FixedSideNav>
);

export default MainSideNav;
