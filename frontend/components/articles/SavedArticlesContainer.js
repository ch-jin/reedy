import { connect } from "react-redux";
import SavedArticles from "./SavedArticles";
import { allSavedArticles } from "../../selectors/article_selectors";
import { loadingAllStates } from "../../selectors/loading_selectors";
import {
  fetchSavedArticles,
  resetArticles,
} from "../../actions/article_actions";
import {
  fetchFollowedFeeds,
  receiveCurrentFeed,
} from "../../actions/feed_actions";
import { fetchAllCollections } from "../../actions/collection_actions";

const mapStateToProps = state => ({
  articles: allSavedArticles(state),
  loading: loadingAllStates(state),
});

const mapDispatchToProps = dispatch => ({
  fetchSavedArticles: () => dispatch(fetchSavedArticles()),
  fetchAllCollections: () => dispatch(fetchAllCollections()),
  fetchFollowedFeeds: () => dispatch(fetchFollowedFeeds()),
  resetArticles: () => dispatch(resetArticles()),
  resetCurrentFeed: () => dispatch(receiveCurrentFeed(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedArticles);
