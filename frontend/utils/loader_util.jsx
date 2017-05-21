import React from "react";
import {
  FirstDot,
  SecondDot,
  ThirdDot,
  LoaderContainer,
  ArticleLoaderContainer,
} from "../styles/loader";

export const DefaultLoader = () => (
  <LoaderContainer>
    <FirstDot />
    <SecondDot />
    <ThirdDot />
  </LoaderContainer>
);

export const ArticleLoader = () => (
  <ArticleLoaderContainer>
    <FirstDot />
    <SecondDot />
    <ThirdDot />
  </ArticleLoaderContainer>
);
