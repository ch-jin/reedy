import React from "react";
import { Link } from "react-router-dom";
import {
  StyledArticleItemWrapper,
  ArticleSmallImg,
  ImgWrapper,
  StyledArticleSnippetWrapper,
  ArticleMiniTitle,
  ArticleSnippet,
} from "../../styles/article";

const ArticleItem = ({ article, feedId, toggleArticleModal }) => (
  <StyledArticleItemWrapper>
    <Link to={`/feeds/${feedId}/articles/${article.id}`}>
      <ImgWrapper>
        <ArticleSmallImg src={article.image} />
      </ImgWrapper>
    </Link>
    <StyledArticleSnippetWrapper>
      <Link to={`/feeds/${feedId}/articles/${article.id}`}>
        <ArticleMiniTitle
          dangerouslySetInnerHTML={{ __html: article.title }}
        />
      </Link>
      <ArticleSnippet
        dangerouslySetInnerHTML={{ __html: article.body }}
      />
    </StyledArticleSnippetWrapper>

  </StyledArticleItemWrapper>
);

export default ArticleItem;
