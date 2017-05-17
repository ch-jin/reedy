import React from "react";
import { Link } from "react-router-dom";

import {
  StyledHomeNavWrapper,
  StyledHomeNav,
  StyledNavBrand,
  StyledNavButtonContainer,
  StyledNavButton,
  NavBrandImage,
  FixedNav,
} from "../../styles/home";
import { FullHeightLink } from "../../styles/theme";

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
      <FixedNav>
        <StyledHomeNavWrapper>
          <StyledHomeNav>
            <FullHeightLink href="/#/">
              <StyledNavBrand>
                <NavBrandImage src={window.reedyLogoURL} />
                Reedy
              </StyledNavBrand>
            </FullHeightLink>

            <StyledNavButtonContainer>
              <Link onClick={this.clearErrors} to="/login">
                <StyledNavButton>
                  Log In
                </StyledNavButton>
              </Link>
              <Link onClick={this.clearErrors} to="/signup">
                <StyledNavButton>
                  Sign Up
                </StyledNavButton>
              </Link>
            </StyledNavButtonContainer>
          </StyledHomeNav>
        </StyledHomeNavWrapper>
      </FixedNav>
    );
  }
}

export default HomePageNav;
