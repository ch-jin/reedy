import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MainNavDropdown from "./main_nav_dropdown";
import { logout } from "../../actions/session_actions";
import { redirectOnLogout } from "../../utils/session_route_util";

const mapStateToProps = state => ({
  username: state.session.currentUser.username,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLogout: () => {
    return dispatch(logout()).then(() => redirectOnLogout(ownProps));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainNavDropdown)
);
