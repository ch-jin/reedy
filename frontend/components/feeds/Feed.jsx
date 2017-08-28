import React from "react";
import debounce from "lodash/debounce";
import Transition from "../../utils/transition_util";
import { Route } from "react-router-dom";
import { fade } from "../../styles/transitions";
import ArticleList from "../articles/ArticleList";
import { scrollMainContentWrapperToTop } from "../../utils/scroll_util";
import { StyledFeedWrapper } from "../../styles/feed";
import FeedHeader from "./FeedHeader";
import ArticleDetailContainer from "../articles/ArticleDetailContainer";

const defaultState = { offset: 0 };

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleScroll = debounce(this.handleScroll.bind(this), 200);
  }

  componentDidMount() {
    scrollMainContentWrapperToTop();
    const {
      feedId,
      feeds,
      fetchFollowedFeeds,
      fetchArticlesFromFeed,
      fetchFeed,
    } = this.props;

    if (!feeds.length) {
      fetchFollowedFeeds();
    }
    fetchFeed(feedId);
    fetchArticlesFromFeed(feedId);

    this.scrollNode = document.querySelector("#main-content-wrapper");
    this.scrollNode.addEventListener("scroll", this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.feedId !== this.props.feedId) {
      this.loadNewFeed(nextProps);
    }
  }

  loadNewFeed(nextProps) {
    scrollMainContentWrapperToTop();
    this.props.fetchFeed(nextProps.feedId);
    this.props.fetchArticlesFromFeed(nextProps.feedId);
    this.setState(defaultState);
  }

  componentWillUpdate(_, nextState) {
    if (nextState.offset !== this.state.offset && nextState.offset !== 0) {
      this.props.fetchMoreArticles(this.props.feedId, nextState.offset);
    }
  }

  componentWillUnmount() {
    this.props.resetArticles();
    this.scrollNode.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    const element = e.target;
    const scrollDiff =
      element.scrollHeight - (element.scrollTop + element.clientHeight);
    if (scrollDiff < 50) {
      const newOffset = this.state.offset + 10;
      this.setState({ offset: newOffset });
    }
  }

  render() {
    const { feed, articles, match, followed } = this.props;

    if (feed) {
      return (
        <Transition identifier={"feed-show" + feed.id} {...fade}>
          <StyledFeedWrapper ref={this.bindRef}>
            <FeedHeader feed={feed} followed={followed} />
            <ArticleList path="/feeds" articles={articles} />
          </StyledFeedWrapper>
          <Route
            path="/feeds/:feedId/articles/:articleId"
            render={() =>
              <ArticleDetailContainer redirectToParent={match.url} />}
          />
        </Transition>
      );
    } else {
      return null;
    }
  }
}

export default Feed;
