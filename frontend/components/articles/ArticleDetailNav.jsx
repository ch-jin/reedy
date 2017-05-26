import React from "react";
import Transition from "../../utils/transition_util";
import { pop } from "../../styles/transitions";
import { StyledMainNavWrapper } from "../../styles/main";
import { BigCloseButton } from "../../styles/theme";
import {
  ArticleDetailFixedNav,
  StyledArticleDetailNav,
  DetailNavLeftWrapper,
  DetailNavIcon,
} from "../../styles/article";

const ArticleDetailNav = ({
  handleCloseClick,
  saved,
  url,
  handleSaveClick,
}) => {
  const renderLeftLinks = () => (
    <DetailNavLeftWrapper>
      {saved &&
        <Transition identifier="article-bookmarked" {...pop}>
          <DetailNavIcon
            onClick={handleSaveClick}
            saved={saved}
            className="fa fa-bookmark"
          />
        </Transition>}
      {!saved &&
        <Transition identifier="article-no-bookmark" {...pop}>
          <DetailNavIcon
            onClick={handleSaveClick}
            saved={saved}
            className="fa fa-bookmark-o"
          />
        </Transition>}
      <a target="_blank" className="no-decoration-color" href={url}>
        <DetailNavIcon className="fa fa-external-link" />
      </a>
    </DetailNavLeftWrapper>
  );

  return (
    <ArticleDetailFixedNav>
      <StyledArticleDetailNav>
        <StyledMainNavWrapper>
          {renderLeftLinks()}
          <BigCloseButton onClick={handleCloseClick} className="fa fa-times" />
        </StyledMainNavWrapper>
      </StyledArticleDetailNav>
    </ArticleDetailFixedNav>
  );
};

export default ArticleDetailNav;
