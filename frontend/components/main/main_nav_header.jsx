import React from "react";
import { StyledMainNavHeader } from "../../styles/main";

const MainNavHeader = props => {
  console.log(props);
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
      <h2 dangerouslySetInnerHTML={{ __html: currentTitle() }} />
    </StyledMainNavHeader>
  );
};

export default MainNavHeader;
