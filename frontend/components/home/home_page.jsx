import React from "react";
import { Route } from "react-router-dom";
import SessionModal from "../session/session_modal";
import HomePageNav from "./home_page_nav";
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
      <div>
        <Route path="/login" component={SessionModal} />
        <Route path="/signup" component={SessionModal} />

        <HomePageNav />

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
