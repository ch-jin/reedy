import { connect } from "react-redux";
import ArticleList from "./article_list";
import { fetchArticlesFromFeed } from "../../actions/article_actions";
import { allArticles } from "../../selectors/article_selectors";
import { allFeeds } from "../../selectors/feed_selectors";
import { fetchAllFeeds } from "../../actions/feed_actions";

const mapStateToProps = (state, { match }) => ({
  feedId: match.params.id,
  feeds: allFeeds(state),
  articles: allArticles(state),
  loading: state.loading.loadingArticles,
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: feedId => dispatch(fetchArticlesFromFeed(feedId)),
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticleList
);
