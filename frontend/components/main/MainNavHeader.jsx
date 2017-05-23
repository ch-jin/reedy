import React from "react";
import { Link } from "react-router-dom";
import { StyledMainNavHeader, MainNavLogo } from "../../styles/main";

const MainNavHeader = props => {
  const { currentFeed, pathname, homePath } = props;

  const currentTitle = () => {
    if (pathname === "/discover") {
      return "Discover";
    } else if (pathname === "/subscriptions") {
      return "Subscriptions";
    } else if (currentFeed) {
      return currentFeed.title;
    } else {
      return null;
    }
  };

  return (
    <StyledMainNavHeader>
      <Link to={homePath}>
        <MainNavLogo src={window.greyLogoURL} />
      </Link>
      <h2 dangerouslySetInnerHTML={{ __html: currentTitle() }} />
    </StyledMainNavHeader>
  );
};

export default MainNavHeader;
