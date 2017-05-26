import React from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Transition from "../../utils/transition_util";
import { modalFade } from "../../styles/transitions";
import MainNavContainer from "./MainNavContainer";
import MainSideNav from "./MainSideNav";
import DiscoverContainer from "../discover/DiscoverContainer";
import SubscriptionsContainer from "../subscriptions/SubscriptionsContainer";
import FeedContainer from "../feeds/FeedContainer";
import SavedArticlesContainer from "../articles/SavedArticlesContainer";
import CollectionShowArticlesContainer
  from "../collections/CollectionShowArticlesContainer";
import { ArticleLoader } from "../../utils/loader_util";
import { MainContentWrapper } from "../../styles/main";
import { StyledArticleModal } from "../../styles/article";
import { hasCollections } from "../../selectors/collection_selectors";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pathname: "" };

    this.handleEventClick = this.handleEventClick.bind(this);
    this.toggleArticleModal = this.toggleArticleModal.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCollections().then(() => {
      if (hasCollections(this.props.collections)) {
        this.setState({ pathname: "/subscriptions" });
      } else {
        this.setState({ pathname: "/discover" });
      }
    });
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
    anyDropdownActive && closeAllDropdowns();
  }

  render() {
    const { loading, articleModal } = this.props;
    const { pathname } = this.state;
    const collectionsPresent = hasCollections(this.props.collections);

    return (
      <div id="main-wrapper" onClick={this.handleEventClick}>

        {loading && <ArticleLoader />}

        <MainSideNav
          collectionsPresent={collectionsPresent}
          articleModal={articleModal}
        />

        <MainContentWrapper id="main-content-wrapper" modalOpen={articleModal}>

          <MainNavContainer articleModal={articleModal} />
          <Transition
            identifier={"modal" + articleModal.toString()}
            {...modalFade}
          >
            {articleModal && <StyledArticleModal />}
          </Transition>

          <Switch>
            <Route path="/subscriptions" component={SubscriptionsContainer} />
            <Route path="/discover" component={DiscoverContainer} />
            <Route path="/saved" component={SavedArticlesContainer} />
            <Route path="/feeds/:feedId" component={FeedContainer} />
            <Route
              path="/collections/:collectionId/articles"
              component={CollectionShowArticlesContainer}
            />
            {pathname === "/subscriptions" && <Redirect to="/subscriptions" />}
            {pathname === "/discover" && <Redirect to="/discover" />}
          </Switch>
        </MainContentWrapper>
      </div>
    );
  }
}

export default withRouter(MainPage);
