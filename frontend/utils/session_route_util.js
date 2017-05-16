export const redirectOnLogout = ownProps => {
  if (ownProps.location.pathname !== "/") {
    ownProps.history.push({ pathname: "/" });
  }
};
