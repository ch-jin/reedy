import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/session_actions";
import HomePage from "./home_page";

const mapDispatchToProps = dispatch => ({
  loginGuest: () =>
    dispatch(login({ username: "Guest", password: "password" })),
});

export default withRouter(connect(null, mapDispatchToProps)(HomePage));
