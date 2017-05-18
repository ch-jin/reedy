import React from "react";
import { connect } from "react-redux";
import { toggleUserDropdown } from "../../actions/dropdown_actions";
import MainNav from "./main_nav";

const mapStateToProps = ({ dropdown }) => ({
  userDropdown: dropdown.userDropdown,
});

const mapDispatchToProps = (dispatch, { userDropdown }) => ({
  handleImgClick: () => dispatch(toggleUserDropdown(!userDropdown)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
