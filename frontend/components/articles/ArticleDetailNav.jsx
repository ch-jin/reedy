import React from "react";
import { StyledMainNavWrapper } from "../../styles/main";
import { BigCloseButton } from "../../styles/theme";
import {
  ArticleDetailFixedNav,
  StyledArticleDetailNav,
} from "../../styles/article";

const ArticleDetailNav = ({ handleCloseClick }) => (
  <ArticleDetailFixedNav>
    <StyledArticleDetailNav>
      <StyledMainNavWrapper>
        <BigCloseButton onClick={handleCloseClick} className="fa fa-times" />
      </StyledMainNavWrapper>
    </StyledArticleDetailNav>
  </ArticleDetailFixedNav>
);

export default ArticleDetailNav;
