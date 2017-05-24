import { connect } from "react-redux";
import { toggleFollowFeedDropdown } from "../../actions/dropdown_actions";
import FollowButton from "./FollowButton";
import { isFeedFollowed } from "../../selectors/feed_selectors";

const mapStateToProps = state => ({
  followed: isFeedFollowed(state),
});

const mapDispatchToProps = dispatch => ({
  handleClick: e => {
    e.stopPropagation();
    return dispatch(toggleFollowFeedDropdown());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
