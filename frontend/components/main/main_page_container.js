import React from "react";
import { connect } from "react-redux";
import { toggleUserDropdown } from "../../actions/dropdown_actions";
import MainPage from "./main_page";

const mapStateToProps = ({ dropdown, loading }) => ({
  userDropdown: dropdown.userDropdown,
  loading: loading.loadingSession,
});

const mapDispatchToProps = dispatch => ({
  closeDropdown: () => dispatch(toggleUserDropdown(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
