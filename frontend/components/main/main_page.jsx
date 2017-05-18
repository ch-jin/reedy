import React from "react";
import MainNav from "./main_nav";
import MainSideNav from "./main_side_nav";
import ArticleList from "../articles/article_list";

const MainPage = props => (
  <div className="main-wrapper">
    <MainNav />
    <MainSideNav />
    <ArticleList />
  </div>
);

export default MainPage;
