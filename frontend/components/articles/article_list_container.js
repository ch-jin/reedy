import { connect } from "react-redux";
import ArticleList from "./article_list";
import { fetchArticlesFromFeed } from "../../actions/article_actions";
import { allArticles } from "../../selectors/article_selectors";

const mapStateToProps = (state, { match }) => ({
  feed: state.feeds.all[match.params.id],
  articles: allArticles(state),
  loading: state.loading.loadingArticles,
});

const mapDispatchToProps = (dispatch, { match, feeds }) => ({
  fetchArticles: feedId => dispatch(fetchArticlesFromFeed(feedId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticleList
);
