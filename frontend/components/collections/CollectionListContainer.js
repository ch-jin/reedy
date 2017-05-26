import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  allCollections,
  currentCollectionId,
} from "../../selectors/collection_selectors";
import { allFeedsNormalized } from "../../selectors/feed_selectors";
import CollectionList from "./CollectionList";
import { allFeeds, currentFeedId } from "../../selectors/feed_selectors";

const mapStateToProps = state => ({
  feeds: allFeedsNormalized(state),
  collections: allCollections(state),
  currentCollectionId: currentCollectionId(state),
  hasFeeds: allFeeds(state).length > 0,
  currentFeedId: currentFeedId(state),
});

export default withRouter(connect(mapStateToProps)(CollectionList));
