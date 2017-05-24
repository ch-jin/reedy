import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllCollections } from "../../actions/collection_actions";
import { fetchFollowedArticles } from "../../actions/article_actions";
import {
  fetchFollowedFeeds,
  receiveCurrentFeed,
} from "../../actions/feed_actions";
import { toggleArticleModal } from "../../actions/modal_actions";
import { feedsWithArticles } from "../../selectors/feed_selectors";
import { loadingSubscriptions } from "../../selectors/loading_selectors";
import Subscriptions from "./Subscriptions";

const mapStateToProps = state => ({
  feeds: state.feeds.all,
  feedsWithArticles: feedsWithArticles(state),
  loading: loadingSubscriptions(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllCollections: () => dispatch(fetchAllCollections()),
  fetchFollowedArticles: () => dispatch(fetchFollowedArticles()),
  fetchFollowedFeeds: () => dispatch(fetchFollowedFeeds()),
  toggleArticleModal: () => dispatch(toggleArticleModal()),
  resetCurrentFeed: () => dispatch(receiveCurrentFeed(null)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Subscriptions)
);
