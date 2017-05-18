import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { toggleUserDropdown } from "../../actions/dropdown_actions";
import MainNavDropdown from "./main_nav_dropdown";

const mapStateToProps = state => ({
  active: state.dropdown.userDropdown,
  username: state.session.currentUser.username,
});

const mapDispatchToProps = (dispatch, { active }) => ({
  handleLogout: () => {
    dispatch(toggleUserDropdown(false));
    return dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  MainNavDropdown
);
