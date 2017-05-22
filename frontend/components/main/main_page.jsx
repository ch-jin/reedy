import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainNavContainer from "./main_nav_container";
import MainSideNav from "./main_side_nav";
import ExploreContainer from "../explore/explore_container";
import { ArticleLoader } from "../../utils/loader_util";
import ArticleListContainer from "../articles/article_list_container";
import ArticleDetailContainer
  from "../articles/article_detail_container";
import { MainContentWrapper } from "../../styles/main";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleEventClick = this.handleEventClick.bind(this);
    this.toggleArticleModal = this.toggleArticleModal.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCollections();
  }

  handleEventClick() {
    this.toggleDropdown();
    this.toggleArticleModal();
  }

  toggleArticleModal() {
    if (this.props.articleModal) {
      this.props.toggleArticleModal();
    }
  }

  toggleDropdown() {
    const { anyDropdownActive, closeAllDropdowns } = this.props;
    console.log("anyDropdownActive", anyDropdownActive);
    if (anyDropdownActive) {
      closeAllDropdowns();
    }
  }

  render() {
    const { loading, articleModal } = this.props;

    return (
      <div className="main-wrapper" onClick={this.handleEventClick}>

        {loading && <ArticleLoader />}

        <MainSideNav articleModal={articleModal} />

        <MainContentWrapper modalOpen={articleModal}>
          <MainNavContainer articleModal={articleModal} />

          <Route
            path="/feeds/:feedId/articles/:articleId"
            component={ArticleDetailContainer}
          />

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
