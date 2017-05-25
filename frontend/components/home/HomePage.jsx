import React from "react";
import glamorous from "glamorous";
import { Route, Link } from "react-router-dom";
import SessionModal from "../session/SessionModal";
import HomePageNav from "./HomePageNav";
import HomePageFeatures from "./HomePageFeatures";
import HomePageHeader from "./HomePageHeader";
import HomePageScreenshot from "./HomePageScreenshot";
import HomePageFooter from "./HomePageFooter";
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
              <glamorous.Span position="relative" bottom="23px">
                {" "}Get Started{" "}
              </glamorous.Span>
            </GetStartedButton>
          </Link>

          <HomePageScreenshot />
          <HomePageFeatures />

          <Link className="no-decoration" to="/signup">
            <GetStartedButton>
              <GetStartedImg src={window.invertLogoURL} alt="" />
              <glamorous.Span position="relative" bottom="23px">
                {" "}Get Started{" "}
              </glamorous.Span>
            </GetStartedButton>
          </Link>
          <HomePageFooter />
        </HomePageContent>
      </div>
    );
  }
}

export default HomePage;
