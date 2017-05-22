import React from "react";
import { StyledNavBrand } from "../../styles/home";
import { FullHeightLink, Img } from "../../styles/theme";

const HomePageNavBrand = () => {
  return (
    <FullHeightLink href="/">
      <StyledNavBrand>
        <Img src={window.reedyLogoURL} />
        Reedy
      </StyledNavBrand>
    </FullHeightLink>
  );
};

export default HomePageNavBrand;
