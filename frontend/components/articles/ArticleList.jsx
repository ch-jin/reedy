import React from "react";
import Transition from "../../utils/transition_util";
import { fade } from "../../styles/transitions";
import ArticleItem from "./ArticleItem";
import { StyledArticleListWrapper } from "../../styles/article";

const ArticleList = props => {
  const { articles, toggleArticleModal } = props;
  const numImages = articles.filter(({ image }) => Boolean(image)).length;

  return (
    <StyledArticleListWrapper>
      {articles.map(article => (
        <ArticleItem
          key={"article" + article.id}
          feedId={article.feedId}
          article={article}
          hasImage={numImages > 5}
          toggleArticleModal={toggleArticleModal}
        />
      ))}
    </StyledArticleListWrapper>
  );
};

export default ArticleList;
