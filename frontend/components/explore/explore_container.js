import { connect } from "react-redux";
import Explore from "./explore";
import {
  fetchAllFeeds,
  receiveCurrentFeed,
} from "../../actions/feed_actions";
import { allFeeds } from "../../selectors/feed_selectors";

const mapStateToProps = state => ({
  feeds: allFeeds(state),
  loading: state.loading.loadingExplore,
});

const mapDispatchToProps = dispatch => ({
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
