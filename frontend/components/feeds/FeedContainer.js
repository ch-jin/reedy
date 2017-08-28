import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { currentFeed, allFeeds } from "../../selectors/feed_selectors";
import { allArticles } from "../../selectors/article_selectors";
import {
  fetchArticlesFromFeed,
  resetArticles,
  fetchMoreArticles,
} from "../../actions/article_actions";
import { fetchFeed, fetchFollowedFeeds } from "../../actions/feed_actions";
import Feed from "./Feed";

const mapStateToProps = (state, { match }) => ({
  feedId: parseInt(match.params.feedId),
  feeds: allFeeds(state),
  feed: currentFeed(state),
  articles: allArticles(state),
});

const mapDispatchToProps = dispatch => ({
  fetchArticlesFromFeed: feedId => dispatch(fetchArticlesFromFeed(feedId)),
  fetchMoreArticles: (feedId, offset) =>
    dispatch(fetchMoreArticles(feedId, offset)),
  fetchFeed: feedId => dispatch(fetchFeed(feedId)),
  fetchFollowedFeeds: () => dispatch(fetchFollowedFeeds()),
  resetCurrentFeed: () => dispatch(receiveCurrentFeed(null)),
  resetArticles: () => dispatch(resetArticles()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feed));
