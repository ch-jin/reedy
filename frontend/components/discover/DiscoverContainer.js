import { connect } from "react-redux";
import Discover from "./Discover";
import { allFeeds } from "../../selectors/feed_selectors";

const mapStateToProps = state => ({
  feeds: allFeeds(state),
  loading: state.loading.loadingFeeds,
});

export default connect(mapStateToProps)(Discover);
