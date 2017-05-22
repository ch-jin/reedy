import { connect } from "react-redux";
import { updateCollection } from "../../actions/collection_actions";
import {
  addFeedToCollection,
  allCollections,
} from "../../utils/collections_util";
import FollowFeedDropdown from "./FollowFeedDropdown";

const mapStateToProps = state => ({
  collections: allCollections(state),
  active: state.dropdown.followFeedDropdown,
});

const mapDispatchToProps = dispatch => ({
  followFeed: (feedId, collection) => {
    const newCollection = addFeedToCollection(feedId, collection);
    return dispatch(updateCollection(newCollection));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  FollowFeedDropdown
);
