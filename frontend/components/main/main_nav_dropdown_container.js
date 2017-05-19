import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import { toggleUserDropdown } from "../../actions/dropdown_actions";
import MainNavDropdown from "./main_nav_dropdown";

const mapStateToProps = state => ({
  active: state.dropdown.userDropdown,
  username: state.session.currentUser.username,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  handleLogout: () => {
    dispatch(toggleUserDropdown(false));
    dispatch(logout()).then(() => history.push("/"));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainNavDropdown)
);
