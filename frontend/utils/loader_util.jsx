import React from "react";
import {
  Loader,
  FirstDot,
  SecondDot,
  ThirdDot,
  Dot,
  LoaderContainer,
} from "../styles/loader";

export default () => (
  <LoaderContainer>
    <FirstDot />
    <SecondDot />
    <ThirdDot />
    Loading
  </LoaderContainer>
);
