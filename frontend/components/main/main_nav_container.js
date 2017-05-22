import { connect } from "react-redux";
import { toggleUserDropdown } from "../../actions/dropdown_actions";
import MainNav from "./main_nav";

const mapStateToProps = state => ({
  userDropdown: state.dropdown.userDropdown,
  title: state.feeds.current
});

const mapDispatchToProps = dispatch => ({
  handleImgClick: e => {
    e.stopPropagation();
    return dispatch(toggleUserDropdown());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
