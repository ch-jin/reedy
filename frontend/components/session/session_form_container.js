import { connect } from "react-redux";
import { login, signup } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  formType: ownProps.location.pathname,
  errors: state.session.errors,
});

const mapDispatchToProps = (dispatch, { location }) => ({
  processForm: user => {
    if (location.pathname === "/login") {
      return dispatch(login(user));
    } else if (location.pathname === "/signup") {
      return dispatch(signup(user));
    }
  },
});

export default withRouter(
  connect(null, mapDispatchToProps)(SessionForm)
);
