import { connect } from "react-redux";
import { toggleUserDropdown } from "../../actions/dropdown_actions";
import MainNav from "./main_nav";

const mapStateToProps = state => ({
  userDropdown: state.dropdown.userDropdown,
  title: state.feeds.current,
});

const mapDispatchToProps = (dispatch, { userDropdown }) => ({
  handleImgClick: () => dispatch(toggleUserDropdown(!userDropdown)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
