import React from "react";
import cn from "classnames";
import { Route } from "react-router-dom";
import Transition from "../../utils/transition_util";
import { ArticleLoader } from "../../utils/loader_util";
import {
  ShortFeed,
  ShortFeedWrapper,
  SubscribeWrapper,
  ShortLine,
  SubscribeHeader,
} from "../../styles/feed";
import { enterFade } from "../../styles/transitions";
import ArticleList from "../articles/ArticleList";
import ArticleDetailContainer from "../articles/ArticleDetailContainer";
import FeedHeader from "../feeds/FeedHeader";
import { initializeComponent } from "../../utils/initialize_util";
import ErrorPage from "../misc/ErrorPage";
import { PageHeaderIcon } from "../../styles/theme";

class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = [];
    this.state = { initialLoad: true };
    this.renderSubArticles = this.renderSubArticles.bind(this);
  }

  componentDidMount() {
    this.props.resetCurrentFeed();
    initializeComponent(this.props);
  }

  componentWillReceiveProps() {
    this.timeoutSubs();
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  render() {
    const { loading } = this.props;
    if (this.props.feedsWithArticles.length) {
      return (
        <Transition identifier={"subscriptions"} {...enterFade}>
          <SubscribeWrapper>
            <SubscribeHeader>
              <PageHeaderIcon className={cn("fa", "fa-list-ul")} />Subscriptions
            </SubscribeHeader>
            {this.renderSubArticles()}
            <Route
              path="/subscriptions/:feedId/articles/:articleId"
              render={() => (
                <ArticleDetailContainer redirectToParent="/subscriptions" />
              )}
            />
          </SubscribeWrapper>
        </Transition>
      );
    } else if (loading || this.state.initialLoad) {
      return <ArticleLoader />;
    } else {
      return (
        <ErrorPage>
          Oops! Looks like you have no subscriptions!
          <br />
          <br />
          Click below to browse feeds:
        </ErrorPage>
      );
    }
  }

  renderSubArticles() {
    return this.props.feedsWithArticles.map((articles, idx) => {
      const feed = this.props.feeds[articles[0].feedId];
      return (
        <ShortFeedWrapper key={`sub-article-group-${idx}`}>
          <ShortFeed>
            <FeedHeader feed={feed} notFeed />
            <ShortLine />
            <ArticleList
              imageOverride
              path="/subscriptions"
              articles={articles}
            />
          </ShortFeed>
        </ShortFeedWrapper>
      );
    });
  }

  timeoutSubs() {
    this.timeout.push(
      setTimeout(() => this.setState({ initialLoad: false }), 1000)
    );
  }

  clearTimeout() {
    this.timeout.forEach(timeoutId => clearTimeout(timeoutId));
  }
}

export default Subscriptions;
