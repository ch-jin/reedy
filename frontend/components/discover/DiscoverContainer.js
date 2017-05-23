import { connect } from "react-redux";
import Discover from "./Discover";
import { allFeeds } from "../../selectors/feed_selectors";
import { fetchDiscoverFeeds } from "../../actions/feed_actions";

const mapStateToProps = state => ({
  feeds: allFeeds(state),
  loading: state.loading.loadingFeeds,
});

const mapDispatchToProps = dispatch => ({
  fetchDiscoverFeeds: () => dispatch(fetchDiscoverFeeds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
