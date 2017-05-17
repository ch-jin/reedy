import { connect } from "react-redux";
import HomePageNav from "./home_page_nav";
import { clearErrors } from "../../actions/session_actions";

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(null, mapDispatchToProps)(HomePageNav);
