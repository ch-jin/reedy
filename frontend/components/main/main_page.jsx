import React from "react";
import MainNavContainer from "./main_nav_container";
import MainSideNav from "./main_side_nav";
import ArticleList from "../articles/article_list";
import Loader from "../../utils/loader_util";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { userDropdown, closeDropdown } = this.props;
    if (userDropdown) {
      closeDropdown();
    }
  }

  render() {
    const { loading } = this.props;
    return (
      <div
        className="main-wrapper"
        onClick={this.handleClick.bind(this)}
      >
        {loading && <Loader />}
        <MainNavContainer />
        <MainSideNav />
        <ArticleList />
      </div>
    );
  }
}

export default MainPage;
