import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import HomePage from "./home_page";

const mapDispatchToProps = dispatch => ({
  loginGuest: () =>
    dispatch(login({ username: "Guest", password: "password" })),
});

export default connect(null, mapDispatchToProps)(HomePage);
