import React from "react";
import { FixedNav, HomeNavWrapper, HomeNav } from "../../styles/home";

const HomePageNavWrapper = ({ children }) => (
  <FixedNav>
    <HomeNavWrapper>
      <HomeNav>
        {children}
      </HomeNav>
    </HomeNavWrapper>
  </FixedNav>
);

export default HomePageNavWrapper;
