import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainNavContainer from "./MainNavContainer";
import MainSideNav from "./MainSideNav";
import DiscoverContainer from "../discover/DiscoverContainer";
import SubscriptionsContainer from "../subscriptions/SubscriptionsContainer";
import FeedContainer from "../feeds/FeedContainer";
import { ArticleLoader } from "../../utils/loader_util";
import { MainContentWrapper } from "../../styles/main";
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
    return (
      <div id="main-wrapper" onClick={this.handleEventClick}>

        {!loading && <ArticleLoader />}

        <MainSideNav articleModal={articleModal} />
        <MainContentWrapper id="main-content-wrapper" modalOpen={articleModal}>

          <MainNavContainer articleModal={articleModal} homePath={pathname} />

          <Switch>
            <Route path="/subscriptions" component={SubscriptionsContainer} />
            <Route path="/discover" component={DiscoverContainer} />
            <Route path="/feeds/:feedId" component={FeedContainer} />
            {pathname === "/subscriptions" && <Redirect to="/subscriptions" />}
            {pathname === "/discover" && <Redirect to="/discover" />}
          </Switch>

        </MainContentWrapper>
      </div>
    );
  }
}

export default MainPage;
