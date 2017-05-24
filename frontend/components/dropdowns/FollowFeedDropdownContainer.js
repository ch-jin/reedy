import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { allCollections } from "../../utils/collections_util";
import {
  addFeedToCollection,
  deleteFeedFromCollection,
} from "../../actions/collection_actions";
import FollowFeedDropdown from "./FollowFeedDropdown";

const mapStateToProps = (state, { match }) => ({
  collections: allCollections(state),
  feedId: parseInt(match.params.feedId),
  active: state.dropdown.followFeedDropdown,
});

const mapDispatchToProps = dispatch => ({
  addFeedToCollection: collectionFeed =>
    dispatch(addFeedToCollection(collectionFeed)),

  deleteFeedFromCollection: collectionFeed =>
    dispatch(deleteFeedFromCollection(collectionFeed)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FollowFeedDropdown)
);
