import React from "react";
import { Link } from "react-router-dom";
import CollectionListContainer from "../collections/CollectionListContainer";
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
        <CollectionListContainer />
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
