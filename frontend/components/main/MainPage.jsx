import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainNavContainer from "./MainNavContainer";
import MainSideNav from "./MainSideNav";
import ExploreContainer from "../explore/ExploreContainer";
import { ArticleLoader } from "../../utils/loader_util";
import ArticleListContainer from "../articles/ArticleListContainer";
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

    if (anyDropdownActive) {
      closeAllDropdowns();
    }
  }

  render() {
    const { loading, articleModal } = this.props;

    return (
      <div id="main-wrapper" onClick={this.handleEventClick}>

        {loading && <ArticleLoader />}

        <MainSideNav articleModal={articleModal} />

        <MainContentWrapper
          id="main-content-wrapper"
          modalOpen={articleModal}
        >
          <MainNavContainer articleModal={articleModal} />

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
