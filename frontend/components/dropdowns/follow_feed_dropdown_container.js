import { connect } from "react-redux";
import { updateCollection } from "../../actions/collection_actions";
import { addFeedToCollection } from "../../utils/collection_util";
import FollowFeedDropdown from "./follow_feed_dropdown";

const mapStateToProps = state => ({
  collections: state.collections,
  active: state.dropdown.followFeedDropdown
});

const mapDispatchToProps = dispatch => ({
  followFeed: (feedId, collection) => {
    const newCollection = addFeedToCollection(feedId, collection);
    return dispatch(updateCollection(newCollection));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  FollowFeedDropdown
);
