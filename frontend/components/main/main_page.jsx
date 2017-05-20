import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainNavContainer from "./main_nav_container";
import MainSideNav from "./main_side_nav";
import ExploreContainer from "../explore/explore_container";
import { DefaultLoader } from "../../utils/loader_util";
import ArticleListContainer from "../articles/article_list_container";
import ArticleDetailContainer
  from "../articles/article_detail_container";
import { MainContentWrapper } from "../../styles/main";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.toggleDropdown();
    this.toggleArticleModal();
  }

  toggleArticleModal() {
    if (this.props.articleModal) {
      this.props.toggleArticleModal();
    }
  }

  toggleDropdown() {
    const { userDropdown, closeDropdown } = this.props;
    if (userDropdown) {
      closeDropdown();
    }
  }

  render() {
    const { loading, articleModal } = this.props;

    return (
      <div
        className="main-wrapper"
        onClick={this.handleClick.bind(this)}
      >
        {loading && <DefaultLoader />}
        <MainNavContainer />
        <MainSideNav />

        <Route
          path="/feeds/:feedId/articles/:articleId"
          component={ArticleDetailContainer}
        />

        <MainContentWrapper modalOpen={articleModal}>
          <Switch>
            <Route
              path="/feeds/:id/articles"
              component={ArticleListContainer}
            />
            <Route
              path="/feeds/:id"
              render={({ match }) => (
                <Redirect to={`/feeds/${match.params.id}/articles`} />
              )}
            />
            <Route path="/explore" component={ExploreContainer} />
            <Redirect to="/explore" />
          </Switch>
        </MainContentWrapper>
      </div>
    );
  }
}

export default MainPage;
