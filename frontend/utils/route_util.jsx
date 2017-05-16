import React from "react";

import { connect } from "react-redux";
import { withRouter, Redirect, Route } from "react-router-dom";

const Auth = withRouterProps => {
  const { component: Component, path, loggedIn } = withRouterProps;

  return (
    <Route
      path={path}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />}
    />
  );
};

const Protected = withRouterProps => {
  const { component: Component, path, loggedIn } = withRouterProps;

  return (
    <Route
      path={path}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/" />}
    />
  );
};

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(Protected)
);
