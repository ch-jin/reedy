import { connect } from "react-redux";
import { fetchAllCollections } from "../../actions/collection_actions";
import { fetchFollowedArticles } from "../../actions/article_actions";
import { fetchFollowedFeeds } from "../../actions/feed_actions";
import { loadingSubscriptions } from "../../selectors/loading_selectors";
import Subscriptions from "./Subscriptions";

const mapStateToProps = state => ({
  loading: loadingSubscriptions(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllCollections: () => dispatch(fetchAllCollections()),
  fetchFollowedArticles: () => dispatch(fetchFollowedArticles()),
  fetchFollowedFeeds: () => dispatch(fetchFollowedFeeds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
