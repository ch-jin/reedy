import React from "react";
import {
  StyledArticleItemWrapper,
  ArticleSmallImg,
  ImgWrapper,
  StyledArticleSnippetWrapper,
  ArticleMiniTitle,
  ArticleSnippet,
} from "../../styles/article";

const ArticleItem = ({ article }) => (
  <StyledArticleItemWrapper>
    <ImgWrapper>
      <ArticleSmallImg src={article.image} />
    </ImgWrapper>
    <StyledArticleSnippetWrapper>
      <ArticleMiniTitle
        dangerouslySetInnerHTML={{ __html: article.title }}
      />
      <ArticleSnippet
        dangerouslySetInnerHTML={{ __html: article.body }}
      />
    </StyledArticleSnippetWrapper>

  </StyledArticleItemWrapper>
);

export default ArticleItem;
