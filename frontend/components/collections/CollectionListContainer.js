import { connect } from "react-redux";
import merge from "lodash/merge";
import { withRouter } from "react-router-dom";
import {
  allCollections,
  currentCollectionId,
} from "../../selectors/collection_selectors";
import CollectionList from "./CollectionList";
import { allFeeds, currentFeedId } from "../../selectors/feed_selectors";

const mapStateToProps = state => ({
  feeds: merge({}, state.feeds.all, state.feeds.current, state.feeds.discover),
  collections: allCollections(state),
  currentCollectionId: currentCollectionId(state),
  hasFeeds: allFeeds(state).length > 0,
  currentFeedId: currentFeedId(state),
});

export default withRouter(connect(mapStateToProps)(CollectionList));
