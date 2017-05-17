import React from "react";
import { Link, Route } from "react-router-dom";
import SessionModal from "../session/session_modal";
import HomePageFeatures from "./home_page_features";
import HomePageHeader from "./home_page_header";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.clearErrors = this.clearErrors.bind(this);
  }

  clearErrors() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className="home-wrapper">
        Reedy
        <br />

        <Link onClick={this.clearErrors} to="/login">Login</Link>
        <br />
        <Link onClick={this.clearErrors} to="/signup">Signup</Link>

        <br />
        <br />

        <Route path="/login" component={SessionModal} />
        <Route path="/signup" component={SessionModal} />

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
