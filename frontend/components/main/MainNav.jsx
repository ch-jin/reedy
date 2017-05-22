import React from "react";
import MainNavWrapper from "./MainNavWrapper";
import UserDropdownContainer from "../dropdowns/UserDropdownContainer";
import MainNavHeaderContainer from "./MainNavHeaderContainer";
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
