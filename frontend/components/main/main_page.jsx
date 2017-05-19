import React from "react";
import { Route } from "react-router-dom";
import MainNavContainer from "./main_nav_container";
import MainSideNav from "./main_side_nav";
import ExploreContainer from "../explore/explore_container";
import Loader from "../../utils/loader_util";
import ArticleListContainer from "../articles/article_list_container";

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
        <Route path="/feeds/:id" component={ArticleListContainer} />
        <Route exact path="/" component={ExploreContainer} />
      </div>
    );
  }
}

export default MainPage;
