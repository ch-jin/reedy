import React from "react";
import { StyledArticleModal } from "../../styles/article";

const ArticleModal = ({ children, active }) => (
  <StyledArticleModal active={active}>
    {children}
  </StyledArticleModal>
);

export default ArticleModal;
