import React from "react";
import MainNavContainer from "./main_nav_container";
import MainSideNav from "./main_side_nav";
import ArticleList from "../articles/article_list";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { userDropdown, toggleUserDropdown } = this.props;
    if (userDropdown) {
      toggleUserDropdown(!userDropdown);
    }
  }

  render() {
    return (
      <div
        className="main-wrapper"
        onClick={this.handleClick.bind(this)}
      >
        <MainNavContainer />
        <MainSideNav />
        <ArticleList />
      </div>
    );
  }
}

export default MainPage;
