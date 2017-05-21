import React from "react";
import MainNavWrapper from "./main_nav_wrapper";
import MainNavDropdownContainer from "./main_nav_dropdown_container";
import MainNavHeaderContainer from "./main_nav_header_container";
import { StyledUserSection, UserImg } from "../../styles/main";

const MainNav = ({ handleImgClick, articleModal, userDropdown }) => (
  <MainNavWrapper articleModal={articleModal}>

    <MainNavHeaderContainer />

    <StyledUserSection>
      <UserImg src={window.guestImg} onClick={handleImgClick} />
      {userDropdown && <MainNavDropdownContainer />}
    </StyledUserSection>

  </MainNavWrapper>
);

export default MainNav;
