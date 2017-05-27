import React from "react";
import Transition from "../../utils/transition_util";
import { articleNavSlideLeft } from "../../styles/transitions";
import { StyledMainNavWrapper } from "../../styles/main";
import { BigCloseButton } from "../../styles/theme";
import {
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
        <DetailNavIcon
          onClick={handleSaveClick}
          saved={saved}
          className="fa fa-bookmark"
        />}
      {!saved &&
        <DetailNavIcon
          onClick={handleSaveClick}
          saved={saved}
          className="fa fa-bookmark-o"
        />}
      <a target="_blank" className="no-decoration-color" href={url}>
        <DetailNavIcon className="fa fa-external-link" />
      </a>
    </DetailNavLeftWrapper>
  );

  return (
    <Transition identifier="article-detail-nav" {...articleNavSlideLeft}>
      <StyledArticleDetailNav>
        <StyledMainNavWrapper>
          {renderLeftLinks()}
          <BigCloseButton onClick={handleCloseClick} className="fa fa-times" />
        </StyledMainNavWrapper>
      </StyledArticleDetailNav>
    </Transition>
  );
};

export default ArticleDetailNav;
