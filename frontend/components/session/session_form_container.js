import { connect } from "react-redux";
import { login, signup } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";
import SessionForm from "./session_form";

const formType = pathname => {
  if (pathname === "/signup") {
    return "Sign Up";
  } else if (pathname === "/login") {
    return "Log In";
  }
};

const mapStateToProps = (state, { location }) => ({
  formType: formType(location.pathname),
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
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
