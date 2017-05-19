import React from "react";
import {
  FirstDot,
  SecondDot,
  ThirdDot,
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
