import React from "react";
import { Route } from "react-router-dom";
import SessionModal from "../session/session_modal";
import HomePageNavContainer from "./home_page_nav_container";
import HomePageFeatures from "./home_page_features";
import HomePageHeader from "./home_page_header";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Route path="/login" component={SessionModal} />
        <Route path="/signup" component={SessionModal} />

        <HomePageNavContainer />
        <div className="home-screenshot">
          Screenshot
        </div>

        <HomePageFeatures />
        <HomePageHeader />
      </div>
    );
  }
}

export default HomePage;
