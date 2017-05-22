import React from "react";
import { Route, Link } from "react-router-dom";
import SessionModal from "../session/SessionModal";
import HomePageNav from "./HomePageNav";
import HomePageFeatures from "./HomePageFeatures";
import HomePageHeader from "./HomePageHeader";
import HomePageScreenshot from "./HomePageScreenshot";
import {
  HomePageContent,
  GetStartedButton,
  GetStartedImg,
} from "../../styles/home";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Route path="/login" component={SessionModal} />
        <Route path="/signup" component={SessionModal} />

        <HomePageNav />

        <HomePageContent>
          <HomePageHeader />

          <Link className="no-decoration" to="/signup">
            <GetStartedButton>
              <GetStartedImg src={window.invertLogoURL} alt="" />
              Get Started
            </GetStartedButton>
          </Link>

          <HomePageScreenshot />
          <HomePageFeatures />
        </HomePageContent>
      </div>
    );
  }
}

export default HomePage;
