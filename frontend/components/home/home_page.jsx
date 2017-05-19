import React from "react";
import { Route } from "react-router-dom";
import SessionModal from "../session/session_modal";
import HomePageNavContainer from "./home_page_nav_container";
import HomePageFeatures from "./home_page_features";
import HomePageHeader from "./home_page_header";
import {
  HomePageContent,
  Screenshot,
  DemoLoginButton,
} from "../../styles/home";

class HomePage extends React.Component {
  render() {
    const { loginGuest } = this.props;
    return (
      <div className="home-wrapper">
        <Route path="/login" component={SessionModal} />
        <Route path="/signup" component={SessionModal} />

        <HomePageNavContainer />

        <HomePageContent>
          <HomePageHeader />

          <DemoLoginButton onClick={loginGuest}>
            Get Started
          </DemoLoginButton>

          <Screenshot>
            Screenshot
          </Screenshot>

          <HomePageFeatures />
        </HomePageContent>
      </div>
    );
  }
}

export default HomePage;
