import React from "react";
import ArticleItem from "./ArticleItem";
import { StyledArticleListWrapper } from "../../styles/article";

const ArticleList = props => {
  const { path, articles, toggleArticleModal } = props;
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
          path={path}
        />
      ))}
    </StyledArticleListWrapper>
  );
};

export default ArticleList;
