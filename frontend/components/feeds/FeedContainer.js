import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { currentFeed } from "../../selectors/feed_selectors";
import { allArticles } from "../../selectors/article_selectors";
import { fetchArticlesFromFeed } from "../../actions/article_actions";
import { fetchFeed } from "../../actions/feed_actions";
import Feed from "./Feed";

const mapStateToProps = (state, { match }) => ({
  feedId: match.params.feedId,
  feed: currentFeed(state),
  articles: allArticles(state),
});

const mapDispatchToProps = dispatch => ({
  fetchArticlesFromFeed: feedId => dispatch(fetchArticlesFromFeed(feedId)),
  fetchFeed: feedId => dispatch(fetchFeed(feedId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feed));
