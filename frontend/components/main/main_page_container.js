import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MainPage from "./main_page";
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
  connect(mapStateToProps, mapDispatchToProps)(MainPage)
);
