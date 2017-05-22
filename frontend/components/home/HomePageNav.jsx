import React from "react";
import HomePageNavButton from "./HomePageNavButton";
import HomePageNavBrand from "./HomePageNavBrand";
import HomePageNavWrapper from "./HomePageNavWrapper";
import { StyledNavButtonContainer } from "../../styles/home";

const HomePageNav = () => (
  <HomePageNavWrapper>
    <HomePageNavBrand />
    <StyledNavButtonContainer>
      <HomePageNavButton value="Log In" path="/login" />
      <HomePageNavButton value="Sign Up" path="/signup" />
    </StyledNavButtonContainer>
  </HomePageNavWrapper>
);

export default HomePageNav;
