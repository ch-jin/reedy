import React from "react";
import HomePageNavButton from "./home_page_nav_button";
import HomePageNavBrand from "./home_page_nav_brand";
import HomePageNavWrapper from "./home_page_nav_wrapper";
import { StyledNavButtonContainer } from "../../styles/home";

class HomePageNav extends React.Component {
  constructor(props) {
    super(props);
    this.clearErrors = this.clearErrors.bind(this);
  }

  clearErrors() {
    this.props.clearErrors();
  }

  render() {
    return (
      <HomePageNavWrapper>
        <HomePageNavBrand />

        <StyledNavButtonContainer>
          <HomePageNavButton
            value="Log In"
            path="/login"
            clearErrors={this.clearErrors}
          />
          <HomePageNavButton
            value="Sign Up"
            path="/signup"
            clearErrors={this.clearErrors}
          />
        </StyledNavButtonContainer>
      </HomePageNavWrapper>
    );
  }
}

export default HomePageNav;
