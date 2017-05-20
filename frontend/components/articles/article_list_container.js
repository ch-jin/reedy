import { connect } from "react-redux";
import ArticleList from "./article_list";
import { fetchArticlesFromFeed } from "../../actions/article_actions";
import { allArticles } from "../../selectors/article_selectors";
import { allFeeds } from "../../selectors/feed_selectors";
import {
  fetchAllFeeds,
  receiveCurrentFeed,
} from "../../actions/feed_actions";

const mapStateToProps = (state, { match }) => ({
  id: match.params.id,
  currentFeedId: state.feeds.current,
  feeds: allFeeds(state),
  articles: allArticles(state),
  loading: state.loading.loadingArticles,
  articleModal: state.modal.articleModal,
});

const mapDispatchToProps = dispatch => ({
  setCurrentFeed: id => dispatch(receiveCurrentFeed(id)),
  fetchArticles: id => dispatch(fetchArticlesFromFeed(id)),
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticleList
);
