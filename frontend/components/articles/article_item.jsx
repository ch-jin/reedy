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

const ArticleItem = ({ article, feedId }) => (
  <Link
    className="no-decoration"
    to={`/feeds/${feedId}/articles/${article.id}`}
  >
    <StyledArticleItemWrapper>
      <ImgWrapper hasImage={Boolean(article.image)}>
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
  </Link>
);

export default ArticleItem;
