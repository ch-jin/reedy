import React from "react";
import HomePageNavButton from "./home_page_nav_button";
import HomePageNavBrand from "./home_page_nav_brand";
import HomePageNavWrapper from "./home_page_nav_wrapper";
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
