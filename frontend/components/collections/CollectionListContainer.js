import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { allCollections } from "../../selectors/collection_selectors";
import CollectionList from "./CollectionList";
import { allFeeds, currentFeedId } from "../../selectors/feed_selectors";

const mapStateToProps = state => ({
  feeds: state.feeds.all,
  collections: allCollections(state),
  hasFeeds: allFeeds(state).length > 0,
  currentFeedId: currentFeedId(state),
});

export default withRouter(connect(mapStateToProps)(CollectionList));
