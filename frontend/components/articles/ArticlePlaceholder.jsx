import React from "react";
import {
  ArticlePlaceholderItemWrapper,
  ArticlePlaceholderImg,
  ArticlePlaceholderSnippetWrapper,
  ArticlePlaceholderTitle,
  ArticlePlaceholderSnippet,
} from "../../styles/article";

const ArticlePlaceholder = () => (
  <ArticlePlaceholderItemWrapper>
    <ArticlePlaceholderImg />
    <ArticlePlaceholderSnippetWrapper>
      <ArticlePlaceholderTitle />
      <ArticlePlaceholderSnippet />
      <ArticlePlaceholderSnippet />
      <ArticlePlaceholderSnippet />
    </ArticlePlaceholderSnippetWrapper>
  </ArticlePlaceholderItemWrapper>
);

export default ArticlePlaceholder;
