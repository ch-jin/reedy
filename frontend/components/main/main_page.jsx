import React from "react";
import MainNavContainer from "./main_nav_container";
import MainSideNav from "./main_side_nav";

const MainPage = props => (
  <div className="main-wrapper">
    <MainNavContainer />
    <MainSideNav />
  </div>
);

export default MainPage;
