import React from "react";
import { Link } from "react-router-dom";
import { StyledNavButton } from "../../styles/home";

const HomePageNavButton = ({ clearErrors, path, value }) => {
  return (
    <Link onClick={clearErrors} to={path}>
      <StyledNavButton>
        {value}
      </StyledNavButton>
    </Link>
  );
};

export default HomePageNavButton;
