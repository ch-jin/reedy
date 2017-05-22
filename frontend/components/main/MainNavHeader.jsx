import React from "react";
import { Link } from "react-router-dom";
import { StyledMainNavHeader, MainNavLogo } from "../../styles/main";

const MainNavHeader = props => {
  const { currentFeed, pathname } = props;
  const currentTitle = () => {
    if (pathname === "/explore" || pathname === "/") {
      return "Explore";
    } else if (currentFeed) {
      return currentFeed.title;
    } else {
      return null;
    }
  };

  return (
    <StyledMainNavHeader>
      <Link to="/explore">
        <MainNavLogo src={window.greyLogoURL} />
      </Link>
      <h2 dangerouslySetInnerHTML={{ __html: currentTitle() }} />
    </StyledMainNavHeader>
  );
};

export default MainNavHeader;
