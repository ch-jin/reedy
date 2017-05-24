import React from "react";
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
import { fade } from "../../styles/transitions";
import ArticleList from "../articles/ArticleList";
import ArticleDetailContainer from "../articles/ArticleDetailContainer";
import FeedHeader from "../feeds/FeedHeader";
import { initializeComponent } from "../../utils/initialize_util";

class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.renderSubArticles = this.renderSubArticles.bind(this);
  }

  componentDidMount() {
    this.props.resetCurrentFeed();
    initializeComponent(this.props);
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <ArticleLoader />;
    } else {
      return (
        <Transition identifier={"subscriptions"} {...fade}>
          <SubscribeWrapper>
            <SubscribeHeader>
              Subscriptions
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
    }
  }

  renderSubArticles() {
    return this.props.feedsWithArticles.map(articles => {
      const feed = this.props.feeds[articles[0].feedId];

      return (
        <ShortFeedWrapper>
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
}

export default Subscriptions;
