import React from "react";
import { Header, HeaderWrapper } from "../../styles/home";

const HomePageHeader = () => (
  <HeaderWrapper>
    <Header>
      Everything in One Place
    </Header>

    <p style={{ textAlign: "center" }}>
      All the content you love without the distractions
      <br />
      Your new one stop shop for RSS feeds
    </p>
  </HeaderWrapper>
);

export default HomePageHeader;
