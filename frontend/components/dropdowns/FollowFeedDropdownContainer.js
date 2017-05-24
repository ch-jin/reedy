import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { allCollections } from "../../selectors/collection_selectors";
import {
  addFeedToCollection,
  deleteFeedFromCollection,
  createCollection,
} from "../../actions/collection_actions";
import { toggleFollowFeedDropdown } from "../../actions/dropdown_actions";
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

  createCollection: (title, feedId) =>
    dispatch(createCollection(title, feedId)),

  toggleFollowFeedDropdown: () => dispatch(toggleFollowFeedDropdown()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FollowFeedDropdown)
);
