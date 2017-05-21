import React from "react";
import MainNavWrapper from "./main_nav_wrapper";
import UserDropdownContainer
  from "../dropdowns/user_dropdown_container";
import MainNavHeaderContainer from "./main_nav_header_container";
import { StyledUserSection, UserImg } from "../../styles/main";

const MainNav = ({ handleImgClick, articleModal, userDropdown }) => (
  <MainNavWrapper articleModal={articleModal}>

    <MainNavHeaderContainer />

    <StyledUserSection>
      <UserImg src={window.guestImg} onClick={handleImgClick} />
      {userDropdown && <UserDropdownContainer />}
    </StyledUserSection>

  </MainNavWrapper>
);

export default MainNav;
