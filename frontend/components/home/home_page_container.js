import { connect } from "react-redux";
import HomePage from "./home_page";
import { clearErrors } from "../../actions/session_actions";

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(null, mapDispatchToProps)(HomePage);
