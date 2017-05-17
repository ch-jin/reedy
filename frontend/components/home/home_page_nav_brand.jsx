import React from "react";
import { StyledNavBrand, NavBrandImage } from "../../styles/home";
import { FullHeightLink } from "../../styles/theme";

const HomePageNavBrand = () => {
  return (
    <FullHeightLink href="/">
      <StyledNavBrand>
        <NavBrandImage src={window.reedyLogoURL} />
        Reedy
      </StyledNavBrand>
    </FullHeightLink>
  );
};

export default HomePageNavBrand;
