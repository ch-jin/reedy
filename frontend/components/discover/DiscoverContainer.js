import { connect } from "react-redux";
import Discover from "./Discover";
import { discoverFeeds } from "../../selectors/feed_selectors";
import {
  fetchDiscoverFeeds,
  receiveCurrentFeed,
  fetchFollowedFeeds,
} from "../../actions/feed_actions";
import { fetchAllCollections } from "../../actions/collection_actions";

const mapStateToProps = state => ({
  feeds: discoverFeeds(state),
  loading: state.loading.loadingFeeds,
});

const mapDispatchToProps = dispatch => ({
  fetchAllCollections: () => dispatch(fetchAllCollections()),
  fetchFollowedFeeds: () => dispatch(fetchFollowedFeeds()),
  fetchDiscoverFeeds: query => dispatch(fetchDiscoverFeeds(query)),
  resetCurrentFeed: () => dispatch(receiveCurrentFeed(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
