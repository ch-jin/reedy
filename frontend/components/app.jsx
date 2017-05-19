import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HomePageContainer from "./home/home_page_container";
import MainPageContainer from "./main/main_page_container";

const App = ({ loggedIn, location }) => (
  <div>
    {loggedIn && <MainPageContainer path={location.pathname} />}
    {!loggedIn && <HomePageContainer />}
  </div>
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
});

export default withRouter(connect(mapStateToProps)(App));
