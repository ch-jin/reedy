import React from "react";
import Transition from "../../utils/transition_util";
import { pop } from "../../styles/transitions";
import { StyledActionBar, StyledBookmark } from "../../styles/article";

const ActionBar = props => {
  const { saved, saveArticle, unsaveArticle, articleId } = props;

  const handleClick = e => {
    e.preventDefault();
    saved ? unsaveArticle(articleId) : saveArticle(articleId);
  };

  return (
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
};

export default ActionBar;
