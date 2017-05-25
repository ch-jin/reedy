import React from "react";
import { StyledNavActionBar, BigBookmark } from "../../styles/article";

const ArticleDetailActionBar = props => (
  <StyledActionBar>
    {saved &&
      <Transition identifier={saved.toString()} {...pop}>
        <StyledBookmark onClick={handleClick} className="fa fa-bookmark" />
      </Transition>}
    {!saved &&
      <Transition identifier={saved.toString()} {...pop}>
        <StyledBookmark onClick={handleClick} className="fa fa-bookmark-o" />
      </Transition>}
  </StyledActionBar>
);

export default ArticleDetailActionBar;
