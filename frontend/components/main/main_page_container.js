import React from "react";
import { connect } from "react-redux";
import { toggleUserDropdown } from "../../actions/dropdown_actions";
import MainPage from "./main_page";

const mapStateToProps = ({ dropdown }) => ({
  userDropdown: dropdown.userDropdown,
});

const mapDispatchToProps = dispatch => ({
  toggleUserDropdown: status => dispatch(toggleUserDropdown(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
